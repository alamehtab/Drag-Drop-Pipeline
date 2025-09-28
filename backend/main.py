from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx
import os

app = FastAPI()

# CORS middleware to allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL in production
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
async def parse_pipeline(request: Request):
    """
    Receives a JSON payload with 'nodes' and 'edges',
    builds a directed graph, and returns basic info.
    """
    data = await request.json()
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    # Build directed graph
    G = nx.DiGraph()
    for node in nodes:
        G.add_node(node["id"])
    for edge in edges:
        G.add_edge(edge["source"], edge["target"])

    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": nx.is_directed_acyclic_graph(G),
    }

if __name__ == "__main__":
    # Use the PORT environment variable for deployment (Railway)
    port = int(os.environ.get("PORT", 8000))
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)

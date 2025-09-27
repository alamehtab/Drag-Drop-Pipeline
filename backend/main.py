from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
async def parse_pipeline(request: Request):
    data = await request.json()
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

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

import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    if (nodes.length === 0) {
      alert("No nodes added to the pipeline!");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await res.json();
      alert(`Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
    } catch (err) {
      console.error("Backend error:", err);
      alert("Error connecting to backend: " + err.message);
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

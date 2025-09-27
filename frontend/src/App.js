import React, { useState, useRef, useCallback } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

import Toolbar from "./toolbar";
import { SubmitButton } from "./submit";
import { useStore } from "./store";

import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";
import { MathNode } from "./nodes/mathNode";
import { ApiNode } from "./nodes/apiNode";
import { ImageNode } from "./nodes/imageNode";

import { UppercaseNode } from "./nodes/uppercaseNode";
import { CounterNode } from "./nodes/counterNode";
import { JoinNode } from "./nodes/joinNode";
import { ConditionNode } from "./nodes/conditionNode";
import { RandomNode } from "./nodes/randomNode";

const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  output: OutputNode,
  text: TextNode,
  math: MathNode,
  api: ApiNode,
  image: ImageNode,
  uppercase: UppercaseNode,
  counter: CounterNode,
  join: JoinNode,
  condition: ConditionNode,
  random: RandomNode,
};

function App() {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const { nodes, edges, addNode, onNodesChange, onEdgesChange, onConnect, getNodeID } = useStore();

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const boundingRect = reactFlowWrapper.current.getBoundingClientRect();
      const position = reactFlowInstance.project({
        x: event.clientX - boundingRect.left,
        y: event.clientY - boundingRect.top,
      });

      const nodeID = getNodeID(type);
      addNode({ id: nodeID, type, position, data: {} });
    },
    [reactFlowInstance, addNode, getNodeID]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column" }}>
      <Toolbar />
      <div ref={reactFlowWrapper} style={{ flexGrow: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background gap={20} color="#aaa" />
        </ReactFlow>
      </div>
      <SubmitButton />
    </div>
  );
}

export default App;

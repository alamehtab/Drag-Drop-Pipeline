import { Position } from "reactflow";

export const nodeConfigs = {
  customInput: {
    title: "Input",
    fields: [
      { name: "inputName", type: "text", label: "Name" },
      {
        name: "inputType",
        type: "select",
        label: "Type",
        options: ["Text", "File"],
      },
    ],
    handles: [{ type: "source", position: Position.Right, id: "value" }],
    style: { background: "#E0F7FA", borderColor: "#00ACC1" },
  },

  llm: {
    title: "LLM",
    fields: [],
    handles: [
      { type: "target", position: Position.Left, id: "system", style: { top: "33%" } },
      { type: "target", position: Position.Left, id: "prompt", style: { top: "66%" } },
      { type: "source", position: Position.Right, id: "response" },
    ],
    style: { background: "#FFF3E0", borderColor: "#FB8C00" },
  },

  output: {
    title: "Output",
    fields: [
      { name: "outputName", type: "text", label: "Name" },
      {
        name: "outputType",
        type: "select",
        label: "Type",
        options: ["Text", "Image"],
      },
    ],
    handles: [{ type: "target", position: Position.Left, id: "value" }],
    style: { background: "#E8F5E9", borderColor: "#43A047" },
  },

  text: {
    title: "Text",
    fields: [{ name: "text", type: "textarea", label: "Text (use {{variable}})" }],
    handles: [{ type: "source", position: Position.Right, id: "output" }],
    style: { background: "#F3E5F5", borderColor: "#8E24AA" },
  },

  math: {
    title: "Math",
    fields: [{ name: "expression", type: "text", label: "Expression" }],
    handles: [
      { type: "target", position: Position.Left, id: "input" },
      { type: "source", position: Position.Right, id: "result" },
    ],
    style: { background: "#FFFDE7", borderColor: "#FDD835" },
  },

  api: {
    title: "API Call",
    fields: [
      { name: "url", type: "text", label: "API URL" },
      {
        name: "method",
        type: "select",
        label: "Method",
        options: ["GET", "POST"],
      },
    ],
    handles: [
      { type: "target", position: Position.Left, id: "request" },
      { type: "source", position: Position.Right, id: "response" },
    ],
    style: { background: "#E3F2FD", borderColor: "#1E88E5" },
  },

  image: {
    title: "Image",
    fields: [{ name: "url", type: "text", label: "Image URL" }],
    handles: [{ type: "source", position: Position.Right, id: "image" }],
    style: { background: "#FBE9E7", borderColor: "#E64A19" },
  },

  uppercase: {
    title: "Uppercase",
    fields: [],
    handles: [
      { type: "target", position: Position.Left, id: "input" },
      { type: "source", position: Position.Right, id: "output" },
    ],
    style: { background: "#FFEBEE", borderColor: "#E53935" },
  },

  counter: {
    title: "Counter",
    fields: [{ name: "start", type: "text", label: "Start Value" }],
    handles: [{ type: "source", position: Position.Right, id: "count" }],
    style: { background: "#E8EAF6", borderColor: "#3949AB" },
  },

  join: {
    title: "Join",
    fields: [{ name: "sep", type: "text", label: "Separator" }],
    handles: [
      { type: "target", position: Position.Left, id: "a", style: { top: "30%" } },
      { type: "target", position: Position.Left, id: "b", style: { top: "70%" } },
      { type: "source", position: Position.Right, id: "out" },
    ],
    style: { background: "#FFFDE7", borderColor: "#FBC02D" },
  },

  condition: {
    title: "Condition",
    fields: [{ name: "expr", type: "text", label: "Condition" }],
    handles: [
      { type: "target", position: Position.Left, id: "in" },
      { type: "source", position: Position.Right, id: "true", style: { top: "30%" } },
      { type: "source", position: Position.Right, id: "false", style: { top: "70%" } },
    ],
    style: { background: "#E0F2F1", borderColor: "#00796B" },
  },

  random: {
    title: "Random",
    fields: [],
    handles: [{ type: "source", position: Position.Right, id: "value" }],
    style: { background: "#FCE4EC", borderColor: "#D81B60" },
  },
};

import { NodeWrapper } from "./NodeWrapper";
import { nodeConfigs } from "./nodeConfig";

export const LLMNode = (props) => (
  <NodeWrapper {...props} config={nodeConfigs.llm} />
);

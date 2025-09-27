import { NodeWrapper } from "./NodeWrapper";
import { nodeConfigs } from "./nodeConfig";

export const TextNode = (props) => (
  <NodeWrapper {...props} config={nodeConfigs.text} />
);

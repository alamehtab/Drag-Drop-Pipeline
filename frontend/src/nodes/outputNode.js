import { NodeWrapper } from "./NodeWrapper";
import { nodeConfigs } from "./nodeConfig";

export const OutputNode = (props) => (
  <NodeWrapper {...props} config={nodeConfigs.output} />
);

import { NodeWrapper } from "./NodeWrapper";
import { nodeConfigs } from "./nodeConfig";

export const MathNode = (props) => (
  <NodeWrapper {...props} config={nodeConfigs.math} />
);

import { NodeWrapper } from "./NodeWrapper";
import { nodeConfigs } from "./nodeConfig";

export const ApiNode = (props) => (
  <NodeWrapper {...props} config={nodeConfigs.api} />
);

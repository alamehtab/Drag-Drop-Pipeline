import { NodeWrapper } from "./NodeWrapper";
import { nodeConfigs } from "./nodeConfig";

export const InputNode = (props) => (
  <NodeWrapper {...props} config={nodeConfigs.customInput} />
);

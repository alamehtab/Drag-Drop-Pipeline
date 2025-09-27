import { NodeWrapper } from "./NodeWrapper";
import { nodeConfigs } from "./nodeConfig";

export const ImageNode = (props) => (
  <NodeWrapper {...props} config={nodeConfigs.image} />
);

import { NodeWrapper } from "./NodeWrapper";
import { nodeConfigs } from "./nodeConfig";

export const RandomNode = (props) => (
    <NodeWrapper {...props} config={nodeConfigs.random} />
);

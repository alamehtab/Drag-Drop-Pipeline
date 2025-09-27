import { NodeWrapper } from "./NodeWrapper";
import { nodeConfigs } from "./nodeConfig";

export const JoinNode = (props) => (
    <NodeWrapper {...props} config={nodeConfigs.join} />
);

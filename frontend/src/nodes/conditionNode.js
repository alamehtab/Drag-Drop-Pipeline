import { NodeWrapper } from "./NodeWrapper";
import { nodeConfigs } from "./nodeConfig";

export const ConditionNode = (props) => (
    <NodeWrapper {...props} config={nodeConfigs.condition} />
);

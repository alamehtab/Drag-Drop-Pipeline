import { NodeWrapper } from "./NodeWrapper";
import { nodeConfigs } from "./nodeConfig";

export const UppercaseNode = (props) => (
    <NodeWrapper {...props} config={nodeConfigs.uppercase} />
);

import { NodeWrapper } from "./NodeWrapper";
import { nodeConfigs } from "./nodeConfig";

export const CounterNode = (props) => (
    <NodeWrapper {...props} config={nodeConfigs.counter} />
);

import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Hello" },
    type: "input",
  },
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: { label: "World" },
  },
];

const edges = [{ id: "1-2", source: "1", target: "2" }];

function Flow() {
  return (
    <div className="h-screen">
      <ReactFlow nodes={nodes} edges={edges} colorMode="dark">
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;

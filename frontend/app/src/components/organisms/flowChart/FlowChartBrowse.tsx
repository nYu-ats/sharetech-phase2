import React, { VFC, useState, ReactNode, useEffect } from 'react';
import { Canvas, hasLink, NodeData, EdgeData, Node, Edge, removeAndUpsertNodes, CanvasPosition, Label, Port, Position, PortData } from 'reaflow';
import { MyNoteContentItem } from '../noteLinkContainer/MyNoteContentContainer';

type FlowChartProps = {
  readOnly?: boolean
  attribute: MyNoteContentItem;
}

export const FlowChartBrowse: VFC<FlowChartProps> = (props) => {
  const [selections, setSelections] = useState<Array<string>>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('');
  // nodes,edgesについてもFlowChartコンポーネント内で管理する必要がある
  const [nodes, setNodes] = useState<Array<NodeData>>([]);
  const [edges, setEdges] = useState<Array<EdgeData>>([]);

  const xxx = () => {
    setNodes((props.attribute.flowChart?.nodes as Array<NodeData>).map(node => createNodeData(node)))
    setEdges(props.attribute.flowChart?.edges as Array<EdgeData>)
  }

  const createNodeData = (node: NodeData) => {
    const newNode:NodeData = {
      id: node.id,
      width: 192,
      height: 96,
      text: node.text
    }
    return newNode;
  }

  const yyy = useEffect(xxx, [])

  return (
    <div style={{ backgroundColor: "#dcdcdc", borderRadius: "4px", width: "100%", height: "512px" }}>
      <style>
        {`
        .from {
          fill: #000080;
          stroke: #00bfff;
        }
        `}
      </style>
      <Canvas
        maxHeight={500}
        maxWidth={1024}
        direction="RIGHT"
        nodes={nodes}
        edges={edges}
        selections={selections}
        disabled={true}
        node={
          <Node
            style={{ fill: "white", stroke: '#00bfff', strokeWidth: 2 }}
            label={<Label style={{ fill: '#666' }} />}
          >
          </Node>
        }
      />
    </div>
  )
}
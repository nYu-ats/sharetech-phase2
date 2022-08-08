import { VFC, useState, useEffect } from 'react';
import { Canvas, hasLink, NodeData, EdgeData, Node, Edge, removeAndUpsertNodes, Label } from 'reaflow';
import { ContentAttributeProps } from '../../../pages/MyNote.page';
import { FloatButton } from '../../atoms/button/FloatButton';
import { TechNoteContentAttributeProps } from '../../../pages/TechNoteDetail.page';

type FlowChartProps = {
    readOnly?: boolean
    attribute: ContentAttributeProps | TechNoteContentAttributeProps;
    onAddNode: (attribute: ContentAttributeProps, node:NodeData) => void;
    onDeleteNode: (attribute: ContentAttributeProps, nodes:Array<NodeData>, edges:Array<EdgeData>) => void;
    onAddEdge: (attribute: ContentAttributeProps, edge:EdgeData) => void;
    onDelEdge: (attribute: ContentAttributeProps, edges:Array<EdgeData>) => void;
    onTextChange: (attribute: ContentAttributeProps, value:string, nodeId:string) => void;
}

export const FlowChart:VFC<FlowChartProps> = (props) => {
  const [selections, setSelections] = useState<Array<string>>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('');
  // nodes,edgesについてもFlowChartコンポーネント内で管理する必要がある
  const [nodes, setNodes] = useState<Array<NodeData>>([]);
  const [edges, setEdges] = useState<Array<EdgeData>>([]);

  const createNewNode = (attribute: ContentAttributeProps) => {
    let newFlowChart = attribute.state.flowChart;
    if(newFlowChart){
        let id;
        const currentNodes = newFlowChart.nodes;
        if(currentNodes.length > 0){
            const currentIds = currentNodes.map((node) => {
                return Number.parseInt(node.id);
            }).sort();
            let baseId = currentIds.filter((id, index, array) => {
                if(currentIds.length - 1 > index){
                    if(array[index+1] - id > 1){
                        // 次のidが1つ以上飛ばしている場合、次のidの元にする候補とする
                        return id;
                    }
                }else{
                    // 上記条件に当てはまらない場合もあるため、最後のidを必ず候補として抽出する
                    return id;
                }
            })[0];

            id = baseId + 1;
        }else{
            id = 1;
        }

        return {
          id: String(id),
          width:192,
          height:96
        }
    }
  }

  useEffect(() => {
    if(props.attribute.state.flowChart){
      setNodes(props.attribute.state.flowChart.nodes);
      setEdges(props.attribute.state.flowChart.edges);
    }
  }, [])

  return (
      <div style={{backgroundColor:"#dcdcdc", borderRadius:"4px", width:"100%", height:"512px"}}>
        {props.readOnly ? <div></div> : (
          <div style={{width:"7em", padding:'.5em'}}>
            <FloatButton 
              label='+ カード' 
              color='white' 
              width='6em' 
              height='24px' 
              padding='0'
              backgroundColor='pink' 
              hoverBgColor='pink'
              borderRadius='4px'
              onClick={() => {
                const newNode = createNewNode(props.attribute as ContentAttributeProps)
                if (newNode){
                  setNodes([...nodes, newNode]);
                  props.onAddNode(props.attribute as ContentAttributeProps, newNode)
                }
                }}/>
        </div>
        )}
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
        maxWidth={1500}
        direction="RIGHT"
        nodes={nodes}
        edges={edges}
        selections={selections}
        disabled={props.readOnly}
        node={
          <Node
          style={{fill:"white", stroke: '#00bfff', strokeWidth:2}}
          label={<Label style={{fill:'#666'}}/>}
          onClick={(e, node) => {
            document.getElementById(selectedNodeId)?.getElementsByClassName('textInput')[0]
            .setAttribute('style', 'width:192px;height:96px;pointer-events:none;');
            e.currentTarget.parentElement?.getElementsByClassName('textInput')[0]
            .setAttribute('style', 'width:192px;height:96px');
            setSelectedNodeId(e.currentTarget.parentElement?.getAttribute('id') as string);
            setSelections([node.id]);
          }}
          onRemove={(e, node) => {
            const result = removeAndUpsertNodes(
              props.attribute.state.flowChart?.nodes as Array<NodeData>, 
              props.attribute.state.flowChart?.edges as Array<EdgeData>, 
              node);
            setEdges(result.edges);
            setNodes(result.nodes);
            props.onDeleteNode(props.attribute as ContentAttributeProps, result.nodes, result.edges)
            setSelections([]);
          }}
          onDragStart={()=>{
            document.getElementById(selectedNodeId)?.getElementsByClassName('textInput')[0]
            .setAttribute('style', 'width:192px;height:96px;pointer-events:none;');
          }}
          >
            <foreignObject
            className='textInput'
            style={{
              width:"192px", 
              height:"96px", 
              pointerEvents:"none"}}>
              <textarea 
              cols={10} 
              rows={2} 
              maxLength={50} 
              wrap='soft'
              style={{
                width:"173px", 
                height:"78px" , 
                padding:"8px", 
                margin:"1px", 
                backgroundColor:"white", 
                border:"none", 
                outline:"none", 
                resize:"none"}}
              onChange={(e)=>{
                const targetNodeId = e.target.parentElement?.parentElement?.getAttribute('id')?.split('-').pop();
                props.onTextChange(props.attribute as ContentAttributeProps, e.target.value, targetNodeId as string)}}/>
            </foreignObject>
          </Node>
        }
        edge = {
          <Edge
          onClick={(e, edge) => {
            setSelections([edge.id]);
          }}
          onRemove={(e, edge) => {
            const newEdges = edges.filter(e => e.id !== `${edge.from}-${edge.to}`);
            setEdges(newEdges);
            props.onDelEdge(props.attribute as ContentAttributeProps, newEdges)
            setSelections([]);
          }}
          />
        }
        onCanvasClick = {(e)=>{
          document.getElementById(selectedNodeId)?.getElementsByClassName('textInput')[0]
          .setAttribute('style', 'width:192px;height:96px;pointer-events:none;');
          setSelections([]);
          setSelectedNodeId('');
        }}
        onNodeLinkCheck={(e, from: NodeData, to: NodeData) => {
          return !hasLink(props.attribute.state.flowChart?.edges as Array<EdgeData>, from, to);
        }}
        onNodeLink={(e, from, to) => {
          const id = `${from.id}-${to.id}`;
          setEdges([
            ...edges,
            {
              id,
              from: from.id,
              to: to.id,
            }
          ]);
          props.onAddEdge(props.attribute as ContentAttributeProps, {id, from: from.id, to: to.id})
        }}
        />
    </div>
  )
}
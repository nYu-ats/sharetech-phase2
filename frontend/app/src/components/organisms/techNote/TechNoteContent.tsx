import { VFC } from 'react';
import { TechNoteContentAttributeProps } from '../../../pages/TechNoteDetail.page';
import { FlowChart } from '../flowChart/FlowChart';
import { OutlinedFlowChartIcon } from '../../../icons/OutlinedFlowChartIcon';
import { OutlinedTableIcon } from '../../../icons/OutlinedTableIcon';
import { OutlinedChartIcon } from '../../../icons/OutlinedChartIcon';
import { Figure } from '../../molecules/figure/Figure';
import { FlexibleTable } from '../extendedTable/FlexibleTable';
import { DataBarContainer } from '../dataBarContainer/DataBarContainer';

export type TechNoteContentProps = {
    contentName: string;
    attribute: TechNoteContentAttributeProps;
}

export const TechNoteContent:VFC<TechNoteContentProps> = (props) => {
    return (
        <div style={{paddingBottom:"3em"}}>
            <div style={{
                fontSize:"1.2em", 
                fontWeight:"bold" , 
                borderLeft:"5px solid #00bfff", 
                marginBottom:".5em", 
                paddingLeft:".1em",
                color:"#666"}}>
                {props.contentName}
            </div>
            <div style={{ margin: "0 2rem 2em 2rem", backgroundColor:'white', padding:'.1rem .5rem'}}>
                <p>{props.attribute.state.text}</p>
            </div>
            {
                props.attribute.state.flowChart ? 
                <div style={{ marginBottom: "2em" }}>
                    <Figure
                    title='フローチャート'
                    icon={<OutlinedFlowChartIcon/>}
                    content={<FlowChart
                        attribute={props.attribute}
                        readOnly={true}
                        onAddNode={()=>null}
                        onDeleteNode={()=>null}
                        onAddEdge={()=>null}
                        onDelEdge={()=>null}
                        onTextChange={()=>null}
                        />}
                    />
                </div> : null
            }
            {
                props.attribute.state.table ?
                <div style={{ marginBottom: "2em" }}>
                    <Figure
                    title='テーブル'
                    icon={<OutlinedTableIcon/>}
                    content={<FlexibleTable 
                        head={props.attribute.state.table?.head as Array<string>}
                        data={props.attribute.state.table?.data as Array<Array<string>>}
                        attribute={props.attribute}
                        readonly={true}
                        onAddRow={() => null}
                        onDeleteRow={() => null}
                        onAddColumn={() => null}
                        onDeleteColumn={() => null}
                        onDataChange={() => null}
                        onHeadChange={() => null}
                        />}
                    />
                </div> : null
            }
            {
                props.attribute.state.dataBar ?
                <div style={{ marginBottom: "2em" }}>
                    <Figure
                    title='データバー'
                    icon={<OutlinedChartIcon/>}
                    content={<DataBarContainer 
                            attribute={props.attribute}
                            readonly={true}
                            onAddDataBar={()=>null}
                            onDelDataBar={()=>null}
                            onLabelChange={()=>null}
                            onValueChnage={()=>null}
                            />}
                    />
                </div> : null
            }
            <div style={{marginBottom: "1em", marginLeft: "2em" }}>
                <div style={{ color: "#666", fontWeight: "bold", paddingRight: ".5em", marginBottom:'.5rem'}}>参照</div>
                {props.attribute.state.reference ? props.attribute.state.reference.map((item, index)=>{
                    return (
                        <div style={{margin:"0 2em 1em 2em"}}>
                            <a style={{color:'#666', fontWeight:'bold', textDecoration:'none'}} href={item}>{item}</a>
                        </div>
                    );
                }): null}
            </div>
        </div>
    );
}
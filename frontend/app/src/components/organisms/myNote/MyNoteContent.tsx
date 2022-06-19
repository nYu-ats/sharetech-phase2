import React, { VFC, useState, useContext } from 'react';
import { ContentAttributeProps, MyNoteContentContext } from '../../../pages/MyNote.page';
import { BaseMyNoteProps } from './BaseMyNote';
import { TextAreaInput } from '../../atoms/input/TextArea';
import { FloatButton } from '../../atoms/button/FloatButton';
import { FlowChart } from '../flowChart/FlowChart';
import { OutlinedFlowChartIcon } from '../../../icons/OutlinedFlowChartIcon';
import { OutlinedTableIcon } from '../../../icons/OutlinedTableIcon';
import { OutlinedChartIcon } from '../../../icons/OutlinedChartIcon';
import { FigureSelector } from '../../molecules/myNoteItem/FigureSelector';
import { Figure } from '../../molecules/figure/Figure';
import { FlexibleTable } from '../extendedTable/FlexibleTable';
import { DataBarContainer } from '../dataBarContainer/DataBarContainer';
import { SimpleButton } from '../../atoms/button/SimpleButton';
import { TextInput } from '../../atoms/input/TextInput';

export type MyNoteContentProps = BaseMyNoteProps & {
    contentName: string;
    contentDiscription: string;
    attribute: ContentAttributeProps;
}

export const MyNoteContent:VFC<MyNoteContentProps> = (props) => {
    const context = useContext(MyNoteContentContext);

    const [figureSelectorState, setFigureSelectorState] = useState<boolean>(false);
    const addFigure = (callback: (attribute: ContentAttributeProps)=>void, attribute:ContentAttributeProps) => {
        setFigureSelectorState(false);
        return callback(attribute);
    }
    const toggleIconSelector = (e: React.MouseEvent<HTMLButtonElement>) => {
        const nextFigureSelectorState = !figureSelectorState;
        setFigureSelectorState(nextFigureSelectorState);
    }

    return (
        <div style={{marginBottom:"3em"}}>
            <div style={{
                fontSize:"1.2em", 
                fontWeight:"bold" , 
                borderLeft:"5px solid #00bfff", 
                marginBottom:".5em", 
                paddingLeft:".1em",
                color:"#666"}}>
                {props.contentName}
            </div>
            <div style={{marginBottom:"1em"}}>
                <TextAreaInput 
                placeHolder={props.contentDiscription} 
                fontSize="1em" 
                border='none'
                onChange={(e) => context.changeDescription(props.attribute, e.target.value)}/>
            </div>
            <div style={{display:"flex", marginBottom:"1em", marginLeft:"2em"}}>
                <div style={{color: "#666", fontWeight:"bold", paddingRight:".5em"}}>参照</div>
                <div>
                    <FloatButton 
                    label='+' 
                    color='#666' 
                    width='24px' 
                    height='24px' 
                    padding='0'
                    backgroundColor='white' 
                    hoverBgColor='white'
                    borderRadius='50%'
                    onClick={()=>context.addRef(props.attribute)}/>
                </div>
            </div>
            {props.attribute.state.reference ? props.attribute.state.reference.map((item, index)=>{
                return (
                    <div style={{margin:"0 2em 1em 2em"}}>
                        <div style={{display:"flex", justifyContent:"flex-start", paddingTop:".5em"}} data-index={index}>
                            <div style={{margin:"auto 0", paddingRight:"1em"}}>
                                <SimpleButton
                                    label='削除'
                                    width='5em'
                                    color='#666'
                                    backgroundColor='#ffffff'
                                    hoverBgColor='#87cefa'
                                    onClick={(e) => context.delRef(props.attribute, Number(e.currentTarget.parentElement?.parentElement?.getAttribute('data-index')))}/>
                            </div>
                            <div style={{paddingRight:".5em"}}>
                                <TextInput 
                                placeHolder="URL" 
                                border="none" 
                                onChange={(e) => context.changeRef(props.attribute, Number(e.currentTarget.parentElement?.parentElement?.getAttribute('data-index')), e.target.value)} 
                                value={item}/>
                            </div>
                        </div>
                    </div>
                );
            }): null}
            <div style={{display:"flex", marginBottom:"1em", marginLeft:"2em"}}>
                <div style={{color: "#666", fontWeight:"bold", paddingRight:".5em"}}>図表追加</div>
                <div>
                    <FloatButton 
                    label='+' 
                    color='#666' 
                    width='24px' 
                    height='24px' 
                    padding='0'
                    backgroundColor='white' 
                    hoverBgColor='white'
                    borderRadius='50%'
                    onClick={toggleIconSelector}/>
                </div>
                <div style={{
                        position: "relative", 
                        textAlign:"left",
                        display: figureSelectorState ? "block" : "none"
                        }}>
                        <FigureSelector 
                        targets={[
                            {name:'フローチャート', action:() => addFigure(context.createFlowChart, props.attribute)},
                            {name:'テーブル', action:() => addFigure(context.createTable, props.attribute)},
                            {name:'データバー', action:() => addFigure(context.createDataBar, props.attribute)},
                        ]}/>
                </div>                
            </div>
            {
                props.attribute.state.flowChart ? 
                <Figure
                title='フローチャート'
                icon={<OutlinedFlowChartIcon/>}
                content={<FlowChart
                    attribute={props.attribute}
                    onAddNode={context.addNode}
                    onDeleteNode={context.delNode}
                    onAddEdge={context.addEdge}
                    onDelEdge={context.delEdge}
                    onTextChange={context.textChange}
                    />}
                onDelete={() => context.deleteFlowChart(props.attribute)}/> : null
            }
            {
                props.attribute.state.table ?
                <Figure
                title='テーブル'
                icon={<OutlinedTableIcon/>}
                content={<FlexibleTable 
                    head={props.attribute.state.table?.head as Array<string>}
                    data={props.attribute.state.table?.data as Array<Array<string>>}
                    attribute={props.attribute}
                    onAddRow={context.addRow}
                    onDeleteRow={context.delRow}
                    onAddColumn={context.addCol}
                    onDeleteColumn={context.delCol}
                    onDataChange={context.dataChange}
                    onHeadChange={context.headChange}
                    />}
                onDelete={() => context.deleteTable(props.attribute)}/> : null
            }
            {
                props.attribute.state.dataBar ?
                <Figure
                title='データバー'
                icon={<OutlinedChartIcon/>}
                content={<DataBarContainer 
                        attribute={props.attribute}
                        onAddDataBar={context.addDataBar}
                        onDelDataBar={context.delDataBar}
                        onLabelChange={context.labelChange}
                        onValueChnage={context.valueChange}
                        />}
                onDelete={() => context.deleteDataBar(props.attribute)}
                /> : null
            }
        </div>
    );
}
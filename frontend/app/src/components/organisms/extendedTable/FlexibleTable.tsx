import React, { VFC } from 'react';
import { SimpleTable, SimpleTableProps } from '../../molecules/table/SimpleTable';
import { ContentAttributeProps } from '../../../pages/MyNote.page';
import { SimpleButton } from '../../atoms/button/SimpleButton';

export type FlexibleTableProps = SimpleTableProps & {
    attribute: ContentAttributeProps;
    onAddRow: (attribute: ContentAttributeProps) => void;
    onDeleteRow: (attribute: ContentAttributeProps) => void;
    onAddColumn: (attribute: ContentAttributeProps) => void;
    onDeleteColumn: (attribute: ContentAttributeProps) => void;
    onDataChange: (attribute: ContentAttributeProps, col:number, row:number, val:string) => void;
    onHeadChange: (attribute: ContentAttributeProps, col:number, val:string) => void;
}

export const FlexibleTable:VFC<FlexibleTableProps> = (props) => {

    return (
        <div style={{display:"flex", overflowX:"scroll"}}>
            <div style={{display:"flex", justifyContent:"flex-start", marginTop:"24px", marginRight:".5em", flexDirection:"column"}}>
                <div style={{width:"24px", marginTop:".5em"}}>
                    <SimpleButton 
                        label='↑' 
                        color='#666' 
                        width='24px' 
                        height='24px' 
                        backgroundColor='#e8ecef' 
                        hoverBgColor='#e8ecef'
                        onClick={()=>props.onDeleteRow(props.attribute)}/>
                </div>
                <div style={{width:"24px", marginTop:".5em"}}>
                        <SimpleButton 
                        label='↓' 
                        color='#666' 
                        width='24px' 
                        height='24px' 
                        backgroundColor='#e8ecef' 
                        hoverBgColor='#e8ecef'
                        onClick={()=>props.onAddRow(props.attribute)}/>
                </div>
            </div>
            <div>
            <div style={{display:"flex", justifyContent:"flex-end", marginBottom:".5em"}}>
                <div style={{width:"24px", marginLeft:".5em"}}>
                    <SimpleButton 
                    label='←' 
                    color='#666' 
                    width='24px' 
                    height='24px' 
                    backgroundColor='#e8ecef' 
                    hoverBgColor='#e8ecef'
                    onClick={()=>props.onDeleteColumn(props.attribute)}/>
                </div>
                <div style={{width:"24px", marginLeft:".5em"}}>
                    <SimpleButton 
                    label='→' 
                    color='#666' 
                    width='24px' 
                    height='24px' 
                    backgroundColor='#e8ecef' 
                    hoverBgColor='#e8ecef'
                    onClick={()=>props.onAddColumn(props.attribute)}/>
                </div>
            </div>
            <SimpleTable
                head={props.head}
                data={props.data}
                onDataUpdate={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
                    const row = Number(e.currentTarget.getAttribute('data-index'));
                    const col = Number(e.currentTarget.parentElement?.getAttribute('data-rowIndex'));
                    const val = e.target.value;
                    return props.onDataChange(props.attribute, col, row, val);
                }}
                onHeadUpdate={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
                    const col = Number(e.currentTarget.getAttribute('data-index'));
                    const val = e.target.value;
                    return props.onHeadChange(props.attribute, col, val);
                }}/>
            </div>
        </div>
    );
}
import React, { VFC } from 'react';
import { ContentAttributeProps } from '../../../pages/MyNote.page';
import { InputDataBar } from '../../molecules/dataBar/InputDataBar';
import { SimpleButton } from '../../atoms/button/SimpleButton';

export type DataBarContainerProps = {
    attribute: ContentAttributeProps;
    onAddDataBar: (attribute: ContentAttributeProps) => void;
    onDelDataBar: (attribute: ContentAttributeProps, index:number) => void;
    onLabelChange: (attribute: ContentAttributeProps, index:number, value:string) => void;
    onValueChnage: (attribute: ContentAttributeProps, index:number, value:number) => void;
}

export const DataBarContainer:VFC<DataBarContainerProps> = (props) => {
    const maxVal = props.attribute.state.dataBar ? Math.max(
        ...props.attribute.state.dataBar?.map((item) => {
            return item.value;
        })) : 100;

    return (
        <div>
            {props.attribute.state.dataBar?.map((item, index)=>{
                return (
                    <InputDataBar 
                    label={item.label}
                    value={item.value}
                    rate={item.value/maxVal} 
                    onDelDataBar={(e:React.MouseEvent<HTMLButtonElement>) => props.onDelDataBar(props.attribute, index)}
                    onLabelUpdate={(e:React.ChangeEvent<HTMLInputElement>) => props.onLabelChange(props.attribute, index, e.currentTarget.value)}
                    onValueUpdate={(e:React.ChangeEvent<HTMLInputElement>) => props.onValueChnage(props.attribute, index, Number(e.currentTarget.value))}
                    />)
            })}
            <div style={{padding:"1em 0"}}>
                <SimpleButton
                label='追加'
                width='5em'
                color='#666'
                backgroundColor='#00bfff'
                hoverBgColor='#87cefa'
                onClick={() => props.onAddDataBar(props.attribute)}/>
            </div>
       </div>
    );
}
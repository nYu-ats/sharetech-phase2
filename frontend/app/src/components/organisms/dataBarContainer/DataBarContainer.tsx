import React, { VFC } from 'react';
import { ContentAttributeProps } from '../../../pages/MyNote.page';
import { InputDataBar } from '../../molecules/dataBar/InputDataBar';
import { SimpleDataBar } from '../../molecules/dataBar/SimpleDataBar';
import { SimpleButton } from '../../atoms/button/SimpleButton';
import { TechNoteContentAttributeProps } from '../../../pages/TechNoteDetail.page';

export type DataBarContainerProps = {
    attribute: ContentAttributeProps | TechNoteContentAttributeProps;
    readonly?: boolean;
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
                    props.readonly ? (
                        <SimpleDataBar
                        label={item.label}
                        rate={item.value/maxVal} 
                        />
                    ) : (
                        <InputDataBar 
                        label={item.label}
                        value={item.value}
                        rate={item.value/maxVal} 
                        onDelDataBar={(e:React.MouseEvent<HTMLButtonElement>) => props.onDelDataBar(props.attribute as ContentAttributeProps, index)}
                        onLabelUpdate={(e:React.ChangeEvent<HTMLInputElement>) => props.onLabelChange(props.attribute as ContentAttributeProps, index, e.currentTarget.value)}
                        onValueUpdate={(e:React.ChangeEvent<HTMLInputElement>) => props.onValueChnage(props.attribute as ContentAttributeProps, index, Number(e.currentTarget.value))}
                        />
                    )
                )
            })}
            {props.readonly ? <div></div> : (
            <div style={{padding:"1em 0"}}>
                <SimpleButton
                label='追加'
                width='5em'
                color='#666'
                backgroundColor='#00bfff'
                hoverBgColor='#87cefa'
                onClick={() => props.onAddDataBar(props.attribute as ContentAttributeProps)}/>
            </div>
            )}
       </div>
    );
}
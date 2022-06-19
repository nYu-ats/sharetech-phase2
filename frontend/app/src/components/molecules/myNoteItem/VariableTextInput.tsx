import { VFC } from 'react';
import { TextInput } from '../../atoms/input/TextInput';
import { SimpleLabel } from '../../atoms/label/SimpleLabel';
import { SimpleButton } from '../../atoms/button/SimpleButton';
import { OutlinedDeleteIcon } from '../../../icons/OutlinedDeleteIcon';

export type VariableTextInputProps = {
    label:string;
    tags: Array<string>;
    disabled?: boolean;
    addTag: React.MouseEventHandler<HTMLButtonElement>;
    changeTag: React.ChangeEventHandler<HTMLInputElement>;
    deleteTag: React.MouseEventHandler<HTMLElement>;
}

export const VariableTextInput:VFC<VariableTextInputProps> =(props) => {
    const deleteIcon = (
        <OutlinedDeleteIcon/>
    );

    return (
        <div style={{display:props.disabled ? "flex": "block", flexWrap:"wrap"}}>
            {props.tags.map((item, index)=>{
                return (
                    <div
                     data-index={index} 
                     style={{
                         display:"flex", 
                         justifyContent:"left", 
                         backgroundColor:props.disabled ? '#696969' :'white', 
                         borderRadius:"4px", width: props.disabled ? "5em" :"13em", 
                         marginTop:"1em", marginRight:props.disabled ? ".2em" : "0", 
                         overflow:"hidden"}}>
                        <div>
                            <TextInput
                            placeHolder={props.label} 
                            border='none'
                            disabled={props.disabled}
                            backgroundColor={props.disabled ? '#696969' :'transparent'}
                            fontSize='1em'
                            color={props.disabled ? 'white' :'#666'}
                            onChange={props.changeTag}
                            value={item}
                            index={index}/>
                        </div>
                            <SimpleButton 
                            disabled={props.disabled}
                            label={deleteIcon} 
                            width='3em' 
                            height='3em' 
                            backgroundColor="transparent" 
                            hoverBgColor='transparent' 
                            onClick={props.deleteTag}/>
                    </div>
                );
            })}
            <div style={{display: props.disabled ? "none" : "block"}}>
                <SimpleButton 
                label='+タグ追加' 
                width='7em' 
                height='3em' 
                backgroundColor="transparent" 
                hoverBgColor='transparent' 
                color='#666'
                onClick={props.addTag}/>
            </div>
        </div>
    );
}
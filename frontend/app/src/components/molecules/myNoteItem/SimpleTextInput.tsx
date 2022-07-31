import { VFC } from 'react';
import { TextInput } from '../../atoms/input/TextInput';

export type SimpleTextInputProps = {
    label:string;
    disabled?: boolean;
    value: string;
    textChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SimpleTextInput:VFC<SimpleTextInputProps> =(props) => {
    return (
        <div style={{display:"flex", flexDirection:"column", backgroundColor:"white", borderRadius:"4px"}}>
            <TextInput 
            placeHolder={props.label} 
            border='none' 
            backgroundColor={props.disabled ? '#e8ecef' :'transparent' }
            fontSize='1.5em'
            value={props.value}
            fontWeight={props.disabled ? "bold":"normal"}
            onChange={props.textChange}
            disabled={props.disabled}
            />
        </div>
    );
}
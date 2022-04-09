import { VFC } from 'react';
import { BaseFormItemProps } from './BaseFormItem';
import { TextInput } from '../../atoms/input/TextInput';
import { SimpleLabel } from '../../atoms/label/SimpleLabel';

export type TextFormItemProps = BaseFormItemProps & {
    placeHolder: string;
}

export const TextFormItem: VFC<TextFormItemProps> = (props) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: props.flexRow ? 'row' : 'column',
            height:"100%",
            width:"100%"
            }}>
            {props.label ? <SimpleLabel label={props.label}/> : null}
            <TextInput placeHolder={props.placeHolder}/>
        </div>
    );
}
import { VFC } from 'react';
import { BaseInputProps } from './BaseInput'
import styled from 'styled-components';

export type TextInputProps = BaseInputProps & {
    backgroundColor?: string;
    border?: string;
    color?: string;
}

const StyledTextInput = styled.input<{
    color?:string,
    backgroundColor?:string,
    border?:string
}>
`
color: ${(props) => ( props.color ? props.color : "black")};
background-color: ${(props) => ( props.backgroundColor ? props.backgroundColor : "white")};
border: ${(props) => ( props.border ? props.border : "1px solid black")};
`

export const TextInput: VFC<TextInputProps> = (props) => {
    return (
        <StyledTextInput {...props}/>
    );
}
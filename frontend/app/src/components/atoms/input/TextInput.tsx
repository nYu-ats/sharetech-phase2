import { VFC } from 'react';
import { BaseInputProps } from './BaseInput'
import styled from 'styled-components';

export type TextInputProps = BaseInputProps & {
    placeHolder: string;
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
border: ${(props) => ( props.border ? props.border : "1px solid #666")};
border-radius: 2px;
outline: none;
width:100%;
height:100%;
box-sizing: border-box;
`

export const TextInput: VFC<TextInputProps> = (props) => {

    
    return (
        <StyledTextInput type="text" placeholder={props.placeHolder}
            {...props}/>
    );
}
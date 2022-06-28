import { VFC } from 'react';
import { BaseInputProps } from './BaseInput'
import styled from 'styled-components';

export type TextAreaInputProps = BaseInputProps & {
    placeHolder: string;
    defaultValue?: string;
    maxLength?:number;
    value?:string;
    backgroundColor?: string;
    border?: string;
    color?: string;
    fontSize?: string;
    index?:number;
    disabled?:boolean;
    textAlign?:string;
    fontWeight?:string;
    minHeight?:string;
}

const StyledTextAreaInput = styled.textarea<{
    color?:string,
    backgroundColor?:string,
    border?:string,
    fontSize?:string,
    fontWeight?:string,
    minHeight?:string,
}>
`
color: ${(props) => ( props.color ? props.color : "black")};
background-color: ${(props) => ( props.backgroundColor ? props.backgroundColor : "white")};
border: ${(props) => ( props.border ? props.border : "1px solid #666")};
font-weight: ${(props) => ( props.fontWeight ? props.fontWeight : "normal")};
border-radius: 2px;
outline: none;
width:100%;
height:auto;
resize: none;
min-height: ${(props) => ( props.minHeight ? props.minHeight : "128px")};
box-sizing: border-box;
font-size: ${(props) => ( props.fontSize ? props.fontSize : ".8em")};
`

export const TextAreaInput: VFC<TextAreaInputProps> = (props) => {

    return (
        <StyledTextAreaInput 
        maxLength={props.maxLength} 
        wrap='soft' 
        disabled={props.disabled} 
        placeholder={props.placeHolder} 
        defaultValue={props.defaultValue} 
        value={props.value}
        {...props}/>
    );
}
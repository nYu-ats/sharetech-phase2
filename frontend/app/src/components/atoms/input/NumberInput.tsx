import { VFC } from 'react';
import { BaseInputProps } from './BaseInput'
import styled from 'styled-components';

export type NumberInputProps = BaseInputProps & {
    placeHolder: string;
    defaultValue?: string;
    value?:string;
    backgroundColor?: string;
    border?: string;
    color?: string;
    fontSize?: string;
    index?:number;
    disabled?:boolean;
    textAlign?:string;
    fontWeight?:string;
}

const StyledNumberInput = styled.input<{
    color?:string,
    backgroundColor?:string,
    border?:string,
    fontSize?:string,
    fontWeight?:string,
}>
`
color: ${(props) => ( props.color ? props.color : "black")};
background-color: ${(props) => ( props.backgroundColor ? props.backgroundColor : "white")};
border: ${(props) => ( props.border ? props.border : "1px solid #666")};
font-weight: ${(props) => ( props.fontWeight ? props.fontWeight : "normal")};
border-radius: 2px;
outline: none;
width:auto;
height:100%;
box-sizing: border-box;
font-size: ${(props) => ( props.fontSize ? props.fontSize : ".8em")};
`

export const NumberInput: VFC<NumberInputProps> = (props) => {

    
    return (
        <StyledNumberInput type="number" disabled={props.disabled} data-index={props.index} placeholder={props.placeHolder} defaultValue={props.defaultValue} value={props.value}
            {...props}/>
    );
}
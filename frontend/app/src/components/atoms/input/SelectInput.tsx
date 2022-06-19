import { VFC } from 'react';
import { BaseInputProps } from './BaseInput'
import styled from 'styled-components';

export type SelectInputProps = {
    backgroundColor?: string;
    border?: string;
    color?: string;
    height?:string,
    options: Array<OptionProps>;
}

export type OptionProps = {
    label: string;
    value: string;
}

const StyledSelectInput = styled.select<{
    color?:string,
    height?: string,
    backgroundColor?:string,
    border?:string
}>
`
color: ${(props) => ( props.color ? props.color : "#0095d9")};
background-color: ${(props) => ( props.backgroundColor ? props.backgroundColor : "#e5f2ff")};
border: ${(props) => ( props.border ? props.border : "1px solid #0095d9")};
border-radius: 2px;
outline: none;
display: block;
width:100%;
height:${(props) => ( props.border ? props.border : "2.5em")};
box-sizing: border-box;
`

export const SelectInput: VFC<SelectInputProps> = (props) => {

    return (
        <StyledSelectInput {...props}>
            {props.options.map((option)=>{
                return (
                    <option value={option.value}>{option.label}</option>
                    );
            })}
        </StyledSelectInput>
    );
}
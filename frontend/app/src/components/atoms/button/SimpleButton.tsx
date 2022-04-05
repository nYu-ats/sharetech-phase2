import { VFC } from 'react';
import { BaseButtonProps } from './BaseButton';
import styled from 'styled-components';

export type SimpleButtonProps = BaseButtonProps & {
}

const SimpleStyledButton = styled.button<{
    width?:string, 
    height?:string, 
    backgroundColor?:string, 
    color?:string, 
    fontWeight?:string, 
    hoverdBgColor?:string}>
    `
    padding:.5em 1em;
    border:none;
    border-radius:4px;
    width: ${(props) => ( props.width ? props.width : "auto")};
    height: ${(props) => ( props.height ? props.height : "auto")};
    background-color: ${(props) => ( props.backgroundColor ? props.backgroundColor : "#7070ff")};
    color: ${(props) => ( props.color ? props.color : "white")};
    font-weight:${(props) => ( props.fontWeight ? props.fontWeight : "bold")};
    &:hover{
        cursor:pointer;
        background-color:${(props) => ( props.hoverdBgColor ? props.hoverdBgColor : "#9999ff")};
    }
`

export const SimpleButton: VFC<SimpleButtonProps> = (props) => {
    return (
    <SimpleStyledButton 
        type={props.action ? props.action : "button"} 
        onClick={props.onClick} 
        {...props}>{props.value}
    </SimpleStyledButton>);
}
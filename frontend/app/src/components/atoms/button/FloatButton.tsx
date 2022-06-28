import { VFC } from 'react';
import { BaseButtonProps } from './BaseButton';
import styled from 'styled-components';

export type FloatButtonProps = BaseButtonProps & {
    fontSize?:string;
    borderRadius?: string;
    padding?:string;
}

const SimpleStyledButton = styled.button<{
    width?:string, 
    height?:string, 
    padding?: string,
    backgroundColor?:string, 
    color?:string, 
    borderRadius?:string,
    fontSize?:string
    hoverBgColor?:string,
    shadow?:string}>
    `
    box-sizing: border-box;
    display:block;
    font-size: ${(props) => ( props.fontSize ? props.fontSize : "auto")};
    line-height: ${(props) => ( props.fontSize ? props.fontSize : "auto")};
    font-weight: bold;
    padding:${(props) => ( props.padding ? props.padding : "0 1em")};
    border:none;
    border-radius:${(props) => ( props.borderRadius ? props.borderRadius : "2px")};
    transition: .3s;
    width: ${(props) => ( props.width ? props.width : "100%")};
    height: ${(props) => ( props.height ? props.height : "100%")};
    background-color: ${(props) => ( props.backgroundColor ? props.backgroundColor : "#7070ff")};
    color: ${(props) => ( props.color ? props.color : "white")};
    box-shadow: 0 0 4px #abb1b5;
    margin: 0 auto;
    &:hover{
        cursor:pointer;
        background-color:${(props) => ( props.hoverBgColor ? props.hoverBgColor : "#9999ff")};
        box-shadow: 0 0 8px #abb1b5;
    }
`

export const FloatButton: VFC<FloatButtonProps> = (props) => {
    
    return (
    <SimpleStyledButton 
        type={props.action ? props.action : "button"} 
        onClick={props.onClick} 
        {...props}>
            {props.label}
    </SimpleStyledButton>
        );
}
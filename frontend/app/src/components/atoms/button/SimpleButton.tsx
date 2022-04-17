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
    hoverBgColor?:string,}>
    `
    box-sizing: border-box;
    display:block;
    font-weight: bold;
    padding:0 1em;
    border:none;
    border-radius:2px;
    transition: .3s;
    width: ${(props) => ( props.width ? props.width : "100%")};
    height: ${(props) => ( props.height ? props.height : "100%")};
    background-color: ${(props) => ( props.backgroundColor ? props.backgroundColor : "#7070ff")};
    color: ${(props) => ( props.color ? props.color : "white")};
    &:hover{
        cursor:pointer;
        background-color:${(props) => ( props.hoverBgColor ? props.hoverBgColor : "#9999ff")};
    }
`

export const SimpleButton: VFC<SimpleButtonProps> = (props) => {

    
    return (
    <SimpleStyledButton 
        type={props.action ? props.action : "button"} 
        onClick={props.onClick} 
        {...props}>
            {props.label}
    </SimpleStyledButton>
        );
}
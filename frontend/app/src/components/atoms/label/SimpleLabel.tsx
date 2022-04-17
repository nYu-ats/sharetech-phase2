import { VFC } from 'react';
import { BaseLabelProps } from './BaseLabel';
import styled from 'styled-components';

export type SimpleLabelProps = BaseLabelProps & {}

export const SimpleLabel: VFC<SimpleLabelProps> = (props) => {
    const StyledLabel = styled.label<{
        color?:string,
        fontSize?:string,
        fontWeight?:string
    }>
    `
    color: ${(props) => ( props.color ? props.color : "black")};
    font-size: ${(props) => ( props.fontSize ? props.fontSize : "1em")};
    font-weight: ${(props) => ( props.fontWeight ? props.fontWeight : "bold")};
    `
    
    return (
        <StyledLabel {...props} >{props.label}</StyledLabel>
    )
}
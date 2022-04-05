import { VFC } from 'react';
import { BaseLabelProps } from './BaseLabel';
import styled from 'styled-components';

export type SimpleLabelProps = BaseLabelProps & {}

const StyledLabel = styled.label<{
    color?:string,
    fontSize?:string,
    fontWeight?:string
}>
`
color: ${(props) => ( props.color ? props.color : "black")};
font-size: ${(props) => ( props.fontSize ? props.fontSize : "1em")};
font-weight: ${(props) => ( props.fontWeight ? props.fonfontWeighttSize : "bold")};
`

export const SimpleLabel: VFC<LabelProps> = (props) => {
    return (
        <StyledLabel>{props.label}</StyledLabel>
    )
}
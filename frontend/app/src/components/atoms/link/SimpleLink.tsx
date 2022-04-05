import { VFC, ReactNode } from "react";
import styled from 'styled-components';
import { BaseLinkProps } from "./BaseLink";

export type SimpleLinkProps = BaseLinkProps & {
    color ?: string;
    fontWeight ?: string;
    hoveredColor ?: string;
}

const StyledLink = styled.a<{
    color ?: string;
    fontWeight ?: string;
    hoveredColor ?: string;
}>`
color: ${(props) => ( props.color ? props.color : "#666")};;
font-wight:${(props) => ( props.fontWeight ? props.fontWeight : "bold")};
&:hover {
    cursor: pointer;
    textDecoration: none;
    color: ${(props) => ( props.hoveredColor ? props.hoveredColor : "black")};
}
`


export const Link: VFC<SimpleLinkProps> = (props) => {

    return <StyledLink {...props}>{props.children}</StyledLink>;
}
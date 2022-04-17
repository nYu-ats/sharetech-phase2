import styled from 'styled-components';

export type BaseIconProps = {
    color?:string;
    hoverColor?:string;
}

export const StyledSVG = styled.svg<{
    color?:string,
    hoverColor?:string;
}>`
fill: ${(props) => ( props.color ? props.color : "#666")};
transition: .3s;
&:hover{
    fill: ${(props) => ( props.hoverColor ? props.hoverColor : "black")};
}
`

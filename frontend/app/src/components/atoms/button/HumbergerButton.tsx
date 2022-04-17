import { VFC } from 'react';
import { BaseButtonProps } from './BaseButton';
import styled from 'styled-components';

export type FloatButtonProps = BaseButtonProps & {
    fontSize?:string;
    borderRadius?: string;
}

const StyledDiv = styled.div`
width: 50px;
margin: 0;
font-weight: bold;
display:block;
position: relative;
z-index: 100;
&:hover{
    cursor:pointer;        
}
`

const StyledSpan = styled.span<{
    color?:string, 
}>
`
height: 3px;
width: 25px;
left: 50%;
color: white;
position: absolute;
background-color: white;
&:before{
    display: block;
    content: "";
    position: absolute;
    top: 10px;
    height: 3px;
    width: 25px;
    background-color: white;
}
&:after{
    display: block;
    content: "";
    position: absolute;
    top: 20px;
    height: 3px;
    width: 25px;
    background-color: white;
}
`

export const HumbergerButton: VFC<FloatButtonProps> = (props) => {

    return (
        <StyledDiv>
            <StyledSpan/>
        </StyledDiv>
        );
}
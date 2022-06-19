import { VFC } from 'react';
import styled from 'styled-components';
import { IconNumbering } from '../../../icons/IconNumbering';

export type IconSelecterProps = {
    seleted?: number;
    changeIcon?: React.MouseEventHandler<HTMLElement>;
}

const StyeledDiv = styled.div<{
    backgroundColor?: string;
}>
`
background-color: ${(props) => ( props.backgroundColor ? props.backgroundColor : "#FFFFFF")};
padding: .5em;
&:hover{
    cursor: pointer;
}
`

export const IconSelecter:VFC<IconSelecterProps> =(props) => {
    return (
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            backgroundColor:"white", 
            borderRadius:"4px", 
            position:"absolute",
            top:"0",
            left:"1em",
            minWidth:"160px",
            maxWidth:"240px",
            boxShadow:"0 0 4px #abb1b5"}}>
            {IconNumbering.map((item, index) => {
                return (
                <StyeledDiv
                 data-number={index} 
                 backgroundColor={props.seleted === index ? "#EEEEEE" : "#FFFFFF"}
                 onClick={props.changeIcon}>
                    {item}
                </StyeledDiv>
                );
            })}
        </div>
    );
}
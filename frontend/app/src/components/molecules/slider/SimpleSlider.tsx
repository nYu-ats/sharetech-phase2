import { ReactNode, VFC } from 'react';
import styled from 'styled-components';
import { SimpleButton } from '../../atoms/button/SimpleButton';
import { OutlinedWebOnIcon } from '../../../icons/OutlinedWebOnIcon';
import { OutlinedWebOffIcon } from '../../../icons/OutlinedWebOffIcon';

export type SimpleSlider = {
    sliderValues:Array<SliderStatus>;
    active: string;
    onClick?:React.MouseEventHandler<HTMLButtonElement>;
}

type SliderStatus = {
    value:string;
    name:string;
}

const StyledDiv = styled.div`
display: flex;
white-space: nowrap;
width: 160px;
transition: .3s;
`

export const SimpleSlider: VFC<SimpleSlider> = (props) => {
    return (
        <div style={{
            width:"96px", 
            height:"24px", 
            backgroundColor: props.active === props.sliderValues[0].value ? "#00bfff" : "#87cefa", 
            padding:"4px", 
            overflowX:"hidden", 
            borderRadius:"4px"}}>
            <StyledDiv style={{marginLeft:props.active === props.sliderValues[0].value ? "4px" : "-64px"}}>
                <div style={{color:"#666", width:"64px", marginRight:"4px", fontWeight:"bold", display:"flex"}}>
                    <div>{props.sliderValues[0].name}</div>
                    <OutlinedWebOnIcon hoverColor='#666'/>
                </div>
                <SimpleButton width='24px' height='24px' backgroundColor='white' hoverBgColor='white' onClick={props.onClick}/>
                <div style={{color:"#666", width:"64px", marginLeft:"4px", fontWeight:"bold", display:"flex"}}>
                    <div>{props.sliderValues[1].name}</div>
                    <OutlinedWebOffIcon hoverColor='#666'/>
                </div>
            </StyledDiv>
        </div>
        );
}
import { VFC } from 'react';
import { BaseIconProps, StyledSVG } from './BaseIcon';


export const OutlinedFlowChartIcon:VFC<BaseIconProps> = (props) => {
    const t = props;
    return(
        <StyledSVG version="1.1" width="24" height="24" viewBox="0 0 24 24" color="#666" hoverColor="#666">
            <path  d="M15,3V7.59L7.59,15H3V21H9V16.42L16.42,9H21V3M17,5H19V7H17M5,17H7V19H5"/>
        </StyledSVG>
    );
}
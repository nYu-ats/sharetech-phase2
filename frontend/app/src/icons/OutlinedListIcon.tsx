import { VFC } from 'react';
import { BaseIconProps, StyledSVG } from './BaseIcon';


export const OutlinedListIcon:VFC<BaseIconProps> = (props) => {
    const t = props;
    return(
        <StyledSVG version="1.1" width="24" height="24" viewBox="0 0 24 24" color="#666" hoverColor="#666">
            <path  d="M3 5V19H20V5H3M7 7V9H5V7H7M5 13V11H7V13H5M5 15H7V17H5V15M18 17H9V15H18V17M18 13H9V11H18V13M18 9H9V7H18V9Z"/>
        </StyledSVG>
    );
}
import { VFC } from 'react';
import { BaseIconProps, StyledSVG } from './BaseIcon';


export const OutlinedDeleteIcon:VFC<BaseIconProps> = (props) => {
    const t = props;
    return(
        <StyledSVG version="1.1" width="24" height="24" viewBox="0 0 24 24" color={props.color} hoverColor={props.hoverColor}>
            <path  d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"/>
        </StyledSVG>
    );
}
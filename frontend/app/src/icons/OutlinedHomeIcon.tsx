import { VFC } from 'react';
import { BaseIconProps, StyledSVG } from './BaseIcon';


export const OutlinedHomeIcon:VFC<BaseIconProps> = (props) => {
    const t = props;
    return(
        <StyledSVG version="1.1" width="24" height="24" viewBox="0 0 24 24" color={props.color} hoverColor={props.hoverColor}>
            <path  d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22"/>
        </StyledSVG>
    );
}
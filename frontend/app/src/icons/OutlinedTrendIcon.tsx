import { VFC } from 'react';
import { BaseIconProps, StyledSVG } from './BaseIcon';


export const OutlinedTrendIcon:VFC<BaseIconProps> = (props) => {
    const t = props;
    return(
        <StyledSVG version="1.1" width="24" height="24" viewBox="0 0 24 24" color="#666" hoverColor="#666">
            <path  d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
        </StyledSVG>
    );
}
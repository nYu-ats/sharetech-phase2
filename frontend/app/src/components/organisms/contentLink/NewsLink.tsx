import { VFC } from "react";
import styled from 'styled-components';
import { BaseContentLinkProps } from "./BaseContentLink";
import { Link } from "../../atoms/link/SimpleLink";

export type NewsLinkProps = BaseContentLinkProps & {
    overview:string;
}

const StyledNewsLink = styled.div`
border-radius: 4px;
width: 256px;
height: 256px;
border: none;
transition: .3s;
background-color: white;
box-shadow:  0 0 4px #abb1b5;
&:hover{
    cursor:pointer;
    box-shadow: 0 0 8px #abb1b5;
`

export const NewsLink: VFC<NewsLinkProps> = (props) => {

    return (
        <StyledNewsLink>
            <Link anchorTo="#">
                <div style={{padding:".5em 1em", fontWeight:"bold"}}>
                    {props.title}
                </div>
                <div style={{padding:"0 1em"}}>
                    {props.overview}
                </div>
            </Link>
        </StyledNewsLink>
    );
}
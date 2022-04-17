import { VFC } from "react";
import styled from 'styled-components';
import { BaseContentLinkProps } from "./BaseContentLink";
import { Link } from "../../atoms/link/SimpleLink";

export type SquareNoteLinkProps = BaseContentLinkProps & {
    figure: string;
    tags: Array<string>;
}

const SquareStyledNoteLink = styled.div`
border-radius: 16px;
width: 128px;
height: 128px;
border: none;
transition: .3s;
background-color: white;
box-shadow:  0 0 4px #abb1b5;
&:hover{
    cursor:pointer;
    box-shadow: 0 0 8px #abb1b5;
`

export const SquareNoteLink: VFC<SquareNoteLinkProps> = (props) => {

    return (
        <SquareStyledNoteLink>
            <Link anchorTo="#">
                <div style={{
                    display:"flex",
                    justifyContent:"left"}} >
                    {props.tags.map((tag) => {
                        return(
                            <div style={{
                                padding:"0 .5em",
                                borderRadius:"2px",
                                textAlign:"center",
                                backgroundColor:"pink",
                                color:"white",
                                margin:".6em .3em",
                            }}>{tag}</div>
                        );
                    })}
                </div>
                <div style={{width:"100%", height:"40%", margin:"0 .3em", textAlign:"center"}}>
                    <img src={props.figure} style={{width:"100%"}}/>
                </div>
                <div style={{margin:"0 .3em", fontWeight:"bold"}}>
                    {props.title}
                </div>
            </Link>
        </SquareStyledNoteLink>
    );
}
import { VFC } from "react";
import styled from 'styled-components';
import { BaseContentLinkProps } from "./BaseContentLink";
import { Link } from "../../atoms/link/SimpleLink";

export type RectAngleNoteLinkProps = BaseContentLinkProps & {
    icon: string;
    tags: Array<string>;
}

const RectAngleStyledNoteLink = styled.div`
border-radius: 4px;
width: 512px;
height: 72px;
border: none;
transition: .3s;
background-color: white;
box-shadow:  0 0 4px #abb1b5;
&:hover{
    cursor:pointer;
    box-shadow: 0 0 8px #abb1b5;
`

export const RectAngleNoteLink: VFC<RectAngleNoteLinkProps> = (props) => {

    return (
        <RectAngleStyledNoteLink>
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
                <div style={{
                    display:"flex",
                    justifyContent:"left",
                    padding:"0 1em"}}>
                    <div style={{height:"100%", margin:"0 .3em", textAlign:"left"}}>
                        <img src={props.icon} style={{height:"100%"}}/>
                    </div>
                    <div style={{width:"80%", margin:"0 .3em", fontWeight:"bold", textAlign:"left"}}>
                        {props.title}
                    </div>
                </div>
            </Link>
        </RectAngleStyledNoteLink>
    );
}
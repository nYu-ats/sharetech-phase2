import { VFC } from "react";
import styled from 'styled-components';
import { BaseContentLinkProps } from "./BaseContentLink";
import { Link } from "../../atoms/link/SimpleLink";
import { IconNumbering } from '../../../icons/IconNumbering';

export type SquareNoteLinkProps = BaseContentLinkProps & {
    icon: number;
    tags: Array<string>;
    href: string;
}

const SquareStyledNoteLink = styled.div`
border-radius: 16px;
width: 160px;
height: 160px;
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
            <Link anchorTo={props.href}>
                <div style={{
                    display:"flex",
                    justifyContent:"left",
                    overflow:'hidden'}} >
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
                <div style={{width:"100%", height:"40%", margin:"0", textAlign:"center"}}>
                    {IconNumbering[props.icon]}
                </div>
                <div style={{margin:"0 .3em", fontWeight:"bold"}}>
                    {props.title}
                </div>
            </Link>
        </SquareStyledNoteLink>
    );
}
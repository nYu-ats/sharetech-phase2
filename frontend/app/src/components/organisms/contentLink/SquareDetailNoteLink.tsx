import { VFC } from "react";
import styled from 'styled-components';
import { BaseContentLinkProps } from "./BaseContentLink";
import { Link } from "../../atoms/link/SimpleLink";
import { OutlinedAccountIcon } from "../../../icons/OutlinedAccountIcon";

export type SquareDetailNoteLinkProps = BaseContentLinkProps & {
    tags: Array<string>;
    icon: number;
    name: string;
    date: string;
}

const StyledSquareDetailNoteLink = styled.div`
border-radius: 16px;
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

export const SquareDetailNoteLink: VFC<SquareDetailNoteLinkProps> = (props) => {

    return (
        <StyledSquareDetailNoteLink>
            <Link anchorTo="#">
                <div style={{height:'100%', display:'flex', flexDirection: 'column', justifyContent:'space-between'}}>
                    <div style={{
                        display: "flex",
                        justifyContent: "left",
                    }} >
                        {props.tags.map((tag) => {
                            return (
                                <div style={{
                                    padding: ".1rem .5rem",
                                    borderRadius: "2px",
                                    textAlign: "center",
                                    backgroundColor: "pink",
                                    color: "white",
                                    margin: ".6em .3em",
                                }}>{tag}</div>
                            );
                        })}
                    </div>
                    <div style={{ padding: "1rem .5rem", fontWeight: "bold", fontSize:'1.5rem' }}>
                        {props.title}
                    </div>
                    <div style={{ padding: "1em", display: "flex", alignItems: "center", justifyContent: "left"}}>
                        <OutlinedAccountIcon/>
                        <div style={{marginLeft: '1rem'}}>
                            <div style={{ color: "#666" }}>
                                <p style={{margin:'0', lineHeight:'1.2rem'}}>{props.name}</p>
                            </div>
                            <div style={{ color: "#666" }}>
                                <p style={{margin:'0', lineHeight:'1.2rem'}}>{props.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </StyledSquareDetailNoteLink>
    );
}
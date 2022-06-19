import { VFC } from "react";
import styled from 'styled-components';
import { BaseContentLinkProps } from "./BaseContentLink";
import { Link } from "../../atoms/link/SimpleLink";

export type ExtraNoteLinkProps = BaseContentLinkProps & {
    tags: Array<string>;
    icon: string;
    name: string;
    date: string;
}

const StyledExtraNoteLink = styled.div`
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

export const ExtraNoteLink: VFC<ExtraNoteLinkProps> = (props) => {

    return (
        <StyledExtraNoteLink>
            <Link anchorTo="#">
                <div style={{
                    display: "flex",
                    justifyContent: "left",
                }} >
                    {props.tags.map((tag) => {
                        return (
                            <div style={{
                                padding: "0 .5em",
                                borderRadius: "2px",
                                textAlign: "center",
                                backgroundColor: "#9a9a9a",
                                color: "white",
                                margin: ".6em .3em",
                            }}>{tag}</div>
                        );
                    })}
                </div>
                <div style={{ padding: "2em 1em", fontWeight: "bold" }}>
                    {props.title}
                </div>
                <div style={{ padding: "1em 0", display: "flex", alignItems: "center", justifyContent: "center", bottom: "10px" }}>
                    <div style={{ padding: "0.5em", background: "#e3e3e3", borderRadius: "1em" }}>
                        <img src={props.icon} style={{ height: "2em", width: "2em" }} />
                    </div>
                    <div style={{ margin: "-1.5em 0em" }}>
                        <div style={{ margin: "-1.5em 0em", color: "#000000" }}>
                            <p>{props.name}</p>
                        </div>
                        <div style={{ margin: "-1.5em 0em", color: "#9a9a9a" }}>
                            <p>{props.date}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </StyledExtraNoteLink>
    );
}
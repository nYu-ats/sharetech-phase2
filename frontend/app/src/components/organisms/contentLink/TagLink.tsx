import { VFC } from "react";
import styled from 'styled-components';
import { BaseContentLinkProps } from "./BaseContentLink";
import { Link } from "../../atoms/link/SimpleLink";

export type TagLinkProps = BaseContentLinkProps & {}

export const TagLink: VFC<TagLinkProps> = (props) => {

    return (
        <Link anchorTo="#">
            <div style={{
                padding: "0 3em",
                borderRadius: "4px",
                textAlign: "center",
                fontSize: "1.5em",
                backgroundColor: "pink",
                color: "black",
            }}>{props.title}</div>
        </Link>
    );
}
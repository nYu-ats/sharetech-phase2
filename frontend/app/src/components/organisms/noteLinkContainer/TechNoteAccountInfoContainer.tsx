import { VFC } from "react";
import { BaseContentLinkContainerProps } from "./BaseContentLinkContainer";
import { FloatButton } from "../../atoms/button/FloatButton";
import { SquareNoteLink } from "../contentLink/SquareNoteLink";
import { Link } from "../../atoms/link/SimpleLink";

export type TechNoteAccountInfoContainerProps = BaseContentLinkContainerProps & {
    icon: string;
    name: string;
    date: string
}

export const TechNoteAccountInfoContainer: VFC<TechNoteAccountInfoContainerProps> = (props) => {
    return (
        <div style={{ padding: "1em 0", display: "flex", alignItems: "center" }}>
            <div style={{ padding: "0.5em", background: "#e3e3e3", borderRadius: "1em", textAlign: "center" }}>
                <img src={props.icon} style={{ height: "2em", width: "2em" }} />
            </div>
            <div style={{ margin: "-1.5em 0em" }}>
                <div style={{ margin: "-1.5em 0em", color: "#000000" }}>
                    <h3>{props.name}</h3>
                </div>
                <div style={{ margin: "-1.5em 0em", color: "#9a9a9a" }}>
                    <h3>{props.date}</h3>
                </div>
            </div>
        </div>
    );
}
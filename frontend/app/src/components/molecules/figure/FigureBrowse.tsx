import React, { ReactNode, VFC } from "react";
import { OutlinedDeleteIcon } from "../../../icons/OutlinedDeleteIcon";

export type FigureProps = {
    title: string;
    icon: ReactNode;
    content: ReactNode;
}

export const FigureBrowse: VFC<FigureProps> = (props) => {
    return (
        <div style={{ margin: "0 2em 1em 2em" }}>
            {props.content}
        </div>
    );
}
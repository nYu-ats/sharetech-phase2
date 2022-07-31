import React, { ReactNode, VFC } from "react";
import { OutlinedDeleteIcon } from "../../../icons/OutlinedDeleteIcon";

export type FigureProps = {
    title: string;
    icon: ReactNode;
    content: ReactNode;
    onDelete?: React.MouseEventHandler<HTMLElement>;
}

export const Figure:VFC<FigureProps> = (props) => {
    return (
        <div style={{margin:"0 2em 1em 2em"}}>
        <div style={{display:"flex"}}>
            {props.icon}
            <div style={{color:"#666", fontWeight:"bold"}}>{props.title}</div>
            {props.onDelete ? (
                <div style={{marginLeft:"1em", cursor:"pointer"}} onClick={props.onDelete}>
                    <OutlinedDeleteIcon hoverColor='red'/>
                </div>
            ) : null}
        </div>
        {props.content}
    </div>
    );
}
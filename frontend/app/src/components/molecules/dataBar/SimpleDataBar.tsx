import { VFC } from "react";
import { BaseDataBarProps } from "./BaseDataBar";

export type SimpleDataBarProps = BaseDataBarProps & {
    label: string;
}

export const SimpleDataBar: VFC<SimpleDataBarProps> = (props) => {
    const width = String(100 * props.rate);

    return (
        <div style={{display:"flex", justifyContent:"flex-start"}}>
            <div style={{minWidth:'10rem'}}>
                <p>{props.label}</p>
            </div>
            <div style={{margin:'auto 0', height:"1em", width:width+'%', backgroundColor:"tomato", transition:".3s"}}></div>
        </div>
    );
}
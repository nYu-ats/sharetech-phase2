import { VFC } from "react";
import { BaseDataBarProps } from "./BaseDataBar";

export type SimpleDataBarProps = BaseDataBarProps & {
    label: number;
}

export const SimpleDataBar: VFC<SimpleDataBarProps> = (props) => {
    const width = String(100 * props.rate);

    return (
        <div style={{display:"flex", justifyContent:"flex-start"}}>
            <div>
                <p>{props.label}</p>
            </div>
            <div style={{height:"1em", width:width, backgroundColor:"tomato", transition:".3s"}}>
            </div>
        </div>
    );
}
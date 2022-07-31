import { VFC } from "react";
import { BaseDataBarProps } from "./BaseDataBar";

export type BrowseDataBarProps = BaseDataBarProps & {
    label: string;
    value: number;
}

export const BrowseDataBar: VFC<BrowseDataBarProps> = (props) => {
    const width = String(100 * props.rate);

    return (
        <div style={{display:"flex", justifyContent:"flex-start"}}>
            <div>
                <div style={{display:"flex", justifyContent:"flex-start", padding:"1em 0"}}>
                    <div style={{width:"10em", paddingRight:".5em"}}>
                        {props.label}
                    </div>
                    <div style={{width:"10em", paddingRight:".5em"}}>
                        {String(props.value)}
                    </div>
                </div>
                <div style={{height:"1em", width:width+'%', backgroundColor:"tomato", transition:".3s"}}>
                </div>
            </div>
        </div>
    );
}
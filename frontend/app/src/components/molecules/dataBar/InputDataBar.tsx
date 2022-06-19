import { VFC } from "react";
import { BaseDataBarProps } from "./BaseDataBar";
import { TextInput } from "../../atoms/input/TextInput";
import { NumberInput } from "../../atoms/input/NumberInput";
import { SimpleButton } from "../../atoms/button/SimpleButton";

export type InputDataBarProps = BaseDataBarProps & {
    label: string;
    value: number;
    onLabelUpdate: React.ChangeEventHandler<HTMLInputElement>;
    onValueUpdate: React.ChangeEventHandler<HTMLInputElement>;
    onDelDataBar:React.MouseEventHandler<HTMLButtonElement>;
}

export const InputDataBar: VFC<InputDataBarProps> = (props) => {
    const width = String(100 * props.rate);

    return (
        <div style={{display:"flex", justifyContent:"flex-start"}}>
            <div style={{margin:"auto 0", paddingRight:"1em"}}>
                <SimpleButton
                    label='削除'
                    width='5em'
                    color='#666'
                    backgroundColor='#ffffff'
                    hoverBgColor='#87cefa'
                    onClick={props.onDelDataBar}/>
            </div>
            <div>
                <div style={{display:"flex", justifyContent:"flex-start", padding:"1em 0"}}>
                    <div style={{paddingRight:".5em"}}>
                        <TextInput placeHolder="ラベル" border="none" onChange={props.onLabelUpdate} value={props.label}/>
                    </div>
                    <div style={{paddingRight:".5em"}}>
                        <NumberInput placeHolder="数値" border="none" onChange={props.onValueUpdate} value={String(props.value)}/>
                    </div>
                </div>
                <div style={{height:"1em", width:width+'%', backgroundColor:"tomato", transition:".3s"}}>
                </div>
            </div>
        </div>
    );
}
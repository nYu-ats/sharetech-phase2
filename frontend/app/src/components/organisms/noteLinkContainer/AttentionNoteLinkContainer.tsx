import { VFC } from "react";
import { BaseContentLinkContainerProps } from "./BaseContentLinkContainer";
import { SimpleList } from "../../molecules/list/SimpleList";
import { Link } from "../../atoms/link/SimpleLink";
import { RectAngleNoteLink } from "../contentLink/RectAngleNoteLink";
import { NoteFilterForm } from "../form/NoteFilterForm";

export type AttentionNoteLinkContainerProps = BaseContentLinkContainerProps & {
    items:Array<AttentionNoteItem>;
}

type AttentionNoteItem = {
    icon: string;
    title: string;
    tags: Array<string>;
}

export const AttentionNoteLinkContainer: VFC<AttentionNoteLinkContainerProps> = (props) => {
    return (
        <div style={{padding:"2em 0", width:"100%"}}>
            <h2>注目のTech Note</h2>
            <div style={{
                display:"flex",
                justifyContent:"space-between",
                padding:"1em 2em"
            }}>
                <div style={{width:"30%"}}>
                    <NoteFilterForm/>
                </div>
                <div style={{width:"60%"}}>
                    <SimpleList 
                    isRow={true}
                    justifyContent="left"
                    items={props.items.map((item) => {
                        return (
                            <div style={{padding:"0 .5em 1em .5em"}}>
                                <RectAngleNoteLink 
                                title={item.title}
                                icon={item.icon}
                                tags={item.tags}/>
                            </div>
                        );
                    })}/>
                </div>
            </div>
            <div style={{textAlign:"right"}}>
                <Link anchorTo="#">さらに表示する</Link>
            </div>
        </div>
    );
}
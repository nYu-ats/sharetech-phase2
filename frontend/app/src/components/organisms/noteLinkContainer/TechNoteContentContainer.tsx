import { VFC } from "react";
import { BaseContentLinkContainerProps } from "./BaseContentLinkContainer";
import { FloatButton } from "../../atoms/button/FloatButton";
import { SquareNoteLink } from "../contentLink/SquareNoteLink";
import { SimpleList } from "../../molecules/list/SimpleList";
import { Link } from "../../atoms/link/SimpleLink";

export type TechNoteContentContainerProps = BaseContentLinkContainerProps & {
    title: string;
    introduction: string;
    items: Array<TechNoteContentItem>;
}

type TechNoteContentItem = {
    figure: string;
    title: string;
    tags: Array<string>;
}

export const TechNoteContentContainer: VFC<TechNoteContentContainerProps> = (props) => {
    return (
        <div style={{ padding: "2em 0" }}>
            <div style={{ padding: "0em", margin: "2em 0", background: "#e3e3e3", border: "solid 1px", textAlign: "center" }}>
                <h2>{props.title}</h2>
            </div>
            <div style={{ margin: "-1.5em 0em", color: "#9a9a9a" }}>
                <h3>{props.introduction}</h3>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "left",
                padding: "1em 2em"
            }}>
                <SimpleList
                    isRow={true}
                    justifyContent="left"
                    items={props.items.map((item) => {
                        return (
                            <div style={{ padding: "0 .5em 1em .5em", marginRight: "1em" }}>
                                <SquareNoteLink
                                    title={item.title}
                                    figure={item.figure}
                                    tags={item.tags} />
                            </div>
                        );
                    })} />
            </div>
        </div >
    );
}
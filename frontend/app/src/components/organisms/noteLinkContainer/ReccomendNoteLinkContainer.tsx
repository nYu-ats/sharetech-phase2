import { VFC } from "react";
import { BaseContentLinkContainerProps } from "./BaseContentLinkContainer";
import { Link } from "../../atoms/link/SimpleLink";
import { SquareDetailNoteLink } from "../contentLink/SquareDetailNoteLink";

export type RecommendNoteLinkContainerProps = BaseContentLinkContainerProps & {
    items: Array<RecommendNoteItem>;
}

type RecommendNoteItem = {
    title: string;
    tags: Array<string>;
    icon: number;
    name: string;
    date: string;
}

export const RecommendNoteLinkContainer: VFC<RecommendNoteLinkContainerProps> = (props) => {
    return (
        <div style={{ padding: "2em 0", width: "100%" }}>
            <h2>その他Tech note</h2>
            <hr></hr>
            <div style={{
                display: "flex",
                justifyContent: "left",
                flexWrap: "wrap",
                padding: "1em 2em",
            }}>
                {props.items.map((item) => {
                    return (
                        <div style={{ marginRight: "2em", marginBottom: "1em" }}>
                            <SquareDetailNoteLink
                                title={item.title}
                                tags={item.tags}
                                icon={item.icon}
                                name={item.name}
                                date={item.date} />
                        </div>
                    );
                })}
            </div>
            <div style={{ textAlign: "right" }}>
                <Link anchorTo="#">さらに表示する</Link>
            </div>
        </div>
    );
}
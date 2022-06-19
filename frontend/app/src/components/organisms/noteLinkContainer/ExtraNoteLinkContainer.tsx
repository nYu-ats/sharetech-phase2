import { VFC } from "react";
import { BaseContentLinkContainerProps } from "./BaseContentLinkContainer";
import { SimpleList } from "../../molecules/list/SimpleList";
import { Link } from "../../atoms/link/SimpleLink";
import { ExtraNoteLink } from "../contentLink/ExtraNoteLink";

export type AttentionNoteLinkContainerProps = BaseContentLinkContainerProps & {
    items: Array<ExtraNoteItem>;
}

type ExtraNoteItem = {
    title: string;
    tags: Array<string>;
    icon: string;
    name: string;
    date: string;
}

export const ExtraNoteLinkContainer: VFC<AttentionNoteLinkContainerProps> = (props) => {
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
                            <ExtraNoteLink
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
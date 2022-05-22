import { VFC } from "react";
import { BaseContentLinkContainerProps } from "./BaseContentLinkContainer";
import { SimpleList } from "../../molecules/list/SimpleList";
import { Link } from "../../atoms/link/SimpleLink";
import { NewsLink } from "../contentLink/NewsLink";

export type AttentionNoteLinkContainerProps = BaseContentLinkContainerProps & {
    items: Array<NewsItem>;
}

type NewsItem = {
    title: string;
    overview: string;
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
                            <NewsLink
                                title={item.title}
                                overview={item.overview} />
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
import { VFC } from "react";
import { BaseContentLinkContainerProps } from "./BaseContentLinkContainer";
import { FloatButton } from "../../atoms/button/FloatButton";
import { SquareNoteLink } from "../contentLink/SquareNoteLink";
import { SimpleList } from "../../molecules/list/SimpleList";
import { Link } from "../../atoms/link/SimpleLink";

export type MyNoteLinkContainerProps = BaseContentLinkContainerProps & {
    items: Array<MyNoteItem>;
}

type MyNoteItem = {
    id: number;
    figure: string;
    title: string;
    tags: Array<string>;
}

export const MyNoteLinkContainer: VFC<MyNoteLinkContainerProps> = (props) => {
    return (
        <div style={{ padding: "2em 0" }}>
            <h2>My Tech Note</h2>
            <div style={{
                display: "flex",
                justifyContent: "left",
                padding: "1em 2em"
            }}>
                <div style={{ marginRight: "3em" }}>
                    <FloatButton
                        action="button"
                        label="+"
                        color="#666"
                        borderRadius="16px"
                        width="64px"
                        height="64px"
                        fontSize="1.5em"
                        backgroundColor="white"
                        hoverBgColor="white" />
                </div>
                <SimpleList
                    isRow={true}
                    justifyContent="left"
                    items={props.items.map((item) => {
                        return (
                            <div style={{ padding: "0 .5em 1em .5em", marginRight: "1em" }}>
                                <SquareNoteLink
                                    href={"/myNoteBrowse/id="+String(item.id)}
                                    title={item.title}
                                    figure={item.figure}
                                    tags={item.tags} />
                            </div>
                        );
                    })} />
            </div>
            <div style={{ textAlign: "right" }}>
                <Link anchorTo="#">さらに表示する</Link>
            </div>
        </div>
    );
}
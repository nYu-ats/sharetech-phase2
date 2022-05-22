import { VFC } from "react";
import { BaseContentLinkContainerProps } from "./BaseContentLinkContainer";
import { FloatButton } from "../../atoms/button/FloatButton";
import { TagLink } from "../contentLink/TagLink";
import { SimpleList } from "../../molecules/list/SimpleList";
import { Link } from "../../atoms/link/SimpleLink";

export type TagLinkContainerProps = BaseContentLinkContainerProps & {
    tags: Array<string>;
}

export const TagLinkContainer: VFC<TagLinkContainerProps> = (props) => {
    return (
        <SimpleList
            isRow={true}
            justifyContent="center"
            items={props.tags.map((tag) => {
                return (
                    <div style={{margin: "0 .5em"}}>
                        <TagLink
                            title={tag} />
                    </div>
                );
            })} />
    );
}
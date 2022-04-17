import { VFC } from "react";
import { BaseListItemProps } from "./BaseListItem";

export type SimpleListItemProps = BaseListItemProps & {}

export const SimpleListItem: VFC<SimpleListItemProps> = (props) => {
    return (
        <li style={{
            listStyle: props.listStyle ? props.listStyle: "none"
        }}>
            {props.children}
        </li>
    );
}
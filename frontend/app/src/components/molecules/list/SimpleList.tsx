import { VFC } from "react";
import { BaseListProps } from "./BaseList";
import { SimpleListItem } from "../../atoms/listItem/SimpleListItem";

export type SimpleListProps = BaseListProps & {
    isRow?:boolean;
    justifyContent?:string;
}

export const SimpleList:VFC<SimpleListProps> = (props) => {
    return (
        <ul style={{
            display:"flex", 
            justifyContent: props.justifyContent ? props.justifyContent : "left", 
            flexDirection: props.isRow ? "row" : "column",
            flexWrap:"wrap",
            margin:"0", 
            padding:"0"}}>
                {
                    props.items.map((item) => {
                        return (
                        <SimpleListItem>
                            {item}
                        </SimpleListItem>
                        );
                    })
                }
        </ul>
    );
}
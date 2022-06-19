import { ReactNode } from "react"

export type BaseTable = {
    head:Array<ReactNode>;
    data:Array<Array<ReactNode>>;
}
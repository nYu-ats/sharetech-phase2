import { VFC } from "react";
import { BaseContentLinkContainerProps } from "./BaseContentLinkContainer";
import { EdgeData, NodeData } from 'reaflow';
import { FlowChartBrowse } from "../flowChart/BrowseFlowChart";
import { SimpleTable } from "../../molecules/table/SimpleTable";
import { BrowseDataBar } from "../../molecules/dataBar/BrowseDataBar";

export type MyNoteContentContainerProps = BaseContentLinkContainerProps & {
    title: string;
    introduction: string;
    item: MyNoteContentItem;
}

export type MyNoteContentItem = {
    text: string;
    reference: Array<string> | null;
    flowChart: FlowChartState | null;
    table: TableState | null;
    dataBar: Array<DataBarState> | null;
}

// TODO MyNote.pageに記載されているtypeをexportしてもよい？typeを全部同じ場所に書いてもよい
type FlowChartState = {
    nodes: Array<NodeData>;
    edges: Array<EdgeData>;
}

type TableState = {
    head: Array<string>;
    data: Array<Array<string>>;
}

type DataBarState = {
    label: string;
    value: number;
}

// TODO 関数名のリファクタリング（MyNoteContentあたりと粒度を揃えたい）
export const MyNoteContentContainer: VFC<MyNoteContentContainerProps> = (props) => {
    const maxVal = props.item.dataBar ? Math.max(
        ...props.item.dataBar?.map((item) => {
            return item.value;
        })) : 100;

    return (
        <div>
            <div style={{ padding: "0em", margin: "2em 0", background: "#e3e3e3", border: "solid 1px", textAlign: "center" }}>
                <h2>{props.title}</h2>
            </div>
            <div style={{ marginBottom: "1em", height: 'auto', width: '100%' }}>
                {props.item.text}
            </div>
            <div>
                {props.item.reference ? props.item.reference.map((element, index) => {
                    return (
                        <div>{props.item.reference}</div>
                    );
                }) : null}
                {/* TODO Browse関数のリファクタリング、作成用クラス（FlowChartなど）と分けないで作れたらきれいかも */}
                {/* TODO titleとiconを消しちゃっているので表示するようにしたい */}
                {props.item.flowChart ?
                    <div style={{ margin: "0 2em 1em 2em" }}>
                        <FlowChartBrowse
                            readOnly={true}
                            attribute={props.item}
                        />
                    </div> : null
                }
                {props.item.table ?
                    <div style={{ margin: "0 2em 1em 2em", display: "flex", overflowX: "scroll" }}>
                        <SimpleTable
                            head={props.item.table?.head as Array<string>}
                            data={props.item.table?.data as Array<Array<string>>}
                        />
                    </div> : null
                }
                {props.item.dataBar ?
                    <div style={{ margin: "0 2em 1em 2em" }}>
                        {props.item.dataBar?.map((item) => {
                            return (
                                <BrowseDataBar
                                    label={item.label}
                                    value={item.value}
                                    rate={item.value / maxVal}
                                />)
                        })}
                    </div> : null
                }
            </div>
        </div >
    );
}
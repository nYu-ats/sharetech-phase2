import React, { VFC, useState, createContext, useReducer, useMemo } from 'react';
import { MyNoteTemplate } from '../templates/myNote.template';
import { FloatButton } from '../components/atoms/button/FloatButton';
import { MyNoteMeta } from '../components/organisms/myNote/MyNoteMeta';
import { MyNoteContent } from '../components/organisms/myNote/MyNoteContent';
import { EdgeData, NodeData } from 'reaflow';

type Mode = "EDIT" | "VIEW"

type MyNoteMetaStateProps = {
    expose: boolean;
    icon: number;
    title: string;
    tags:Array<string>;
}

export type MyNoteContentStateProps = {
    text: string;
    reference: Array<string> | null;
    flowChart: FlowChartState | null;
    table: TableState | null;
    dataBar: Array<DataBarState> | null;
}

type FlowChartState = {
    nodes: Array<NodeData>;
    edges: Array<EdgeData>;
    text: Array<{nodeId:string,text:string}>;
}

type TableState = {
    head: Array<string>;
    data: Array<Array<string>>;
}

type DataBarState = {
    label: string;
    value: number;
}

type MyNoteMetaAction = {type:"EXPOSE", value:boolean} 
                    | {type:"ICON", value:number}
                    | {type:"TITLE", value:string} 
                    | {type:"TAG", value:Array<string>};

export type MyNoteContentAction = {type: "TEXT", value:string}
                        | {type:"DESCRIPTION", value:string}
                        | {type:"REFERENCE", operation:"ADDREF", value:Array<string>}
                        | {type:"REFERENCE", operation:"DELREF", value:Array<string>}
                        | {type:"REFERENCE", operation:"CHANGEREF", value:Array<string>}
                        | {type:"FLOWCHART", operation:"CREATE"}
                        | {type:"FLOWCHART", operation:"DELETE"}
                        | {type:"FLOWCHART", operation:"ADDNODE", value:FlowChartState}
                        | {type:"FLOWCHART", operation:"DELNODE", value:FlowChartState}
                        | {type:"FLOWCHART", operation:"ADDEDGE", value:FlowChartState}
                        | {type:"FLOWCHART", operation:"DELEDGE", value:FlowChartState}
                        | {type:"FLOWCHART", operation:"TEXTCHANGE", value:FlowChartState}
                        | {type:"TABLE", operation:"CREATE"}
                        | {type:"TABLE", operation:"DELETE"}
                        | {type:"TABLE", operation:"ADDROW", value:TableState}
                        | {type:"TABLE", operation:"DELROW", value:TableState}
                        | {type:"TABLE", operation:"ADDCOL", value:TableState}
                        | {type:"TABLE", operation:"DELCOL", value:TableState}
                        | {type:"TABLE", operation:"DATACHANGE", value:TableState}
                        | {type:"TABLE", operation:"HEADCHANGE", value:TableState}
                        | {type:"DATABAR", operation:"CREATE"}
                        | {type:"DATABAR", operation:"DELETE"}
                        | {type:"DATABAR", operation:"ADDDATA", value:Array<DataBarState>}
                        | {type:"DATABAR", operation:"DELDATA", value:Array<DataBarState>}
                        | {type:"DATABAR", operation:"LABELCHANGE", value:Array<DataBarState>}
                        | {type:"DATABAR", operation:"VALUECHANGE", value:Array<DataBarState>}

export type ContentAttributeProps = {
    state: MyNoteContentStateProps;
    action: React.Dispatch<MyNoteContentAction>;
}

const initialMyNoteMetaState = {
    expose : true,
    icon: 0,
    title: "",
    tags: [],
}

const initialMyNoteContentState = {
    text: "",
    reference: null,
    flowChart: null,
    table: null,
    dataBar:null,
}

const sliderValues = [
    {
        value:"expose",
        name:"公開"
    },
    {
        value:"dispose",
        name:"非公開",
    }
]

const myNoteMetaReducer = (state: MyNoteMetaStateProps, action:MyNoteMetaAction) => {
    switch(action.type){
        case "EXPOSE":
            return {...state, expose: action.value};
        case "ICON":
            return {...state, icon: action.value};
        case "TITLE":
            return {...state, title: action.value};
        case "TAG":
            return {...state, tags: action.value};
        default:
            return state;
    }
}

const myNoteContentReducer = (state: MyNoteContentStateProps, action: MyNoteContentAction) => {
    switch(action.type){
        case "DESCRIPTION":
            return {...state, text: action.value}
        case "REFERENCE":
            switch(action.operation){
                case "ADDREF":
                    return {...state, reference:action.value};
                case "DELREF":
                    return {...state, reference:action.value};
                case "CHANGEREF":
                    return {...state, reference:action.value};
                } 
        case "FLOWCHART":
            switch(action.operation){
                case "CREATE":
                    return {...state, flowChart:{nodes:[], edges:[], text:[]}};
                case "DELETE":
                    return {...state, flowChart: null};
                case "ADDNODE":
                    return {...state, flowChart: action.value}
                case "DELNODE":
                    return {...state, flowChart: action.value};
                case "ADDEDGE":
                    return {...state, flowChart: action.value};
                case "DELEDGE":
                    return {...state, flowChart: action.value};
                case "TEXTCHANGE":
                    return {...state, flowChart: action.value};
                }
        case "TABLE":
            switch(action.operation){
                case "CREATE":
                    return {...state, table:{head:[''], data:[['']]}};
                case "DELETE":
                    return {...state, table: null};
                case "ADDROW":
                    return {...state, table: action.value}
                case "DELROW":
                    return {...state, table: action.value};
                case "ADDCOL":
                    return {...state, table: action.value};
                case "DELCOL":
                    return {...state, table: action.value};
                case "DATACHANGE":
                    return {...state, table: action.value};
                case "HEADCHANGE":
                    return {...state, table: action.value};
                }
        case "DATABAR":
            switch(action.operation){
                case "CREATE":
                    return {...state, dataBar:[{label:'', value:0.0}]};
                case "DELETE":
                    return {...state, dataBar: null};
                case "ADDDATA":
                    return {...state, dataBar: action.value}
                case "DELDATA":
                    return {...state, dataBar: action.value};
                case "LABELCHANGE":
                    return {...state, dataBar: action.value};
                case "VALUECHANGE":
                    return {...state, dataBar: action.value};
                }
        default:
            return state;
    }
}

export const MyNoteMetaContext = createContext<any>({});
export const MyNoteContentContext = createContext<any>({});

export const MyNotePage:VFC = () => {
    const [mode, setMode] = useState<Mode>("VIEW");
    const [myNoteMetaState, myNoteDispatch] = useReducer(myNoteMetaReducer, initialMyNoteMetaState);
    const [businessFlowState, businessFlowDispatch] = useReducer(myNoteContentReducer, initialMyNoteContentState);
    const [goalState, goalDispatch] = useReducer(myNoteContentReducer, initialMyNoteContentState);
    const [problemState, problemDispatch] = useReducer(myNoteContentReducer, initialMyNoteContentState);
    const [solutionState, solutionDispatch] = useReducer(myNoteContentReducer, initialMyNoteContentState);
    const [resultState, resultDispatch] = useReducer(myNoteContentReducer, initialMyNoteContentState);

    // 各セクションごとにアトリビュートを作成する
    const businessFlowAttr = {
        state: businessFlowState,
        action: businessFlowDispatch,
    }
    const goalAttr = {
        state: goalState,
        action: goalDispatch,
    }
    const problemAttr = {
        state: problemState,
        action: problemDispatch
    }
    const solutionAttr = {
        state: solutionState,
        action: solutionDispatch
    }
    const resultAttr = {
        state: resultState,
        action: resultDispatch
    }

    // 編集・閲覧モードの切り替え
    const toggleMode = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const next = mode === "VIEW" ? "EDIT" : "VIEW";
        const validTags = myNoteMetaState.tags.filter((item) => item)
        myNoteDispatch({type:"TAG", value: validTags});
        setMode(next);
    };
    
    // メタ情報(スコープ、アイコン、タイトル、タグ)編集
    const switchDispose = () => myNoteDispatch({type:"EXPOSE", value:!myNoteMetaState.expose});
    const changeIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
        myNoteDispatch({type:"ICON", value: Number(e.currentTarget.getAttribute("data-number"))});
    } 
    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => myNoteDispatch({type:"TITLE", value: e.target.value});
    const addTag = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(myNoteMetaState.tags.length > 0){
            const empty = myNoteMetaState.tags.filter((item) => !item)
            if(empty.length === 0){
                myNoteDispatch({type:"TAG", value: myNoteMetaState.tags.concat("")});
            }
        }else{
            myNoteDispatch({type:"TAG", value: myNoteMetaState.tags.concat("")});
        }
    }
    const deleteTag = (e: React.MouseEvent<HTMLElement>) => {
        const targetIndex = e.currentTarget.parentElement?.getAttribute('data-index');
        if (targetIndex){
            const newTags = myNoteMetaState.tags.filter((item, index) => index !== Number(targetIndex));
            myNoteDispatch({type:"TAG", value: newTags});
        }
    }
    const changeTag = (e:React.ChangeEvent<HTMLInputElement>) => {
        const targetIndex = e.target.getAttribute('data-index');
        if(targetIndex){
            let newTags = myNoteMetaState.tags.concat();
            newTags[Number(targetIndex)] = e.target.value;
            myNoteDispatch({type:"TAG", value:newTags});
        }
    };

    // 説明文編集処理
    const changeDescription = (attribute: ContentAttributeProps, value:string) => {
        let newDescription = attribute.state.text;
        if (newDescription){
            newDescription = value;
            return attribute.action({type:"DESCRIPTION", value: newDescription})
        }
    }

    // 参照編集処理
    const addRef = (attribute: ContentAttributeProps) => {
        let newReference = attribute.state.reference;
        if(!newReference){
            newReference = ['']
        }else{
            newReference.push('')
        }
        return attribute.action({type:'REFERENCE', operation:'ADDREF', value:newReference});
    };
    const delRef = (attribute: ContentAttributeProps, index:number) => {
        let newReference = attribute.state.reference;
        if(newReference){
            newReference.splice(index, 1);
            return attribute.action({type:'REFERENCE', operation:'DELREF', value:newReference});
        }
    };
    const changeRef = (attribute: ContentAttributeProps, index:number, value:string) => {
        let newReference = attribute.state.reference;
        if(newReference){
            newReference[index] = value;
            return attribute.action({type:'REFERENCE', operation:'CHANGEREF', value:newReference});
        }
    }

    // フローチャート編集処理
    const createFlowChart = (attribute: ContentAttributeProps) => {
        if (!attribute.state.flowChart){
            return attribute.action({type:"FLOWCHART", operation:"CREATE"})
        }
    };
    const deleteFlowChart = (attribute: ContentAttributeProps) => {
        if (attribute.state.flowChart){
            return attribute.action({type:"FLOWCHART", operation:"DELETE"})
        }
    };
    const addNode = (attribute: ContentAttributeProps, node:NodeData) => {
        let newFlowChart = attribute.state.flowChart;
        if(newFlowChart){
            newFlowChart.nodes.push(node);
            newFlowChart.text.push({nodeId:node.id, text:''})
            return attribute.action({type:"FLOWCHART", operation:"ADDNODE", value: newFlowChart as FlowChartState})
        }
    }
    const delNode = (attribute: ContentAttributeProps, nodes:Array<NodeData>, edges:Array<EdgeData>) => {
        let newFlowChart = attribute.state.flowChart;
        if (newFlowChart){
            newFlowChart.nodes = nodes;
            newFlowChart.edges = edges;
            const nodeIds = nodes.map(item => item.id);
            newFlowChart.text = newFlowChart.text.filter(item => nodeIds.includes(item.nodeId));
            return attribute.action({type:"FLOWCHART", operation:"DELNODE", value: newFlowChart as FlowChartState})
        }
    }
    const addEdge = (attribute: ContentAttributeProps, edge:EdgeData) => {
        let newFlowChart = attribute.state.flowChart;
        if(newFlowChart){
            newFlowChart.edges.push(edge);
            return attribute.action({type:"FLOWCHART", operation:"ADDEDGE", value: newFlowChart as FlowChartState})
        }
    }
    const delEdge = (attribute: ContentAttributeProps, edges:Array<EdgeData>) => {
        let newFlowChart = attribute.state.flowChart;
        if(newFlowChart){
            newFlowChart.edges = edges;
            return attribute.action({type:"FLOWCHART", operation:"DELEDGE", value: newFlowChart as FlowChartState})
        }
    }
    const textChange = (attribute: ContentAttributeProps, value:string, nodeId:string) => {
        let newFlowChart = attribute.state.flowChart;
        if(newFlowChart){
            newFlowChart.text.forEach((item)=>{
                if(item.nodeId===nodeId){
                    item.text=value;
                }
            })
            return attribute.action({type:"FLOWCHART", operation:"TEXTCHANGE", value: newFlowChart as FlowChartState})
        }
    }

    // テーブル編集
    const createTable = (attribute: ContentAttributeProps) => {
        if (!attribute.state.table){
            return attribute.action({type:"TABLE", operation:"CREATE"})
        }
    };
    const deleteTable = (attribute: ContentAttributeProps) => {
        if (attribute.state.table){
            return attribute.action({type:"TABLE", operation:"DELETE"})
        }
    };
    const addRow = (attribute: ContentAttributeProps) => {
        let newTable = attribute.state.table;
        if(newTable){
            const emptyRow = newTable.data[0].map(()=>{
                return '';
            });
            newTable?.data.push(emptyRow);
        }
        return attribute.action({type:"TABLE", operation:"ADDROW", value: newTable as TableState})
    }
    const delRow = (attribute: ContentAttributeProps) => {
        let newTable = attribute.state.table;
        if(newTable && newTable.data.length > 1){
            newTable.data.pop();
        }
        return attribute.action({type:"TABLE", operation:"DELROW", value: newTable as TableState})
    }
    const addCol = (attribute: ContentAttributeProps) => {
        let newTable = attribute.state.table;
        if(newTable){
            newTable.head.push('');
            newTable.data.forEach((data)=>{
                data.push('')
            })
        }
        return attribute.action({type:"TABLE", operation:"ADDCOL", value: newTable as TableState})
    }
    const delCol = (attribute: ContentAttributeProps) => {
        let newTable = attribute.state.table;
        if(newTable && newTable.head.length > 1){
            newTable.head.pop();
            newTable.data.forEach((data)=>{
                data.pop();
            })
        }
        return attribute.action({type:"TABLE", operation:"DELCOL", value: newTable as TableState})
    }
    const dataChange = (attribute: ContentAttributeProps, col:number, row:number, val:string) => {
        let newTable = attribute.state.table;
        if (newTable){
            newTable.data[col][row] = val;
        }
        return attribute.action({type:"TABLE", operation:"DATACHANGE", value: newTable as TableState})
    }
    const headChange = (attribute: ContentAttributeProps, col:number, val:string) => {
        let newTable = attribute.state.table;
        if (newTable){
            newTable.head[col] = val;
        }
        return attribute.action({type:"TABLE", operation:"HEADCHANGE", value: newTable as TableState})
    }

    // データバー編集
    const createDataBar = (attribute: ContentAttributeProps) => {
        if(!attribute.state.dataBar){
            return attribute.action({type:"DATABAR", operation:"CREATE"})
        }
    };
    const deleteDataBar = (attribute: ContentAttributeProps) => {
        if (attribute.state.dataBar){
            return attribute.action({type:"DATABAR", operation:"DELETE"})
        }
    };
    const addDataBar = (attribute: ContentAttributeProps) => {
        let newDataBar = attribute.state.dataBar;
        if (newDataBar){
            newDataBar.push({label:'', value:0.0});
        }
        return attribute.action({type:"DATABAR", operation:"ADDDATA", value: newDataBar as Array<DataBarState>});
    }

    const delDataBar = (attribute: ContentAttributeProps, index:number) => {
        let newDataBar = attribute.state.dataBar;
        if (newDataBar){
            newDataBar.splice(index, 1);
        }
        return attribute.action({type:"DATABAR", operation:"DELDATA", value: newDataBar as Array<DataBarState>});
    }

    const labelChange = (attribute: ContentAttributeProps, index:number, value:string) => {
        let newDataBar = attribute.state.dataBar;
        if (newDataBar){
            newDataBar[index].label = value;
        }
        return attribute.action({type:"DATABAR", operation:"LABELCHANGE", value: newDataBar as Array<DataBarState>});
    }

    const valueChange = (attribute: ContentAttributeProps, index:number, value:number) => {
        let newDataBar = attribute.state.dataBar;
        if (newDataBar){
            newDataBar[index].value = value;
        }
        return attribute.action({type:"DATABAR", operation:"VALUECHANGE", value: newDataBar as Array<DataBarState>});
    }

    // コンテキストで渡す値
    const myNoteMetaValue = {
        mode,
        myNoteMetaState,
        sliderValues,
        switchDispose,
        changeTitle,
        addTag,
        changeTag,
        deleteTag,
        changeIcon
    };
    const myNoteContentValue = {
        createFlowChart,
        deleteFlowChart,
        createTable,
        deleteTable,
        createDataBar,
        deleteDataBar,
        changeDescription,
        addRef,
        delRef,
        changeRef,
        addNode,
        delNode,
        addEdge,
        delEdge,
        textChange,
        addRow,
        delRow,
        addCol,
        delCol,
        dataChange,
        headChange,
        addDataBar,
        delDataBar,
        labelChange,
        valueChange
    }

    const myNoteMeta = (
        <MyNoteMetaContext.Provider value={myNoteMetaValue}>
            <MyNoteMeta />
        </MyNoteMetaContext.Provider>
    );
    const businessFlow = (
        <MyNoteContentContext.Provider value={myNoteContentValue}>
            <MyNoteContent 
            contentName='ビジネスフロー' 
            contentDiscription='自分自身や周囲の行動、振る舞いから気づいたポイントや行動を可視化しよう'
            attribute={businessFlowAttr}/>
        </MyNoteContentContext.Provider>
    );
    const goal = (
        <MyNoteContentContext.Provider value={myNoteContentValue}>
            <MyNoteContent 
            contentName='ありたい姿・ゴール' 
            contentDiscription='ゴールへ向かうために、現状観察で出た意見・問題点から課題を整理しよう'
            attribute={goalAttr}/>
        </MyNoteContentContext.Provider>
    );
    const problem = (
        <MyNoteContentContext.Provider value={myNoteContentValue}>
            <MyNoteContent 
            contentName='課題の整理' 
            contentDiscription='ゴールへ向かうために、現状観察で出た意見・問題点から課題を整理しよう'
            attribute={problemAttr}/>
        </MyNoteContentContext.Provider>
    );
    const solution = (
        <MyNoteContentContext.Provider value={myNoteContentValue}>
            <MyNoteContent 
            contentName='ソリューション情報' 
            contentDiscription='Share Tech内もしくは、ホームページで検索した情報を整理しよう'
            attribute={solutionAttr}/>
        </MyNoteContentContext.Provider>
    );
    const result = (
        <MyNoteContentContext.Provider value={myNoteContentValue}>
            <MyNoteContent 
            contentName='検証/結果' 
            contentDiscription='大切にしたいゴールを基準に検証結果を整理しよう'
            attribute={resultAttr}/>
        </MyNoteContentContext.Provider>
    );

    const switchToEditBtn = (
        <FloatButton onClick={toggleMode} label="編集" width="64px" height="64px" borderRadius='50%' backgroundColor='white' color='#666' hoverBgColor='white'/>);
    const switchToViewBtn = (
        <FloatButton onClick={toggleMode} label="確定" width="64px" height="64px" borderRadius='50%' backgroundColor='pink' color='#666' hoverBgColor='pink'/>);
    
    console.log(goalState)
    return (
        <MyNoteTemplate 
        myNoteMeta={myNoteMeta}
        businessFlow={businessFlow}
        goal={goal}
        problem={problem}
        solution={solution}
        result={result}
        switchBtn={mode === "VIEW" ? switchToEditBtn : switchToViewBtn}
        />
    );
}
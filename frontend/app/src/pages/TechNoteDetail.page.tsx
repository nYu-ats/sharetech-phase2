import { TechNoteDetailTemplate } from "../templates/TechNoteDetail.template";
import { VFC, useEffect, useState, createContext, useReducer } from 'react';
import { EdgeData, NodeData } from 'reaflow';
import { TechNoteMeta } from '../components/organisms/techNote/TechNoteMeta';
import { TechNoteContent } from "../components/organisms/techNote/TechNoteContent";
import { RecommendNoteLinkContainer } from "../components/organisms/noteLinkContainer/ReccomendNoteLinkContainer";
import ApiClient, { TechNoteContent as TechNoteResponse } from '../functions/api/ApiClient';
import { useLocation } from 'react-router-dom';

type TechNoteMetaStateProps = {
    expose: boolean;
    icon: number;
    title: string;
    tags: Array<string>;
}

export type TechNoteContentStateProps = {
    text: string;
    reference: Array<string> | null;
    flowChart: FlowChartState | null;
    table: TableState | null;
    dataBar: Array<DataBarState> | null;
}

type FlowChartState = {
    nodes: Array<NodeData>;
    edges: Array<EdgeData>;
    text: Array<{ nodeId: string, text: string }>;
}

type TableState = {
    head: Array<string>;
    data: Array<Array<string>>;
}

type DataBarState = {
    label: string;
    value: number;
}

export type TechNoteContentAttributeProps = {
    state: TechNoteContentStateProps;
    action: null;
}

const initialTechNoteMetaState = {
    expose: true,
    icon: 0,
    title: "",
    tags: [],
}

const initialTechNoteContentState = {
    text: "",
    reference: null,
    flowChart: null,
    table: null,
    dataBar: null,
}

type TechNoteMetaAction = { type: "INITIALIZE", value: TechNoteMetaStateProps }

type TechNoteContentAction = { type: "INITIALIZE", value: TechNoteContentStateProps }

const myNoteMetaReducer = (state: TechNoteMetaStateProps, action: TechNoteMetaAction) => {
    switch (action.type) {
        case "INITIALIZE":
            return {...action.value};
        default:
            return state;
    }
}

const techNoteContentReducer = (state: TechNoteContentStateProps, action: TechNoteContentAction) => {
    switch (action.type) {
        case "INITIALIZE":
            return {...action.value};
        default:
            return state;
    }
}

export const TechNoteMetaContext = createContext<any>({});
export const TechNoteDetailContext = createContext<any>({});

export const TechNoteDetail: VFC = () => {
    const location = useLocation();

    const [techNoteMetaState, techNoteMetaDispath] = useReducer(myNoteMetaReducer, initialTechNoteMetaState);
    const [businessFlowState, businessFlowDispatch] = useReducer(techNoteContentReducer, initialTechNoteContentState);
    const [goalState, goalDispatch] = useReducer(techNoteContentReducer, initialTechNoteContentState);
    const [problemState, problemDispatch] = useReducer(techNoteContentReducer, initialTechNoteContentState);
    const [solutionState, solutionDispatch] = useReducer(techNoteContentReducer, initialTechNoteContentState);
    const [resultState, resultDispatch] = useReducer(techNoteContentReducer, initialTechNoteContentState);
    const [reccomendTechNoteState, setReccomentTechNoteState] = useState([
        {
            title:'test',
            tags:['tag1', 'tag2', 'tag3'],
            icon: 0,
            name:'ttttt',
            date: '2022-04-04'
        }
    ]);

    const convertToReadOnlyContent = (content: TechNoteContentStateProps) => {
        const flowChartTexts = content.flowChart?.text;
        if(flowChartTexts){
            if(content.flowChart?.nodes){
                content.flowChart.nodes.forEach((item) => {
                    const targetText = flowChartTexts.filter(target => target.nodeId == item.id);
                    if(targetText.length > 0){
                        item.text = targetText[0].text;
                    }
                })
            }
        }
        return content;
    }

    const initialize = async () => {
        const index = location.pathname.split('/').slice(-1)[0];
        const content = await ApiClient.getTechNote(index) as unknown as TechNoteResponse;
        techNoteMetaDispath({type:'INITIALIZE', value:{expose: content.expose, icon: content.icon, title: content.title, tags: content.tags}});
        businessFlowDispatch({type: "INITIALIZE", value: convertToReadOnlyContent(content.data.businessFlow)});
        goalDispatch({type: "INITIALIZE", value: convertToReadOnlyContent(content.data.goal)});
        problemDispatch({type: "INITIALIZE", value: convertToReadOnlyContent(content.data.problem)});
        solutionDispatch({type: "INITIALIZE", value: convertToReadOnlyContent(content.data.solution)});
        resultDispatch({type: "INITIALIZE", value: convertToReadOnlyContent(content.data.result)});
    }

    useEffect(()=>{
        initialize();
    }, [])

    const businessFlowAttr = {
        state: businessFlowState,
        action: null,
    }
    const goalAttr = {
        state: goalState,
        action: null,
    }
    const problemAttr = {
        state: problemState,
        action: null,
    }
    const solutionAttr = {
        state: solutionState,
        action: null,
    }
    const resultAttr = {
        state: resultState,
        action: null,
    }

    const techNoteMeta = (
        <TechNoteMetaContext.Provider value={techNoteMetaState}>
            <TechNoteMeta 
            expose={techNoteMetaState.expose}
            icon={techNoteMetaState.icon}
            title={techNoteMetaState.title}
            tags={techNoteMetaState.tags}/>
        </TechNoteMetaContext.Provider>
    )
    const businessFlow = (
        <TechNoteContent
            contentName='ビジネスフロー'
            attribute={businessFlowAttr}
        />
    )
    const goal = (
        <TechNoteContent
            contentName='ありたい姿・ゴール'
            attribute={goalAttr}
        />
    )
    const problem = (
        <TechNoteContent
            contentName='課題の整理'
            attribute={problemAttr}
        />
    )
    const solution = (
        <TechNoteContent
            contentName='ソリューション情報'
            attribute={solutionAttr}
        />
    )
    const result = (
        <TechNoteContent
            contentName='検証・結果'
            attribute={resultAttr}
        />
    )
    const reccomendTechNote = (
        <RecommendNoteLinkContainer 
            items={reccomendTechNoteState}
            />
        )

    return (
        <TechNoteDetailTemplate
            techNoteMeta={techNoteMeta}
            businessFlow={businessFlow}
            goal={goal}
            problem={problem}
            solution={solution}
            result={result} 
            reccomendTechNote={reccomendTechNote}/>
    )
}
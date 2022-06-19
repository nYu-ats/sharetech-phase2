import { VFC, ReactNode } from 'react';
import { SimpleTemplate } from './Simple.template';

export type MyNoteTemplateProps = {
    myNoteMeta:ReactNode;
    businessFlow:ReactNode;
    goal:ReactNode;
    problem: ReactNode;
    solution: ReactNode;
    result: ReactNode;
    switchBtn?: ReactNode;
}

export const MyNoteTemplate:VFC<MyNoteTemplateProps> = (props) => {
    return (
        <SimpleTemplate>
                <div style={{position:"fixed", bottom:"2.5em", left:"2.5em"}}>
                    {props.switchBtn}
                </div>
                <div style={{padding:"1em"}}>
                    {props.myNoteMeta}
                </div>
                <div style={{padding:"1em"}}>
                    {props.businessFlow}
                </div>
                <div style={{padding:"1em"}}>
                    {props.goal}
                </div>
                <div style={{padding:"1em"}}>
                    {props.problem}
                </div>
                <div style={{padding:"1em"}}>
                    {props.solution}
                </div>
                <div style={{padding:"1em"}}>
                    {props.result}
                </div>
        </SimpleTemplate>
    );
}
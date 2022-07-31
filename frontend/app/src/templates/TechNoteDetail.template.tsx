import { VFC, ReactNode } from 'react';
import { SimpleTemplate } from './Simple.template';

export type TechNoteDetailProps = {
    techNoteMeta?: ReactNode;
    businessFlow?: ReactNode;
    goal?: ReactNode;
    problem?: ReactNode;
    solution?: ReactNode;
    result?: ReactNode;
    reccomendTechNote?: ReactNode;
}

export const TechNoteDetailTemplate: VFC<TechNoteDetailProps> = (props) => {
    return (
        <SimpleTemplate>
            <div style={{ padding: "1em" }}>
                {props.techNoteMeta}
            </div>
            <div style={{ padding: "1em" }}>
                {props.businessFlow}
            </div>
            <div style={{ padding: "1em" }}>
                {props.goal}
            </div>
            <div style={{ padding: "1em" }}>
                {props.problem}
            </div>
            <div style={{ padding: "1em" }}>
                {props.solution}
            </div>
            <div style={{ padding: "1em" }}>
                {props.result}
            </div>
            <div style={{ padding: "1em" }}>
                {props.reccomendTechNote}
            </div>
        </SimpleTemplate>
    );
}
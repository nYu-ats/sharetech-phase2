import { VFC, ReactNode } from 'react';
import { SimpleTemplate } from './Simple.template';

export type TechNoteDisplayTemplateProps = {
    header: ReactNode;
    tags: ReactNode;
    account: ReactNode;
    techNoteLink: ReactNode;
    favoriteButton: ReactNode;
    title: string;
    businessFlow?: ReactNode;
    toBeGoal?: ReactNode;
    taskOrganize?: ReactNode;
    solutionInfo?: ReactNode;
    result?: ReactNode;
    reference?: ReactNode;
    extra?: ReactNode;
}

export const TechNoteDisplayTemplate: VFC<TechNoteDisplayTemplateProps> = (props) => {
    return (
        <SimpleTemplate>
            <div style={{ textAlign: "center", fontSize: "3em" }}>
                {props.title}
            </div>
            <div style={{ padding: "0 15vw" }}>
                {props.tags}
            </div>
            <div style={{ padding: "0 15vw", display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "auto" }}>
                    {props.account}
                </div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                    {props.techNoteLink}
                    {props.favoriteButton}
                </div>
            </div>
            <div style={{ padding: "1em" }}>
                {props.businessFlow}
            </div>
            <div style={{ padding: "1em" }}>
                {props.toBeGoal}
            </div>
            <div style={{ padding: "1em" }}>
                {props.taskOrganize}
            </div>
            <div style={{ padding: "1em" }}>
                {props.solutionInfo}
            </div>
            <div style={{ padding: "1em" }}>
                {props.result}
            </div>
            <div style={{ padding: "1em" }}>
                {props.reference}
            </div>
            <div style={{ padding: "1em" }}>
                {props.favoriteButton}
            </div>
            <div style={{ padding: "1em" }}>
                {props.extra}
            </div>
        </SimpleTemplate>
    );
}
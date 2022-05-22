import { VFC, ReactNode } from 'react';

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
        <div style={{ width: "100%", backgroundColor: "#ffffff" }}>
            <div style={{ position: "sticky", top: "0" }}>
                {props.header}
            </div>
            <div style={{ textAlign: "center", fontSize: "3em", padding: "0 30vw" }}>
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
            <div style={{ width: "85vw", padding: "0 7.5vw" }}>
                <div>
                    {props.businessFlow}
                </div>
                <div>
                    {props.toBeGoal}
                </div>
                <div>
                    {props.taskOrganize}
                </div>
                <div>
                    {props.solutionInfo}
                </div>
                <div>
                    {props.result}
                </div>
                <div>
                    {props.reference}
                </div>
                <div>
                    {props.favoriteButton}
                </div>
                <div>
                    {props.extra}
                </div>
            </div>

        </div>
    );
}
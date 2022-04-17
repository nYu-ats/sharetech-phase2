import { VFC, ReactNode } from 'react';

export type TopTemplateProps = {
    header: ReactNode;
    myNote?: ReactNode;
    attentionNote?: ReactNode;
    news?: ReactNode;
}

export const TopTemplate:VFC<TopTemplateProps> = (props) => {
    return (
        <div style={{width:"100%", backgroundColor:"#e8ecef"}}>
            <div style={{position:"sticky", top:"0"}}>
                {props.header}
            </div>
            <div style={{width:"85vw", padding:"0 7.5vw"}}>
                <div>
                    {props.myNote}
                </div>
                <div>
                    {props.attentionNote}
                </div>
                <div>
                    {props.news}
                </div>
            </div>

        </div>
    );
}
import { VFC, ReactNode } from 'react';
import { SimpleTemplate } from './Simple.template';

export type TopTemplateProps = {
    myNote?: ReactNode;
    attentionNote?: ReactNode;
    news?: ReactNode;
}

export const HomeTemplate:VFC<TopTemplateProps> = (props) => {
    return (
        <SimpleTemplate>
                <div>
                    {props.myNote}
                </div>
                <div>
                    {props.attentionNote}
                </div>
                <div>
                    {props.news}
                </div>
        </SimpleTemplate>
    );
}
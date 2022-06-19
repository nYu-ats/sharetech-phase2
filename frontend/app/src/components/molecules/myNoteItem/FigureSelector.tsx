import { VFC } from 'react';
import styled from 'styled-components';
import { ContentAttributeProps } from '../../../pages/MyNote.page';
import { SimpleList } from '../list/SimpleList';

export type FigureSelectorProps = {
    targets: Array<Selectable>;
}

type Selectable = {
    name: string;
    action: ()=>void;
}

const StyeledDiv = styled.div<{
    backgroundColor?: string;
}>
`
background-color: ${(props) => ( props.backgroundColor ? props.backgroundColor : "#FFFFFF")};
padding: .5em;
color: #666;
&:hover{
    cursor: pointer;
    color: black;
}
`

export const FigureSelector:VFC<FigureSelectorProps> =(props) => {

    return (
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            backgroundColor:"white", 
            borderRadius:"4px", 
            position:"absolute",
            top:"0",
            left:"1em",
            minWidth:"160px",
            maxWidth:"240px",
            boxShadow:"0 0 4px #abb1b5"}}>
                <SimpleList items={props.targets.map((target) => {
                    return <StyeledDiv onClick={() => target.action()}>{target.name}</StyeledDiv>
                })}/>
        </div>
    );
}
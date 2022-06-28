import { VFC, ReactNode } from 'react';
import { Header } from "../components/organisms/header/Header";

export type SimpleTemplateProps = {
    children: ReactNode;
}

export const SimpleTemplate:VFC<SimpleTemplateProps> = (props) => {
    return (
        <div style={{width:"100%", backgroundColor:"#e8ecef"}}>
            <div style={{position:"sticky", top:"0"}}>
                <Header/>
            </div>
            <div style={{width:"85vw", padding:"0 7.5vw"}}>
                {props.children}
            </div>
        </div>
    );
}
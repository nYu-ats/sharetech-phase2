import { TopTemplate } from "../templates/Top.template";
import { VFC, ReactNode } from 'react';
import { Header } from "../components/organisms/header/Header";
import { MyNoteLinkContainer } from "../components/organisms/noteLinkContainer/MyNoteLinkContainer";
import { AttentionNoteLinkContainer } from "../components/organisms/noteLinkContainer/AttentionNoteLinkContainer";
import { NewsLinkContainer } from "../components/organisms/noteLinkContainer/NewsLinkContainer";

export const TopPage:VFC = () => {

    const header = <Header/>
    const myNote = (
    <MyNoteLinkContainer 
    items={
        [{
            figure:"test.png",
            title:"test",
            tags:["test","test2"]
        },
        {
            figure:"test2.png",
            title:"test2",
            tags:["test3","test4"]
        },
        {
            figure:"test2.png",
            title:"test2",
            tags:["test3","test4"]
        },
        {
            figure:"test2.png",
            title:"test2",
            tags:["test3","test4"]
        },
        {
            figure:"test2.png",
            title:"test2",
            tags:["test3","test4"]
        },
        {
            figure:"test2.png",
            title:"test2",
            tags:["test3","test4"]
        },
        {
            figure:"test2.png",
            title:"test2",
            tags:["test3","test4"]
        },
        {
            figure:"test2.png",
            title:"test2",
            tags:["test3","test4"]
        },
        {
            figure:"test2.png",
            title:"test2",
            tags:["test3","test4"]
        },
        {
            figure:"test2.png",
            title:"test2",
            tags:["test3","test4"]
        },
        {
            figure:"test2.png",
            title:"test2",
            tags:["test3","test4"]
        },
        {
            figure:"test2.png",
            title:"test2",
            tags:["test3","test4"]
        }
    ]}/>
    )

    const attentionNote = (
        <AttentionNoteLinkContainer
        items={
            [{
                icon:"test.png",
                title:"test",
                tags:["test","test2"]
            },
            {
                icon:"test2.png",
                title:"test2",
                tags:["test3","test4"]
            },
            {
                icon:"test2.png",
                title:"test2",
                tags:["test3","test4"]
            },
            {
                icon:"test2.png",
                title:"test2",
                tags:["test3","test4"]
            },
            {
                icon:"test2.png",
                title:"test2",
                tags:["test3","test4"]
            }
        ]}/>
    )

    const news = (
        <NewsLinkContainer
        items={[
            {
                title:"test1",
                overview:"test1"
            },
            {
                title:"test1",
                overview:"test1"
            },
            {
                title:"test1",
                overview:"test1"
            },
            {
                title:"test1",
                overview:"test1"
            },
            {
                title:"test1",
                overview:"test1"
            },
        ]}/>
    );

    return (
        <TopTemplate 
        header={header} 
        myNote={myNote} 
        attentionNote={attentionNote}
        news={news}
        />
    )
}
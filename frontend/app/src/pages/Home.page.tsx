import { HomeTemplate } from "../templates/Home.template";
import { VFC, ReactNode } from 'react';
import { MyNoteLinkContainer } from "../components/organisms/noteLinkContainer/MyNoteLinkContainer";
import { AttentionNoteLinkContainer } from "../components/organisms/noteLinkContainer/AttentionNoteLinkContainer";
import { NewsLinkContainer } from "../components/organisms/noteLinkContainer/NewsLinkContainer";

export const HomePage: VFC = () => {

    const myNote = (
        <MyNoteLinkContainer
            items={
                [{
                    id: 1,
                    figure: "test.png",
                    title: "test1",
                    tags: ["test", "test2"]
                },
                {
                    id: 2,
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    id: 2,
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    id: 2,
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    id: 2,
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    id: 2,
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    id: 2,
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    id: 2,
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    id: 2,
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    id: 2,
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    id: 2,
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    id: 2,
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                }
                ]} />
    )

    const attentionNote = (
        <AttentionNoteLinkContainer
            items={
                [{
                    icon: "test.png",
                    title: "test",
                    tags: ["test", "test2"]
                },
                {
                    icon: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    icon: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    icon: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    icon: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                }
                ]} />
    )

    const news = (
        <NewsLinkContainer
            items={[
                {
                    title: "test1",
                    overview: "test1"
                },
                {
                    title: "test1",
                    overview: "test1"
                },
                {
                    title: "test1",
                    overview: "test1"
                },
                {
                    title: "test1",
                    overview: "test1"
                },
                {
                    title: "test1",
                    overview: "test1"
                },
            ]} />
    );

    return (
        <HomeTemplate
            myNote={myNote}
            attentionNote={attentionNote}
            news={news}
        />
    )
}
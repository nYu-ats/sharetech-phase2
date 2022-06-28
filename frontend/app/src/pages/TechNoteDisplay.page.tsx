import { TechNoteDisplayTemplate } from "../templates/TechNoteDisplay.template";
import { VFC, ReactNode, useEffect, useState } from 'react';
import { Header } from "../components/organisms/header/Header";
import { TagLinkContainer } from "../components/organisms/noteLinkContainer/TagLinkContainer";
import { TechNoteAccountInfoContainer } from "../components/organisms/noteLinkContainer/TechNoteAccountInfoContainer";
import { TechNoteLinkIcon } from '../icons/TechNoteLinkIcon';
import { Link } from '../components/atoms/link/SimpleLink';
import { SimpleButton } from '../components/atoms/button/SimpleButton';
import { TechNoteContentContainer } from "../components/organisms/noteLinkContainer/TechNoteContentContainer";
import { ExtraNoteLinkContainer } from "../components/organisms/noteLinkContainer/ExtraNoteLinkContainer";
import { techNoteItem } from "../routes/AppRoute";

type Props = {
    data: techNoteItem
}

export const TechNoteDisplayPage: VFC<Props> = (props) => {

    // dataがとってこれない。。
    // console.log({props.data});
    const header = <Header />
    const tags = <TagLinkContainer
        tags={["タグ1", "タグ2"]} />
    const account = <TechNoteAccountInfoContainer
        icon="icon.png"
        name="シェアテック太郎"
        date="{data.account.date}" />
    const techNoteLink = <div style={{ margin: "0 1em" }}>
        <Link anchorTo="#"><TechNoteLinkIcon color='black' /></Link>
    </div>
    const favoriteButton =
        <SimpleButton label='お気に入り' action='submit' color='#000000' backgroundColor='#ffc6c6' height="4em" width="16em" />
    const businessFlow = (
        <TechNoteContentContainer
            title="ビジネスフロー"
            introduction="自分自身や周囲の行動や振る舞いから気づいたポイントや行動フロー、感情を可視化しよう"
            items={
                [{
                    figure: "test.png",
                    title: "test",
                    tags: ["test", "test2"]
                },
                {
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                },
                {
                    figure: "test2.png",
                    title: "test2",
                    tags: ["test3", "test4"]
                }
                ]} />
    )

    const toBeGoal = (
        <TechNoteContentContainer
            title="ありたい姿・ゴール"
            introduction="優先度を設けて3つ以内で言語化しよう"
            items={[]} />)
    const taskOrganize = (
        <TechNoteContentContainer
            title="課題の整理"
            introduction="ゴールへ向かうために、現状観察で出た意見・問題点から課題を整理しよう"
            items={[]} />)
    const solutionInfo = (
        <TechNoteContentContainer
            title="ソリューション情報"
            introduction="ShareTech内もしくは、ホームページで検索した情報を整理しよう"
            items={[]} />)
    const result = (
        <TechNoteContentContainer
            title="検証/結果"
            introduction="大切にしたいゴールを基準に検証結果を整理しよう"
            items={[]} />)

    const reference = (<TechNoteContentContainer
        title="参考情報"
        introduction=""
        items={[]} />)

    const extra = (
        <ExtraNoteLinkContainer
            items={[
                {
                    title: "製造業の働き方改革をタスク管理ツールで実践",
                    tags: ["test1"],
                    icon: "test1.png",
                    name: "シェアテック太郎",
                    date: "2022/06/19",
                },
                {
                    title: "製造業の働き方改革をタスク管理ツールで実践",
                    tags: ["test1"],
                    icon: "test1.png",
                    name: "シェアテック太郎",
                    date: "2022/06/19",
                },
                {
                    title: "製造業の働き方改革をタスク管理ツールで実践",
                    tags: ["test1"],
                    icon: "test1.png",
                    name: "シェアテック太郎",
                    date: "2022/06/19",
                },
                {
                    title: "製造業の働き方改革をタスク管理ツールで実践",
                    tags: ["test1"],
                    icon: "test1.png",
                    name: "シェアテック太郎",
                    date: "2022/06/19",
                },
                {
                    title: "製造業の働き方改革をタスク管理ツールで実践",
                    tags: ["test1"],
                    icon: "test1.png",
                    name: "シェアテック太郎",
                    date: "2022/06/19",
                }
            ]} />
    );

    return (
        <TechNoteDisplayTemplate
            header={header}
            tags={tags}
            account={account}
            title="製造業の働き方改革をタスク管理ツールで実践"
            techNoteLink={techNoteLink}
            favoriteButton={favoriteButton}
            businessFlow={businessFlow}
            toBeGoal={toBeGoal}
            taskOrganize={taskOrganize}
            solutionInfo={solutionInfo}
            result={result}
            reference={reference}
            extra={extra}
        />
    )
}
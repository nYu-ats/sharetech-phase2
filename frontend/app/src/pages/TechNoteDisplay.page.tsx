import { TechNoteDisplayTemplate } from "../templates/TechNoteDisplay.template";
import { VFC, ReactNode, useEffect, useState, createContext } from 'react';
import { Header } from "../components/organisms/header/Header";
import { TagLinkContainer } from "../components/organisms/noteLinkContainer/TagLinkContainer";
import { TechNoteAccountInfoContainer } from "../components/organisms/noteLinkContainer/TechNoteAccountInfoContainer";
import { TechNoteLinkIcon } from '../icons/TechNoteLinkIcon';
import { Link } from '../components/atoms/link/SimpleLink';
import { SimpleButton } from '../components/atoms/button/SimpleButton';
import { TechNoteContentContainer } from "../components/organisms/noteLinkContainer/TechNoteContentContainer";
import { MyNoteContentContainer } from "../components/organisms/noteLinkContainer/MyNoteContentContainer";
import { ExtraNoteLinkContainer } from "../components/organisms/noteLinkContainer/ExtraNoteLinkContainer";
import { techNoteItem } from "../routes/AppRoute";

type Props = {
    data: techNoteItem
}

export const MyNoteContentBrowseContext = createContext<any>({});

export const TechNoteDisplayPage: VFC<Props> = (props) => {

    // dataがとってこれない。。
    // console.log(props.data);

    // console.log(props.data.account.name);
    const header = <Header />
    const tags = <TagLinkContainer
        tags={["タグ1", "タグ2"]} />
    // FIXME 試し中
    const account = (
        <MyNoteContentBrowseContext.Provider value={props.data}>
            <TechNoteAccountInfoContainer
                icon="icon.png"
                name="シェアテック太郎"
                date="{props.data.account.date}" />
        </ MyNoteContentBrowseContext.Provider>
    )
    const techNoteLink = <div style={{ margin: "0 1em" }}>
        <Link anchorTo="#"><TechNoteLinkIcon color='black' /></Link>
    </div>
    const favoriteButton =
        <SimpleButton label='お気に入り' action='submit' color='#000000' backgroundColor='#ffc6c6' height="4em" width="16em" />
    const businessFlow = (
        <MyNoteContentContainer
            title="ビジネスフロー"
            introduction="自分自身や周囲の行動や振る舞いから気づいたポイントや行動フロー、感情を可視化しよう"
            item={{
                text: '',
                reference: [],
                flowChart: null,
                table: null,
                dataBar: null
            }} />
    )

    const toBeGoal = (
        <MyNoteContentContainer
            title="ありたい姿・ゴール"
            introduction="優先度を設けて3つ以内で言語化しよう"
            item={{
                text: 'sample text',
                reference: ['https://github.com'],
                flowChart: {
                    nodes: [
                        {
                            id: '1',
                            text: 'ナンバーワン'
                        },
                        {
                            id: '2',
                            text: 'Two'
                        }
                    ],
                    edges: [
                        {
                            id: '1-2',
                            from: '1',
                            to: '2'
                        }
                    ],
                    // TODO flowChart内のtext消してよいか？onXXXの変更に追従するために用意したと思っているので、閲覧用には消してもよいと判断
                },
                table: { head: ['#', '名前'], data: [['1', '太郎'], ['2', '将之']] },
                dataBar: [{ label: 'data1', value: 5 }, { label: 'data2', value: 2 }, { label: 'data3', value: 10 }]
            }} />)
    const taskOrganize = (
        <MyNoteContentContainer
            title="課題の整理"
            introduction="ゴールへ向かうために、現状観察で出た意見・問題点から課題を整理しよう"
            item={{
                text: '',
                reference: [],
                flowChart: null,
                table: null,
                dataBar: null
            }} />)
    const solutionInfo = (
        <MyNoteContentContainer
            title="ソリューション情報"
            introduction="ShareTech内もしくは、ホームページで検索した情報を整理しよう"
            item={{
                text: '',
                reference: [],
                flowChart: null,
                table: null,
                dataBar: null
            }} />)
    const result = (
        <MyNoteContentContainer
            title="検証/結果"
            introduction="大切にしたいゴールを基準に検証結果を整理しよう"
            item={{
                text: '',
                reference: [],
                flowChart: null,
                table: null,
                dataBar: null
            }} />)

    const reference = (<MyNoteContentContainer
        title="参考情報"
        introduction=""
        item={{
            text: '',
            reference: [],
            flowChart: null,
            table: null,
            dataBar: null
        }} />)

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
import { MyNoteBrowseTemplate } from "../templates/MyNoteBrowse.template";
import { VFC, useEffect, useState, createContext } from 'react';
import { Header } from "../components/organisms/header/Header";
import { TagLinkContainer } from "../components/organisms/noteLinkContainer/TagLinkContainer";
import { TechNoteAccountInfoContainer } from "../components/organisms/noteLinkContainer/TechNoteAccountInfoContainer";
import { TechNoteLinkIcon } from '../icons/TechNoteLinkIcon';
import { Link } from '../components/atoms/link/SimpleLink';
import { SimpleButton } from '../components/atoms/button/SimpleButton';
import { MyNoteContentContainer } from "../components/organisms/noteLinkContainer/MyNoteContentContainer";
import { ExtraNoteLinkContainer } from "../components/organisms/noteLinkContainer/ExtraNoteLinkContainer";
import axios from 'axios'
import { useParams } from "react-router-dom";

type TechNoteItem = {
    account: {
        icon: string,
        name: string,
        date: string
    }
    contents: {
        businessFlow: content,
        toBeGoal: content,
        taskOrganize: content,
        solutionInfo: content,
        result: content,
        reference: string
    }
}

type content = {
    text: string,
    reference: string[],
    flowChart: {
        nodes:
        {
            id: string,
            text: string
        }[],
        edges:
        {
            id: string,
            from: string,
            to: string
        }[]
    },
    table: { head: string[], data: [string[]] },
    dataBar: { label: string, value: number }[]
}

const initialContent = {
    text: '',
    reference: [],
    flowChart: null,
    table: null,
    dataBar: null
}

export const MyNoteContentBrowseContext = createContext<any>({});

export const MyNoteBrowsePage: VFC = () => {
    const [data, setData] = useState<TechNoteItem>({} as TechNoteItem);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const getData = async (id: string) => {
        await axios.get('http://localhost:3001/data/' + id)
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            }).catch(err => { //リクエストに失敗した場合
                console.error(err)
            })
    };
    useEffect(() => {
        if (typeof id === "undefined") {
            getData("");
        } else {
            getData(id);
        }
    }, []);

    const header = <Header />
    const tags = <TagLinkContainer
        tags={["タグ1", "タグ2"]} />
    const account = (
        <div>
            {isLoading ?
                <TechNoteAccountInfoContainer
                    icon="icon.png"
                    name="シェアテック太郎"
                    date="{props.data.account.date}" />
                :
                <TechNoteAccountInfoContainer
                    icon={data.account.icon}
                    name={data.account.name}
                    date={data.account.date} />
            }
        </div>
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
            item={isLoading ? initialContent : data.contents.businessFlow} />
    )
    const toBeGoal = (
        <MyNoteContentContainer
            title="ありたい姿・ゴール"
            introduction="優先度を設けて3つ以内で言語化しよう"
            item={isLoading ? initialContent : data.contents.toBeGoal} />)
    const taskOrganize = (
        <MyNoteContentContainer
            title="課題の整理"
            introduction="ゴールへ向かうために、現状観察で出た意見・問題点から課題を整理しよう"
            item={isLoading ? initialContent : data.contents.taskOrganize} />)
    const solutionInfo = (
        <MyNoteContentContainer
            title="ソリューション情報"
            introduction="ShareTech内もしくは、ホームページで検索した情報を整理しよう"
            item={isLoading ? initialContent : data.contents.solutionInfo} />)
    const result = (
        <MyNoteContentContainer
            title="検証/結果"
            introduction="大切にしたいゴールを基準に検証結果を整理しよう"
            item={isLoading ? initialContent : data.contents.result} />)

    const reference = (<MyNoteContentContainer
        title="参考情報"
        introduction=""
        item={initialContent} />)

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
        <MyNoteBrowseTemplate
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
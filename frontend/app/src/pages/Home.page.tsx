import { HomeTemplate } from "../templates/Home.template";
import { VFC, ReactNode, useState, useEffect } from 'react';
import { MyNoteLinkContainer } from "../components/organisms/noteLinkContainer/MyNoteLinkContainer";
import { AttentionNoteLinkContainer } from "../components/organisms/noteLinkContainer/AttentionNoteLinkContainer";
import { NewsLinkContainer } from "../components/organisms/news/NewsLinkContainer";
import ApiClient from '../functions/api/ApiClient';
import { MyNoteItem } from "../components/organisms/noteLinkContainer/MyNoteLinkContainer";
import { useNavigate } from "react-router-dom"

export const HomePage: VFC = () => {
    const navigate = useNavigate();

    const [myNoteState, setMyNoteState] = useState<Array<MyNoteItem>>([]);
    const [attentionTechNoteState, setAttentionTechNoteState] = useState<Array<MyNoteItem>>([]);

    const initializeMyNote = async () => {
        const contents = await ApiClient.getTechNoteList();
        const myNoteContents = contents.map((item) => {
            return {
                id: Number.parseInt(item.id),
                icon: item.icon,
                title: item.title,
                tags: item.tags
            }
        })
        setMyNoteState(myNoteContents);
    }

    const initializeAttentionTechNote = async () => {
        const contents = await ApiClient.getTechNoteList();
        const myNoteContents = contents.map((item) => {
            return {
                id: Number.parseInt(item.id),
                icon: item.icon,
                title: item.title,
                tags: item.tags
            }
        })
        setAttentionTechNoteState(myNoteContents.slice(0, 5));
    }

    const addNewMyNote = async () => {
        const id = await ApiClient.createEmptyTechNote();
        navigate('/techNote/me/'+String(id))
    }

    useEffect(()=>{
        initializeMyNote();
        initializeAttentionTechNote();
    }, [])

    const myNote = (
        <MyNoteLinkContainer
            items={myNoteState} 
            addMyNote={addNewMyNote}/>
    )

    const attentionNote = (
        <AttentionNoteLinkContainer
            items={attentionTechNoteState} />
    )

    const news = (
        <NewsLinkContainer
            items={[]} />
    );

    return (
        <HomeTemplate
            myNote={myNote}
            attentionNote={attentionNote}
            news={news}
        />
    )
}
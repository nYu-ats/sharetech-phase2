import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { HomePage } from '../pages/Home.page';
import { MyNotePage } from '../pages/MyNote.page';
import { MyNoteBrowsePage } from '../pages/MyNoteBrowse.page';

// TODO: 記載する箇所の相談
export type techNoteItem = {
    account: {
        icon: string
        name: string
        date: string
    }
}

export const AppRoute = () => {
    // TODO: 記載する箇所の相談
    const [data, setData] = useState<techNoteItem>({} as techNoteItem);
    const getData = async () => {
        try {
            const response = await fetch('http://localhost:3001/data');
            let json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => { getData(); }, []);
    
    let element = useRoutes([
        {
            path: '/home',
            element: <HomePage />,
        },
        {
            path: '/myNote',
            element: <MyNotePage />,
        },
        {
            path: '/myNoteBrowse',
            element: <MyNoteBrowsePage data={data}/>,
        }
    ]);

    return element;
}
import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { TopPage } from '../pages/Top.page';
import { TechNoteDisplayPage } from '../pages/TechNoteDisplay.page';

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
            path: '/',
            element: <TopPage />,
        },
        {
            path: '/TechNoteDisplay',
            element: <TechNoteDisplayPage data={data}/>,
        }
    ]);

    return element;
}
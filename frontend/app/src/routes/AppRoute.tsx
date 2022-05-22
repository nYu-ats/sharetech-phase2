import React from 'react';
import { useRoutes } from 'react-router-dom';
import { TopPage } from '../pages/Top.page';
import { TechNoteDisplayPage } from '../pages/TechNoteDisplay.page';

export const AppRoute = () => {
    let element = useRoutes([
        {
            path: '/',
            element: <TopPage />,
        },
        {
            path: '/TechNoteDisplay',
            element: <TechNoteDisplayPage />,
        }
    ]);

    return element;
}
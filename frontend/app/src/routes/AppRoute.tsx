import React from 'react';
import { useRoutes } from 'react-router-dom';
import { HomePage } from '../pages/Home.page';
import { MyNotePage } from '../pages/MyNote.page';

export const AppRoute = () => {
    let element = useRoutes([
        {
            path: '/home',
            element: <HomePage />,
        },
        {
            path: '/myNote',
            element: <MyNotePage />,
        }
    ]);
    
    return element;
}
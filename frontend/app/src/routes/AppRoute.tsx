import React from 'react';
import { useRoutes } from 'react-router-dom';
import { TopPage } from '../pages/Top.page';

export const AppRoute = () => {
    let element = useRoutes([
        {
        path: '/',
        element: <TopPage />,
        }
    ]);
    
    return element;
}
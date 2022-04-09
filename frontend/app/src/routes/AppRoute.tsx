import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Header } from '../components/organisms/header/Header';

export const AppRoute = () => {
    let element = useRoutes([
        {
        path: '/',
        element: <Header />,
        }
    ]);
    
    return element;
}
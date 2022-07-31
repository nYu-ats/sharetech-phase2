import { useRoutes } from 'react-router-dom';
import { HomePage } from '../pages/Home.page';
import { MyNotePage } from '../pages/MyNote.page';
import { TechNoteDetail } from '../pages/TechNoteDetail.page';

export const AppRoute = () => {

    let element = useRoutes([
        {
            path: '/home',
            element: <HomePage />,
        },
        {
            path: '/techNote/me/:id',
            element: <MyNotePage />,
        },
        {
            path: '/techNote/:id',
            element: <TechNoteDetail />,
        }
    ]);

    return element;
}
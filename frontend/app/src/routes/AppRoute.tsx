import { useRoutes } from 'react-router-dom';
import { HomePage } from '../pages/Home.page';
import { MyNotePage } from '../pages/MyNote.page';
import { MyNoteBrowsePage } from '../pages/MyNoteBrowse.page';

export const AppRoute = () => {

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
            path: '/myNoteBrowse/id=:id',
            element: <MyNoteBrowsePage />,
        }
    ]);

    return element;
}
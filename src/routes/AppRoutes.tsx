import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';

const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
        ],
    },
    {
        path: '*',
        element: <>404 - Not Found.</>,
    },
]);

export default AppRoutes;

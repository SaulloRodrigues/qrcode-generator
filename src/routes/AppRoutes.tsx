import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Contact from '@/pages/Contact/Contact';

const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
        ],
    },
    {
        path: '*',
        element: <>404 - Not Found.</>,
    },
]);

export default AppRoutes;

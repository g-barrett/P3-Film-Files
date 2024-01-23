import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Signup from './pages/Signup';
import MyMovies from './pages/MyMovies';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            }, {
                path: '/reviews',
                element: < Reviews />
            }, {
                path: '/signup',
                element: <Signup />
            }, {
                path: '/mymovies',
                element: <MyMovies />
            }
        ]
    }
])



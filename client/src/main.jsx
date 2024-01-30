import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/Error.jsx';
// import AddProfile from './pages/AddProfile.jsx';
// import Signup from './pages/Signup.jsx';
// import Login from './pages/Login.jsx';
import Movie from './pages/Movie.jsx';
import Review from './pages/Review.jsx';
// import Signup from './pages/Signup.jsx';
// import AddProfile from './pages/AddProfile.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
       index: true,
       element: <Movie />
      },
    //   {
    //    path: '/login',
    //    element: <Login />
    //  },
      // {
      //   path: '/profiles/:profileId',
      //   element: <AddProfile />
      // },
      // {
      //   path: '/movies',
      //   element: <AddProfile />
      // },
      // {
      //   path: '/movies',
      //   element: <Movie />
      // },
      {
        path: '/review',
        element: <Review />
      },
      // {
      //   path: '/signup',
      //   element: <Signup />
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

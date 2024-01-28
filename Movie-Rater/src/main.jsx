import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/Error.jsx';
// import Signup from './pages/Signup.jsx';
// import AddProfile from './pages/AddProfile.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <Signup />
      // },
      // {
      //   path: '/profiles/:profileId',
      //   element: <AddProfile />
      // },
    ]
  },
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

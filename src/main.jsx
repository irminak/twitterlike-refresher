import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './routes/RootLayout.jsx';
import Posts, { loader as postsLoader } from './routes/Posts.jsx';
import NewPost, { action as newPostAction } from './routes/NewPost.jsx';
import { loader as postDetailsLoader } from './routes/PostDetails.jsx';
import PostDetails from './routes/PostDetails.jsx';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Posts />,
                loader: postsLoader,
                children: [
                    {
                        path: '/create-post',
                        action: newPostAction,
                        element: <NewPost />,
                    },
                    {
                        path: '/:id',
                        loader: postDetailsLoader,
                        element: <PostDetails />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

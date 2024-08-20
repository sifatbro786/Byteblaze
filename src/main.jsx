import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Bookmarks from './pages/Bookmarks';
import Root from './layout/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/blogs',
        element: <Blogs/>,
        loader: () => fetch('https://dev.to/api/articles?per_page=21&top=7')
      },
      {
        path: '/bookmarks',
        element: <Bookmarks/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
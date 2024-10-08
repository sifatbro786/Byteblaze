import { createBrowserRouter } from "react-router-dom";
import Root from '../layout/Root';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Blog from '../pages/Blog';
import Bookmarks from '../pages/Bookmarks';
import Content from './../components/Content';
import Author from './../components/Author';
import ErrorPage from './../components/ErrorPage';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [

        {
          index: true,
          element: <Home/>
        },
        {
          path: '/blogs',
          element: <Blogs/>,
          loader: () => fetch('https://dev.to/api/articles?per_page=22&top=5')
        },

        //! Nested Routing:
        {
          path: '/blog/:id',
          element: <Blog/>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children: [
            {
              index: true,
              element: <Content/>,
              loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
            },
            {
              path: 'author',
              element: <Author/>,
              loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
            }
          ]
        },

        {
          path: '/bookmarks',
          element: <Bookmarks/>
        },
        
      ]
    }
])
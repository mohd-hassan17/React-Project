import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import CreatePost from "./components/CreatePost.jsx"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import  PostList  from './components/PostList.jsx'

const router = createBrowserRouter([
  { path : "/",
     element: <App/>,
    children:[
      {path : "/", element: <PostList/>},
  {path : "/create-post", element: <CreatePost> </CreatePost>},
    ],
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)

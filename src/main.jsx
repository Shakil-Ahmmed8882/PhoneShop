import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// react route 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Layout/Home/Home';
import Layout from './Layout/Layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        loader: ()=> fetch('/my-project/public/Data/Json/data.json'),
        element:<Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

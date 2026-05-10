import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root'
import Home from './assets/component/Home'
import Time from './assets/component/Time'


const router = createBrowserRouter([
  {path:'/',
    Component:Root,
    children:[
      {index:true,Component:Home},
      
      {path:'time',Component:Time},
      
    ]
  },
  

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

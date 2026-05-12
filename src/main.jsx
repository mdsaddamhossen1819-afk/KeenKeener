import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root';
import Errorpage from './Errorpage'
import Home from './assets/component/Home/Home';
import Time from './assets/component/time/Time';
import Stats from './assets/component/stats/Stats';
import Homedetails from './assets/component/details/Homedetails';



const router = createBrowserRouter([
  {path:'/',
    Component:Root,
    children:[
    {index:true,Component:Home},
    {path:"/time",Component:Time},
    {path:"/stats",Component:Stats},
    {path:"/homedetails/:id",Component:Homedetails,
      loader:()=>fetch('/friends.json').then(res=>res.json())
    }
    ],
    errorElement:<Errorpage></Errorpage>,
  },
  

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

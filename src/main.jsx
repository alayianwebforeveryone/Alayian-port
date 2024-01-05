import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  
} from "react-router-dom";

// components 
import Land from './Components/Home/Land.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Services from './Components/Services/Services.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path = "" element = {<App/>}>
    <Route  index element = {<Land/>} />
    <Route path = 'services' element = {<Services/>} />
    <Route path = 'portfolio' element = {<Portfolio/>} />
    <Route path = 'contact' element = {<Contact/>} />
    <Route path = 'about' element = {<About/>} />

  </Route> 
  
 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)

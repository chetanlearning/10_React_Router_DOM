
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Leetcode from './components/Leetcode/Leetcode.jsx'
import {Leetcodeinfo} from './components/Leetcode/Leetcode.jsx'
// Remember that the Leetcodeinfo is imported as inside curly brackets 

{/* Here we used to render <App/> inside StrictMode but here when are using react-router-dom 
  we will use RouterProvider which takes props for example router
  so we need to create router here 
  there are two methods we will see to create router  */}

  {/** One thing more that we can follow traditional methord that each time we navigate to different links then our header and footer will get load each time but
    it is not the optimized way so we will use optimized way that is creating file layout.jsx inside src folder
    Hence now first go to layout.jsx */}




{/* let us see the method and syntax to create it */}
{/* createBrowserRouter() it is a method which takes array 
  The array contains list of all objects which we need*/}

  


  {/** '/' this slash is a top level element inside which nesting will happen */}
// const router = createBrowserRouter([
//   {
    
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path : "", 
//         element : <Home/>
//       } ,
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//The below is the another approach for defining the routes to any component 
const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element = {<Home/>} />
      <Route path='about' element = {<About/>} />
      <Route path='contact' element = {<Contact/>} />
      <Route path='user/:userid' element = { <User/> } />
      <Route 
      loader = { Leetcodeinfo }
      path='leetcode' 
      element = { <Leetcode/> } 
      />
    </Route>
  )
)

// Whatever we have written after ':' column 
// It will be considered as variable and this can be used in the component so go to User component 

// Three Important steps to define the route 
// 1. Create the component in compoent folder
// 2. Give its text on header or anywhere with defining path in to=""
// 3. The same path now should be added in the main.jsx file to show what should be rendered on going to that path 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

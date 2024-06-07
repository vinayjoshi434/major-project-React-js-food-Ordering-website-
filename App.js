import React from 'react'
import ReactDom from 'react-dom/client'; 
import Navbar from './src/Components/Navbar-folder/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from './src/Components/Body-folder/Body';
import StoreContextProvider from './src/Context/StorecontextProvider';
import Footer from './src/Components/Footer-folder/Footer';
import Login from './src/Components/LogIN-folder/Login';
import Register from './src/Components/Register-folder/Register';
import About from './src/Components/About-folder/About';
import Contact from './src/Components/contact-folder/Contact';
import Cart from './src/Components/Cart-folder/Cart';

    const AppLayout = () => {
        return (
           <div className="App">
             
              <Navbar />
              <Outlet/>
              <Footer/>
     
           </div>
        )
     }
     const appRouter = createBrowserRouter([
      {
         path: "/",
         element: <AppLayout />,
         children: [
           
            {
               path:'/',
               element:<Body/>

            },
            {
               path:'/login-signup',
               element:<Login/>
            },
            {
               path:'/Register',
               element:<Register/>
            },
            {
               path:"/login",
               element:<Login/>
            },
            {
               path:'/about',
               element:<About/>
            },
            {
               path:'/contact',
               element:<Contact/>
            },
            {
               path:'/cart',
               element:<Cart/>
            }

   
           
           
            
   
         ]
      },
   ]);
   
   
     const target = ReactDom.createRoot(document.getElementById("root"));

target.render(<StoreContextProvider><RouterProvider router={appRouter}/></StoreContextProvider>);


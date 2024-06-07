import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./navbar.css"
import { LOGO_URL } from '../../utils/constants.js'
import {assets} from "../../utils/assets.js"



const Navbar = () => {

   const[listclassName,setlistclassName]=useState("className");



   return (
     <nav className="Navbar-cont">
             <div className="left">
               <img src={LOGO_URL}  alt=""></img>
             </div>
             <div className="middle">
               <ul>
               <Link to="/"><li><i className="fa-solid fa-house-chimney-crack" style={{color: "#634fa1"}}></i></li></Link>
                  <Link to="/about" style={{textDecoration:"none"}}> <li><i className="fa-solid fa-circle-info fa-lg" style={{ color: "#74C0FC" }}></i> About</li></Link>
                  <Link to="/contact" style={{textDecoration:"none"}}><li><i className="fa-regular fa-id-badge fa-lg" style={{ color: "#141291" }}></i> Contact</li></Link>
                  <li><Link to="/login-signup"><button type="button">Sign In</button></Link></li>
               </ul>
             </div>
             <div className="right">
                   <Link to="/cart"><img src={assets.basket_icon}  alt="" /></Link>
                   <img src={assets.search_icon} alt="" />

             </div>

     </nav>



   )



}

export default Navbar
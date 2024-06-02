import {useState,UseEffect} from 'react';
import './body.css';
import {assets} from '../../utils/assets.js';
import Header from '../Header-folder/Header.js';
import Catagory from '../Catagory-folder/Menu.js';
import Fooddisplay from '../Food-Display-folder/Food-display.js';
import Footer from '../Footer-folder/Footer.js';
import About from '../About-folder/About.js';


const Body=()=>{
    const[category ,setcategory]=useState("All")
    return(
 <div className="body">
      <Header/>
  
       <Catagory category={category} setcategory={setcategory}/>
       <Fooddisplay  category={category }/>
 
 </div>





    )
}

export default Body;
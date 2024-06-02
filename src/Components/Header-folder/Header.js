import { useState } from "react";
import './header.css';
import {assets} from '../../utils/assets.js';





const Header=()=>{
return(
    <div className='header-cont'>
    <div className='header-content'>
       <strong>Order your favourite food here</strong>
       <button type="button">Show menu</button>

    </div>
</div>




)
}

export default Header;
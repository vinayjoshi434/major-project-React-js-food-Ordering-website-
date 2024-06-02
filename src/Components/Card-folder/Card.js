import { useContext, useState } from "react"
import { assets } from '../../utils/assets'
import './Card.css'
import Storecontext from "../../Context/Storecontext";
const Card = (props) => {
   const { items } = props;

   const { name, _id, image, price, description, category } = items;

const {addTocart,removeFromcart,cartitems}=useContext(Storecontext)




  // const [icount, seticount] = useState(0);
  



   return (
      <div className="r-card">

         <img src={image}></img>
         {
            !cartitems[_id] ? <i className="fa-regular fa-square-plus fa-lg" id="additem" onClick={() => {
             
               addTocart(_id)
            }} style={{ color: "#0273ca" }}></i>
               :
               <div className="item-count-cont">
                  <i className="fa-solid fa-minus " id="minus" onClick={() => {
                   
                     removeFromcart(_id)
                  }} style={{ color: "#3aa182" }}></i>
                  <p><strong>{cartitems[_id]}</strong></p>
                  <i className="fa-solid fa-plus " id="plus" onClick={() => {
                     
                     addTocart(_id)
                  }} style={{ color: "#864def" }}></i>
               </div>



         }
         <div className="card-d">
            <div className="name">
               <b>{name}</b>
            </div>
            <div className="card-subtextcont">
               <div className="star-svg">
                  <i className="fa-solid fa-star fa-fade" style={{ color: "#FFD43B" }}></i>
               </div>


            </div>
            <div className="res-description">
               <div className="description">
                  {description}


               </div>

            </div>


         </div>



      </div>


   )
}




export default Card
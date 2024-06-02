import { useContext } from 'react';
import './fooddisplay.css'
import Storecontext from '../../Context/Storecontext';
import StoreContextProvider from '../../Context/StorecontextProvider';
import Card from '../Card-folder/Card'


const Fooddisplay = ({category,setcategory}) => {

  const {food_list}  = useContext(Storecontext);

  return (
    <div className='food-display'>
      <div className="tagline">
      <strong>Top dishes near Your</strong>
      </div>   
      
      {
           food_list.map((item ,index)=>{
            if(category==="All"  || category===item.category)
                     return   <Card items={item} key={index}/> 
            
           })



      }
     

      
    </div>




  )



}
export default Fooddisplay;
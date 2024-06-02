import Storecontext from "./Storecontext";
import { food_list } from "../utils/assets"
import { useEffect, useState } from "react";


const StoreContextProvider = ({ children }) => {

    const [cartitems, setcartitems] = useState({})

    const addTocart = (itemid) => {
        if (!cartitems[itemid]) {
            setcartitems({ ...cartitems, [itemid]: 1 })
        }
        else {
            setcartitems({ ...cartitems, [itemid]: cartitems[itemid] + 1 })
        }
    }

    const removeFromcart=(itemid)=>{
setcartitems({...cartitems,[itemid]:cartitems[itemid]-1})
    }

    useEffect(()=>{
        console.log(cartitems)}
        ,[cartitems])




    const context = {
        food_list,
        addTocart,
        removeFromcart,
        cartitems,
        setcartitems

    };



    return (
        <Storecontext.Provider value={context}>
            {children}
        </Storecontext.Provider>
    )
}

export default StoreContextProvider;
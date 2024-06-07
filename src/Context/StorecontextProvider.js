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

    const removeFromcart = (itemid) => {
        setcartitems({ ...cartitems, [itemid]: cartitems[itemid] - 1 })
    }


    const getTotalcartAmount = () => {
        let totalAmount = 0;
        for (const item in cartitems) {

            if (cartitems[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item);
                totalAmount += iteminfo.price * cartitems[item];
            }
        }
return totalAmount

    }
    useEffect(() => {
        console.log(cartitems)
    }
        , [cartitems])




    const context = {
        food_list,
        addTocart,
        removeFromcart,
        cartitems,
        setcartitems,
        getTotalcartAmount

    };



    return (
        <Storecontext.Provider value={context}>
            {children}
        </Storecontext.Provider>
    )
}

export default StoreContextProvider;
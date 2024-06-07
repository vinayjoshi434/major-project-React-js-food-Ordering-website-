import { useContext } from 'react';
import './cart.css';
import Storecontext from '../../Context/Storecontext';
import { assets, food_list } from '../../utils/assets';

const Cart = () => {

    const { cartitems, setcartitems, removeFromcart, food_list ,getTotalcartAmount } = useContext(Storecontext)


    return (
        <div className="cart">
            <div className="cartitems">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>total</p>
                    <p>remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((item, index) => {
                        if (cartitems[item._id] > 0) {
                            return (
                                <>
                                    <div className="cart-items-title  cart-items-item">

                                        <img src={item.image}></img>
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                        <p>{cartitems[item._id]}</p>
                                        <p>{item.price * cartitems[item._id]}</p>
                                        <p className='cross' onClick={() => {
                                            removeFromcart(item._id)
                                        }}><b>X</b></p>
                                    </div>
                                    <hr />
                                </>
                            )
                        }
                    }
                    )
                }
                <div className="cart-bottom">
                    <div className="cart-total">
                        <h2 >Cart Totals</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>{getTotalcartAmount()}</p>
                            </div>

                            <div className="cart-total-details">
                                <p>Delivery fee</p>
                                <p>{50}</p>
                            </div>

                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>    {getTotalcartAmount() + 50}</b>
                            </div>
                            

                        </div>
                        <button>
                                Proceed to checkOut
                            </button>

                    </div>
                </div>






            </div>
        </div>
    )
}


export default Cart;
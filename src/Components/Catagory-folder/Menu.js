import { menu_list } from '../../utils/assets.js';
import './menu.css'
const Catagory = ({ category, setcategory }) => {
    return (
        <div className='menu'>
            <h2 className="heading">Explore Menu</h2>
            <div className='tagline-cont'>
                <p><strong>Unleash Your Palate: Explore Our Menu Delights</strong></p>
                <div className="scroll-cont">
                    <button type="button" >
                        <i className="fa-solid fa-angle-left" style={{ color: "#74C0FC" }} 
                        onClick={(e)=>{
                           const divitem= document.querySelector('.menu-item-cont')
                           divitem.scroll({ left:-500,behavior:"smooth"})
                           }}>
                        </i>
                    </button>
                    <button type="button">
                        <i className="fa-solid fa-angle-right" style={{ color: "#74C0FC" }}  onClick={(e)=>{
                           const divitem= document.querySelector('.menu-item-cont');
                           divitem.scroll({left:1000,behavior:"smooth"})
                           console.log("hello")
                        }}>
                       
                        </i>
                    </button>
                </div>
            </div>
            <div className='menu-item-cont' id="menu-item-cont">
                {
                    menu_list.map((item, index) => {
                        return (
                            <div onClick={() => {
                                const state = category === item.menu_name ? "All" : item.menu_name
                                setcategory(state)
                                console.log(state);
                            }} className="menu-item" key={index}>
                                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                                <strong>{item.menu_name}</strong>
                            </div>

                        )
                    })




                }


            </div>

            <hr />


        </div>
    )
}
export default Catagory;

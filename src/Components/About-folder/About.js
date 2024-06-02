import './about.css';
import { Aboutbanner } from '../../utils/constants';
import { Link } from 'react-router-dom';

const About=()=>{
    return(
         <div className="about-cont">
                       <div className='main'>
                        
                        <img src={Aboutbanner} />
                        <div className="Ab-text">
                                     <strong>About US !</strong>
                                     <p>Experience the best of Indian cuisine with . We bring authentic Indian flavors straight to your door. From spicy curries to aromatic biryanis, enjoy fresh, high-quality meals from top-rated local restaurants with just a few clicks. Discover the rich taste of India today!</p>
                                    <Link to="/contact"> <button className="ct-btn" type="button">Contact us</button></Link>
                              
                        </div>
                       </div>



         </div>



    )
}
export default About;
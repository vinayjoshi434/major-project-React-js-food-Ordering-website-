
import './footer.css'

import { LOGO_URL } from '../../utils/constants.js'

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-cont">

        <div className="footer-left">
          <img src={LOGO_URL} alt="" />
          <div className="col">
            <strong>Savor India's Flavors, Delivered to Your Doorstep</strong>
            <div className="media-cont">
              <i className="fa-brands fa-facebook-f fa-fade fa-xl" style={{ color: " #3c8bc8" }}></i>
              <i className="fa-brands fa-instagram fa-fade fa-xl" style={{ color: "#7351d6" }}></i>
              <i className="fa-brands fa-linkedin fa-fade fa-xl" style={{ color: "#2cce9d" }}></i>
            </div>
          </div>

        </div>
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>

        </div>
        <div className="footer-right">
              <i><strong>Get In Touch</strong></i>
              <p>Address :-  "Xyz" </p>
             <strong>Email:-" ---Xyz@gmail.com "</strong>


        </div>



      </div>
    </>
  )

}
export default Footer;

import { useState, useEffect } from 'react'
import './contact.css'
import { contactbanner } from '../../utils/constants'
const Contact = () => {
    return (
        <div className='Contact'>
            <div className="contact-cont">
                <div className='cc-left'>
                    <img src={contactbanner} alt="" />
                    <div className="banner-overflow">
                        "We're here to help! Reach out to us with any questions, feedback, or concerns, and let us make your dining experience even better.
                    </div>
                </div>

                <div className="cc-right">
                    <strong>Get in Touch !</strong>
                    <hr />
                    <form action="#" className="form">
                        <div className="cont-input-feild">
                            <i className="fa-solid fa-user fa-lg" style={{ color: "#318dd3" }}></i>
                            <input type="text" placeholder="Enter your Name" required />
                        </div>
                        <div className="cont-input-feild" >
                            <i className="fa-solid fa-envelope fa-lg" style={{ color: " #0de3a3" }}></i>
                            <input type="Email" placeholder="Your Email" required />
                        </div>
                        <textbox className="text-box" type="text"></textbox>
                    </form>
                </div>

            </div>



        </div>

    )
}
export default Contact;
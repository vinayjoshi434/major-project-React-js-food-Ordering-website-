import React from 'react'
import './login.css'
import { logincoverpic } from '../../utils/constants'
import { assets } from '../../utils/assets'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className="loginpage">
            <div className="cont">
                <div className="cont-left">
                    <img src={logincoverpic} alt="" />
                    <p className='slogan'>Hungry? We've Got You Covered.</p>
            
                </div>


                <div className="cont-right">
                    <div className='login-cont'>
                        <div className="toggle">
                            <Link to='/login'><button type="button"><strong>Login</strong></button></Link>
                            <Link to='/Register'><button type="button"><strong>Register</strong></button></Link>
                        </div>
                        <div className="option">

                            <strong>Sign In Using :-</strong>
                            <div className="media">
                                <i className="fa-brands fa-linkedin fa-lg" style={{ color: "#2086d5" }}></i>
                                <i className="fa-brands fa-google fa-lg" style={{ color: "#0b61a2" }}></i>
                                <i className="fa-brands fa-facebook fa-lg" style={{ color: "#572ed1" }}></i>
                                <i className="fa-brands fa-github fa-lg" style={{ color: "#0ed89b" }}></i>
                            </div>
                            <strong>oR :-</strong>
                            <form action="" className="form-box">
                                <div className='form-feild'>

                                    <div className="input-feild1">
                                        <i className="fa-solid fa-envelope fa-xl" style={{ color: "#1873b9" }}></i>
                                        <input type="Email" placeholder='Email' required />
                                    </div>

                                    <div className="input-feild2">
                                        <i className="fa-solid fa-lock fa-xl" style={{ color: "#FFD43B" }}></i>
                                        <input type="password" placeholder='Enter Password' className="input-feild" required />
                                    </div>
                                    <div className="link">
                                        <div className="checkbox-div">
                                            <input type="checkbox" placeholder='Enter Password' className="checkbox" required />
                                            <strong>Remember Me</strong>

                                           
                                        </div>
                                        <strong className="forget-pass">Forget Password</strong>
                                    </div>
                                  <button type="submit" className="login-btn"> Log In</button> 
                                </div>
                            </form>



                        </div>


                    </div>
                </div>


            </div>




        </div>
    )
}

export default Login
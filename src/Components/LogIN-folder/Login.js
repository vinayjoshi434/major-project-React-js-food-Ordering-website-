import React, { useState } from "react";
import "./login.css";
import { logincoverpic } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [crediential, setCrediential] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const onchange = (e) => {
    setCrediential({ ...crediential, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //we also send the email and password as a body we mentioned in thunder client:
      body: JSON.stringify({
        email: crediential.email,
        password: crediential.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    //if success is not true:
    if (json.success) {
      // save the token and redirect:
      //saving the token:
      localStorage.setItem("token", JSON.stringify(json.authToken));
      //this navigate help me to directly go to the home page:
      navigate("/");
      toast.success("Login Successfully");
    } else {
      toast.error("Invalid Details");
    }
  };

  return (
    <div className="loginpage">
      <ToastContainer />
      <div className="cont">
        <div className="cont-left">
          <img src={logincoverpic} alt="" />
          <p className="slogan">Hungry? We've Got You Covered.</p>
        </div>

        <div className="cont-right">
          <div className="login-cont">
            <div className="toggle">
              <Link to="/login">
                <button type="button">
                  <strong>Login</strong>
                </button>
              </Link>
              <Link to="/Register">
                <button type="button">
                  <strong>Register</strong>
                </button>
              </Link>
            </div>
            <div className="option">
              <strong>Sign In Using :-</strong>
              <div className="media">
                <i
                  className="fa-brands fa-linkedin fa-lg"
                  style={{ color: "#2086d5" }}
                ></i>
                <i
                  className="fa-brands fa-google fa-lg"
                  style={{ color: "#0b61a2" }}
                ></i>
                <i
                  className="fa-brands fa-facebook fa-lg"
                  style={{ color: "#572ed1" }}
                ></i>
                <i
                  className="fa-brands fa-github fa-lg"
                  style={{ color: "#0ed89b" }}
                ></i>
              </div>
              <strong>oR :- </strong>
              <form onSubmit={handleSubmit} className="form-box">
                <div className="form-feild">
                  <div className="input-feild1">
                    <i
                      className="fa-solid fa-envelope fa-xl"
                      style={{ color: "#1873b9" }}
                    ></i>
                    <input
                      type="Email"
                      placeholder="Email"
                      name="email"
                      onChange={onchange}
                      required
                    />
                  </div>

                  <div className="input-feild2">
                    <i
                      className="fa-solid fa-lock fa-xl"
                      style={{ color: "#FFD43B" }}
                    ></i>
                    <input
                      type="password"
                      name="password"
                      onChange={onchange}
                      placeholder="Enter Password"
                      className="input-feild"
                      required
                    />
                  </div>
                  <button type="submit" className="login-btn">
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

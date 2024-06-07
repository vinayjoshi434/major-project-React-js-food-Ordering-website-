import React, { useState } from "react";
import "./register.css";
import "../LogIN-folder/Login.css";
import { logincoverpic } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Register = (props) => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Using this function to monitor onchange:
  const onchange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Destructure the credential object
    const { firstName, lastName, email, password } = credential;

    // Validate fields
    if (!firstName || !lastName || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, password }),
        }
      );

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const json = await response.json();

      // Check if the success property is true
      if (json.success) {
        // Save the token and redirect
        localStorage.setItem("token", json.authToken);
        navigate("/login");
        toast.success("User with this email created successfully");
      } else {
        toast.error("Failed to create user: " + json.message);
        toast.error("Failed to create user: " + eor.message);
      }
    } catch (error) {
      toast.error("Invalid Details: " + error.message);
    }
  };

  const handleIconClick = (url) => {
    window.location.href = url;
  };


  return (
    <div className="loginpage">
      <ToastContainer />
      <div className="cont">
        <div className="cont-left">
          <img src={logincoverpic} alt="Cover" />
          <p className="slogan">Hungry? We've Got You Covered.</p>
        </div>

        <div className="cont-right">
          <div className="login-cont">
            <div className="option">
              <strong>Sign In Using :-</strong>
              <div className="media">
                <i
                  className="fa-brands fa-linkedin fa-lg"
                  style={{ color: "#2086d5" }}
                  onClick={() => handleIconClick("https://www.linkedin.com")}
                ></i>
                <i
                  className="fa-brands fa-google fa-lg"
                  style={{ color: "#0b61a2" }}
                  onClick={() => handleIconClick("https://www.google.com")}
                ></i>
                <i
                  className="fa-brands fa-facebook fa-lg"
                  style={{ color: "#572ed1" }}
                  onClick={() => handleIconClick("https://www.facebook.com")}
                ></i>
                <i
                  className="fa-brands fa-github fa-lg"
                  style={{ color: "#0ed89b" }}
                  onClick={() => handleIconClick("https://www.github.com")}
                ></i>
              </div>
              <strong>oR :-</strong>
              <form action="" className="form-box">
                <div className="form-feild">
                  <div className="input-feild1">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="input-feild"
                      onChange={onchange}
                      required
                    />
                  </div>
                  <div className="input-feild1">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="input-feild"
                      onChange={onchange}
                      required
                    />
                  </div>

                  <div className="input-feild1">
                    <i
                      className="fa-solid fa-envelope fa-xl"
                      style={{ color: "#1873b9" }}
                    ></i>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
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
                      placeholder="Enter Password with 5 character"
                      className="input-feild"
                      onChange={onchange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="login-btn"
                    onClick={handleClick}
                  >
                    Register
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

export default Register;

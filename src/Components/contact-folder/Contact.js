import React, { useState } from "react";
import "./contact.css";
import { contactbanner } from "../../utils/constants";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        navigate("/")
        if (!name || !email || !message) {
            toast.error("Please fill in all fields");
            return;
        }

        try {
            const response = await fetch("https://formsubmit.co/ajax/bishtjagdish1549@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                toast.error("Failed to send message. Please try again later.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="Contact">
            <ToastContainer />
            <div className="contact-cont">
                <div className="cc-left">
                    <img src={contactbanner} alt="Contact Banner" />
                    <div className="banner-overflow">
                        "We're here to help! Reach out to us with any questions, feedback, or concerns, and let us make your dining experience even better."
                    </div>
                </div>
                <div className="cc-right">
                    <strong>Get in Touch !</strong>
                    <hr />
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="cont-input-feild">
                            <i className="fa-solid fa-user fa-lg" style={{ color: "#318dd3" }}></i>
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="cont-input-feild">
                            <i className="fa-solid fa-envelope fa-lg" style={{ color: " #0de3a3" }}></i>
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="cont-input-feild">
                            <textarea
                                className="text-box"
                                placeholder="Your Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                cols={30}
                                rows={3}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" onClick={handleSubmit} className="login-btn">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

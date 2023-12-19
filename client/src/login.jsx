import React, { useState } from "react";
import './login.css'

const LoginSignup = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? (
                    <>
                        <div className="input">
                            <img src="email.png" alt=""/>
                            <input type="email" placeholder="Email-Id" />
                        </div>
                        <div className="input">
                            <img src="password.png" alt=""/>
                            <input type="password" placeholder="Password" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="input">
                            <img src="email.png" alt=""/>
                            <input type="email" placeholder="Email-Id" />
                        </div>
                        <div className="input">
                            <img src="password.png" alt=""/>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="input">
                            <img src="password.png" alt=""/>
                            <input type="password" placeholder="Confirm-Password" />
                        </div>
                    </>
                )}
            </div>
            {/* <div className="forgot-password">Lost Password?<span>click here</span></div> */}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction('Sign Up')}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction('Login')}}>Login</div>
            </div>
        </div>
    );
};

export default LoginSignup;


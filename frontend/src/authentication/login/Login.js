import React from "react";
import './login.css';

const Login = () => {
    const goHome = () => {
        window.location.href = "/home";
    }
    return (
        <div className="loginPage">

            <div className="form">
                <div className="header d-flex">
                    <span className="vl"></span>
                    <h3>manage courses</h3>
                </div>

                <div className="login-header">
                    <h3>sing in</h3>
                    <p className="fw-lighter text-center">Enter your credentials to access your account</p>
                </div>

                <div className="label">
                    <label>Email</label>
                </div>
                <div className="input">
                    <input type="text" placeholder="Enter your email"/>
                </div>

                <div className="label">
                    <label>Password</label>
                </div>

                <div className="input">
                    <input type="password" placeholder="Enter your password" />
                </div>

                <div className="loginButton">
                    <button className="rounded" onClick={goHome}>SIGN IN</button>
                </div>

                <div className="forgotPassword">
                    <span>Forgot your password?</span>
                    <span><a href="#"> Reset Password</a></span>
                </div>
            </div>
        </div>
    )
}


export default Login;
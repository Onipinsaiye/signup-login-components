import React, {Component} from "react"

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import "../Styles.css"

const linkStyle ={
    color: "blue"

}

const signupContainer = {
    fontFamily: " 'Poppins', sans-serif",
    marginBottom: "30px"
}

function Signup(){
    return(
        <div style={signupContainer} className="signup-container">
            <div className="signup-text-container">
                <br />
                <h3>Silicon verse</h3>

                <h2>Let's Get Started</h2>
            </div>
            <div className="signup-form-container">
                <form action="/signup" method="post"> <br />
                    <h2>Get Started <hr /> </h2>
                    <input name="name" type="text" placeholder="Name" /><FontAwesomeIcon icon={faUser} className="icon" /> <br /><br />
                    <input name="email" type="email" placeholder="Email" /><FontAwesomeIcon icon={faEnvelope} className="icon" /> <br /><br />
                    <input name="password" type="text" placeholder="Password" /><FontAwesomeIcon icon={faLock} className="icon" /> <br /><br />
                    <input name="re-enter-password" type="text" placeholder="Re-enter password" /><FontAwesomeIcon icon={faLock} className="icon" /> <br />
                    <button type="submit" name="submitBtn">Sign up</button> <br />
                    <p>Already have an account?<a style={linkStyle} href="/login">Login</a></p>
                </form> 
            </div>
        </div>
    )
}

export default Signup;
import React from "react"
import './index.css'

function Body(){
    return(
    <main className="content">
        <section>
        <p id="companyDescription">Experience campus convenience in 
           style with EasyExit—where swift issue,
           approval, and gatepass verification
           meet effortlessly!</p>

         <div class="button-container">
        <a href="#login" class="button" id="loginButton">LOGIN</a>
        <a href="#signup" class="button" id="signupButton">SIGN UP</a>
        </div>
        </section>

     <img src = "image.jpg" alt="exit-pic" className="exit-pic" />
    </main>
    )
}

export default Body
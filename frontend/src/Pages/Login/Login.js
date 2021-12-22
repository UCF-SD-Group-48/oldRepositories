import React from 'react';
import "./login.css";

function Login() {
    return (

        <div className='login-page'>
            <title>Login</title>


            <div className="creds">
                
                <label name="fName">First Name:</label> <br/>
                <input type="text" placeholder="Richard"></input> <br/>

                <label name="lName">Last Name:</label> <br/>
                <input type="text" placeholder="Morand"></input> <br/>

                <label name="phone">Phone Number:</label> <br/>
                <input type="text"></input> <br/>

                <label name="email">Email:</label> <br/>
                <input type="text"></input> <br/>

                <label name="pWord">Password:</label> <br/>
                <input type="text"></input> <br/>

                <button name="login">Login</button> 
                <a href="#" style={{fontSize: 10}}>Forgot Password?</a> <br/>
            </div>
        
        </div>
    )
}


export default Login;

import React from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
    const handleSignup = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }
    return (
        <main className="content">
        <div className="login-box">
            <h2>Sign-up</h2>
            <form>
                <div className="form-flex-div">
                    <label htmlFor="First Name">First Name:</label>
                    <input type="First Name" name="First Name" id="First Name" placeholder="First Name"/>
                </div>
                <div className="form-flex-div">
                    <label htmlFor="Last Name">Last Name:</label>
                    <input type="Last Name" name="Last Name" id="Last Name" placeholder="Last Name"/>
                </div>
                <div className="form-flex-div">
                    <label htmlFor="Email">E-mail Address:</label> 
                    <input type="email" name="Email" id="Email" action="#" placeholder="Email"/>
                </div>
                <div className="form-flex-div">
                    <label htmlFor="Password">Password:</label>
                    <input type="password" name="Password" id="Password" placeholder="Password"/>
                </div>
                

                 <button onClink={handleSignup} >Submit</button>
                
                 <p className="sign-up-link">
                    <Link to="/login"> Already have an account? Login here!</Link>
                </p>
                 
            </form>
           
        </div>
    </main>
    )
}

export default Signup;
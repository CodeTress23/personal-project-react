import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.target.value)

        const body = {
            username: e.target.username.value,
            password: e.target.password.value
        }
    }
    return (
        <main className="content">
            <div className="login-box">
                <h2>LOGIN</h2>
                    <form>
                        <div className="form-flex-div">
                            <label htmlFor="Email">E-mail Address:</label> 
                            <input type="email" name="Email" id="Email" action="#" placeholder="Email"/>
                        </div>
                        <div className="form-flex-div">
                            <label htmlFor="Password">Password:</label>
                            <input type="password" name="Password" id="Password" placeholder="Password"/>
                        </div>
                        <button onCLick={handleLogin}>Submit</button>
                        <p className="sign-up-link">
                            <Link to= "/signup">Sign Up</Link>
                        </p>
                    </form>
           
            </div>
        </main>
    )
};

export default Login;
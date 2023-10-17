import React from 'react';
import loginimage from '../assets/loginform.png';
import { Link } from 'react-router-dom';
import navimage from '../assets/5857560-removebg-preview.png';
import './loginform.css';
import axios from 'axios';

export function Loginform() {

        function handlelogin(event) {
            event.preventDefault()
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
    
            var logindetails = {
                email:email,
                password: password,
            }
            if (email === '') {
                alert("enter the username")
            }
            else if (password === "") {
                alert('enter the password')
            } else {
                axios.post("http://localhost:3005/login", logindetails)
                    .then((res) => {
                        if(res.data.status==="success"){
                        var roll = res.data.roll
                        var id = res.data.id
                        if (roll === "Atmain") {
                            window.location.href = `/Admaindashboard`
                        } else if (roll === 'User') {
                            window.location.href = `/userdashboard`
                        }
                    } else if(res.data.status==='invalid') {
                        alert("your password invalid")
                    }
                    else if(res.data.status==="empty_set"){
                        alert("your username or password invalid")
                    } else if(res.data.status==='error'){
                        alert("contact admin")
                    }
                    })
                    
            }
        }
    

    return (
        <>
            <header className='nav_border'>
                <img src={navimage} />
                <nav className='navbar'>
                    <Link to='/'>Home</Link>
                    <Link to='/register'>Sign up</Link>
                </nav>
            </header>
            <section className='home_page1'>
                <div className='row1'>
                    <div className='home_img image'>
                        <img src={loginimage} />
                    </div>
                    <form onSubmit={handlelogin}>
                        <h1 className='heading'><span>Login</span>  now</h1>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" id='email' required />
                                <div className="underline1"></div>
                                <label for="">email</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="password" id='password' required />
                                <div className="underline1"></div>
                                <label for="">password</label>
                            </div>
                        </div>
                        <div className="form-row submit-btn">
                            <div className="input-data">
                                <div className="inner"></div>
                                <input type="submit" value="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
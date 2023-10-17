import React from 'react';
import './registerpage.css';
import navimage from '../assets/5857560-removebg-preview.png';
import { Link } from 'react-router-dom';
import register from '../assets/register.gif';
import axios from 'axios';

export function Register() {

    function handleregister(event) {
        event.preventDefault()

   
    var name = document.getElementById('name').value;
    var phoneNo = document.getElementById("phoneNo").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var roll = document.getElementById("roll").value;
    var dob = document.getElementById('dob').value;
    var doorno = document.getElementById("doorNo").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var pincode = document.getElementById("pincode").value;
    var address = doorno + city + state;
    console.log(address)
    

    var userdetails = {
        name:name,
        phoneNo:phoneNo,
        email:email,
        password:password,
        roll:roll,
        dob:dob,
        address:address,
        pincode:pincode
    }

    
        if(name === ''){
        alert("Enter The Fields")
    } else {
      
         axios.post("http://localhost:3005/register", userdetails)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("Data Are Not Inserted")
                } else if (res.data.status === "success"){
                    alert("Registration Successfully")
                    window.location.href = `/`;
                   
                }
            })

            document.getElementById('name').value="";
            document.getElementById("phoneNo").value="";
            document.getElementById("email").value="";
            document.getElementById("password").value="";
            document.getElementById("roll").value="";
            document.getElementById('dob').value="";
            document.getElementById("doorNo").value=""
            document.getElementById("city").value="";
            document.getElementById("state").value="";
            document.getElementById("pincode").value="";
        
    }



    }

    return (
        <>
            <header className='nav_border'>
                <img src={navimage} />
                <nav className='navbar'>
                    <Link to='/'>Home</Link>
                    <Link to='/loginpage'>Login</Link>
                </nav>
            </header>
            <section className='home_page row'>
                <div className='row'>
                    <div className='home_img'>
                        <img src={register} />
                    </div>
                    <form onSubmit={handleregister}>
                    {/* <h1>Register Now</h1> */}
                        <h1 className='heading'><span>Signup</span>  now</h1>
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" id='name' placeholder='name' required />
                                <div class="underline"></div>
                                <label for="">Name</label>
                            </div>
                            <div class="input-data">
                                <input type="text" id='phoneNo' required />
                                <div class="underline"></div>
                                <label for="">Phone no</label>
                            </div>
                            <div class="input-data">
                                <input type="text" id='email' required />
                                <div class="underline"></div>
                                <label for="">Email</label>
                            </div>
                        </div>
                        <div class="form-row hidden_box">
                            <div class="input-data ">
                                <input type="password" id='password' required />
                                <div class="underline"></div>
                                <label for="">Password</label>
                            </div>
                            <div class="input-data">
                                <input type="password" id='gender' required />
                                <div class="underline"></div>
                                <label for="">comform Password</label>
                            </div>
                        </div>
                        <div class="form-row">
                           
                            <div class="input-data">
                                <select className='box' id='roll'>
                                    <option>Roll</option>
                                    <option>User</option>
                                    <option>Atmain</option>
                                </select>
                                <div class="underline"></div>
                               
                            </div>
                            <div class="input-data">
                                <input type="date" id='dob' required />
                                <div class="underline"></div>
                            </div>
                        </div>
                        <h2 className='heading'><span>Address</span></h2>
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" id='doorNo' required />
                                <div class="underline"></div>
                                <label for="">Door no, Street</label>
                            </div>
                            <div class="input-data">
                                <input type="phone" id='city' required />
                                <div class="underline"></div>
                                <label for="">City</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" id='state' required />
                                <div class="underline"></div>
                                <label for="">State</label>
                            </div>
                            <div class="input-data">
                                <input type="text" id='pincode' required />
                                <div class="underline"></div>
                                <label for="">Pin code</label>
                            </div>
                        </div>
                        <div class="form-row submit-btn">
                            <div class="input-data">
                                <div class="inner"></div>
                                <input type="submit" value="submit" />
                            </div>
                        </div>
                    </form>

                </div>
            </section>
        </>
    );
}
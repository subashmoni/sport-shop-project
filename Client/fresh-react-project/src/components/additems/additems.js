import React from 'react';
import { Link } from 'react-router-dom';
import navimage from '../assets/5857560-removebg-preview.png';
import './additems.css';
import axios from 'axios';

export function Addproduct() {

    function addproduct(event) {
        event.preventDefault()

   
    var productname = document.getElementById('productname').value;
    var rating = document.getElementById("rating").value;
    var description = document.getElementById("description").value;
    var prize = document.getElementById("prize").value;
    var url = document.getElementById("url").value;
    

    var userdetails = {
        productname:productname,
        rating:rating,
        description:description,
        prize:prize,
        url:url
    }

    
        if(productname === ''){
        alert("Enter The Fields")
    } else {
      
         axios.post("http://localhost:3005/addproduct", userdetails)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("Data Are Not Inserted")
                } else if (res.data.status === "success"){
                    alert("Registration Successfully")
                   
                }
            })

            document.getElementById('productname').value="";
            document.getElementById("rating").value="";
            document.getElementById("description").value="";
            document.getElementById("prize").value="";
            document.getElementById("url").value="";
        
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
            <br/><br/>
            
            <div className="wrapper">
                <div className="title">
                    Add the product
                </div>
                <form onSubmit={addproduct}>
                    
                    <div className="field ">
                        <input type="text" id='productname' required />
                        <label>Product Name </label>
                    </div>
                    <div className="field">
                        <input type="text" id='rating' required />
                        <label>rating</label>
                    </div>
                    <div className="field ">
                        <input type="text" id='description' required />
                        <label>Description </label>
                    </div>
                    <div className="field">
                        <input type="text" id='prize' required />
                        <label>prize</label>
                    </div>
                    <div className="field">
                        <input type="text" id='url' required />
                        <label>url</label>
                    </div>
                    
                    <div className="field">
                        <input type="submit" value="ADD" />
                    </div>
                    <div className="signup-link">
                        <a href="#">choise Now</a>
                    </div>
                </form>
            </div>
        </>
    );
}
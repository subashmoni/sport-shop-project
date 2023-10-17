import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import navimage from '../assets/5857560-removebg-preview.png';
import axios from 'axios';

export function Updateproduct() {

    var { id } = useParams()
    const [productid, setproductid] = useState('');
    const [productname, setproductname] = useState('');
    const [description, setdescription] = useState('');
    const [rating, setrating] = useState('');
    const [prize, setprize] = useState();
    const [url, seturl] = useState('');
    useEffect(() => {
        fetch("http://localhost:3005/displayoneproduct/" + id)
            .then(data => data.json())
            .then((res) => {
                setproductid(res[0].id)
                setproductname(res[0].product_name)
                setdescription(res[0].description)
                setrating(res[0].rating)
                setprize(res[0].prize)
                seturl(res[0].url)


            })
    }, [])
    function updateitem() {
        var productid = document.getElementById('id').value;
        var productname = document.getElementById('productname').value;
        var rating = document.getElementById("rating").value;
        var description = document.getElementById("description").value;
        var prize = document.getElementById("prize").value;
        var url = document.getElementById("url").value;
        var updatedetails = {
            productname: productname,
            description: description,
            rating: rating,
            prize: prize,
            url: url,
            productid: productid
        }
        if (productname === '') {
            alert("Enter the productname")
        }
        else {
            axios.post("http://localhost:3005/update",updatedetails)
                .then((res) => {

                    if (res.data.status === "error") {
                        alert("data are not update")

                    }
                    else if (res.data.status === "success") {
                        alert("data are upadted")
                        window.location.href='/Admaindashboard'
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
                    <Link to='/Admaindashboard'>Dashboard</Link>
                </nav>
            </header>
            <br /><br />

            <div className="wrapper">
                <div className="title">
                    update the product
                </div>
                <form onSubmit={updateitem}>
                <div className="field ">
                        <input type="hidden" id='id' value={productid} onChange={(updatedata)=>{setproductname(updatedata.target.value)}} required />
                        
                    </div>

                    <div className="field ">
                        <input type="text" id='productname' value={productname} onChange={(updatedata)=>{setproductname(updatedata.target.value)}} required />
                        <label>Product Name </label>
                    </div>
                    <div className="field">
                        <input type="text" id='description' value={description} onChange={(updatedata)=>{setdescription(updatedata.target.value)}} required />
                        <label>rating</label>
                    </div>
                    <div className="field ">
                        <input type="text" id='rating' value={rating} onChange={(updatedata)=>{setrating(updatedata.target.value)}} required />
                        <label>Description </label>
                    </div>
                    <div className="field">
                        <input type="text" id='prize' value={prize} onChange={(updatedata)=>{setprize(updatedata.target.value)}} required />
                        <label>prize</label>
                    </div>
                    <div className="field">
                        <input type="text" id='url' value={url} onChange={(updatedata)=>{seturl(updatedata.target.value)}} required />
                        <label>url</label>
                    </div>

                    <div className="field">
                        <input type="submit" value="updated" />
                    </div>
                    <div className="signup-link">
                        <a href="#">choise Now</a>
                    </div>
                </form>
            </div>
        </>
    );
}
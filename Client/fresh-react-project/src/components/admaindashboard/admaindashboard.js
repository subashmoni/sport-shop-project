import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import navimage from '../assets/5857560-removebg-preview.png';

export function Admaindashboard(){

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:3005/getAllproduct")
            .then(res => res.json())
            .then(details => setProduct(details))
    })
    function deleteproduct(){
        alert("product deleted")
    }
    return(
        <>
            <header className='nav_border'>
                <img src={navimage} />
                <nav className='navbar'>
                    <Link to='/'>Home</Link>
                    <Link to='/register'>Sign up</Link>
                </nav>
            </header>

            <section>
                <div className='card_row'>
                    {
                        product.map((value) => (
                            <>

                                <div className='card'>
                                    <div className='image_border'>
                                        <img src={value.url} className='image_size' />
                                    </div><br />
                                    <h1>product name:{value.product_name}</h1>
                                    <br></br>
                                    <h1>rating:{value.rating}</h1>
                                    <br></br>
                                   
                                    <h1>prize:{value.prize}</h1>
                                    <br></br>
                                    <h1>description:{value.description}</h1>
                                    <br></br>
                                    <Link to={`/displayproduct/${value.id}`}><input type='submit' value='View Product' /></Link>
                                    <br></br>
                                    <Link to={`/Updateproduct/${value.id}`}><input type='submit' value='Update' /></Link>
                                    <br></br>
                                    <Link to={`/displayproduct/${value.id}`}><input type='submit' onClick={deleteproduct} value='Delete' /></Link>

                                </div>

                            </>
                        ))
                    }
                </div>
            </section>
        </>
    );
}
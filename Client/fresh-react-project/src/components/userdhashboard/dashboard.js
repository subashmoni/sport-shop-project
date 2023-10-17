import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import navimage from '../assets/5857560-removebg-preview.png';
import './dashboard.css';
import StarRatings from 'star-ratings';

export function Userdashboard() {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:3005/getAllproduct")
            .then(res => res.json())
            .then(details => setProduct(details))
    })

    return (

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
                                    <h1><span>product name:</span>{value.product_name}</h1>
                                    <br></br>
                                    <h1><span>rating:</span>{value.rating}</h1>
                                    {/* <StarRatings
                                        rating={value.rating}
                                        starDimension="20px"
                                        starSpacing="2px"
                                        starRatedColor="gold"
                                    /> */}
                                    <br></br>
                                    <h1><span>prize:</span>{value.prize}</h1>
                                    <br></br>
                                    <h1><span>description:</span>{value.description}</h1>
                                    <br></br>
                                    <Link to={`/displayproduct/${value.id}`}><input type='submit' value='View Product' /></Link>

                                </div>

                            </>
                        ))
                    }
                </div>
            </section>
        </>
    );
}
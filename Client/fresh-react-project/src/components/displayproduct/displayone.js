import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import navimage from '../assets/5857560-removebg-preview.png';
import './displayproduct.css';

export function Displayproduct(){

    var {id} = useParams()
    const[productname,setproductname] = useState('');
    const[description,setdescription] = useState('');
    const[rating,setrating] = useState('');
    const[prize,setprize] = useState( );
    const[url,seturl] = useState('');
    useEffect(()=>{
        fetch("http://localhost:3005/displayoneproduct/"+id)
        .then(data=>data.json())
        .then((res)=>{
            setproductname(res[0].product_name)
            setdescription(res[0].description)
            setrating(res[0].rating)
            setprize(res[0].prize)
            seturl(res[0].url)
           

    })
    },[])

    function order(){
        alert("product will be order")
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
            <div className="card1">
    <div className="left1">
      <img src={url} className='image_size' alt="shoe"/>
    </div>
    <div className="right1">
      <div className="product-info1">
        <div className="product-name1">
          <h1>Airmax</h1>
          
        </div>
        <div className="details1">
          <h3>{productname}</h3>
          <h2>{description}</h2>
          <h2>Rate:{rating}</h2>
          <h4><span className="fa fa-dollar"></span>{prize}</h4>
          <h4 className="dis1"><span className="fa fa-dollar"></span>200</h4>
        </div>
        <ul>
          <li>SIZE</li>
          <li className="bg1">7</li>
          <li className="bg1">8</li>
          <li className="bg1">9</li>
          <li className="bg1">10</li>
          <li className="bg1">11</li>
        </ul>
        <ul>
          <li>COLOR</li>
          <li className="yellow1"></li>
          <li className="black1"></li>
          <li className="blue1"></li>
        </ul>
        <button onClick={order}><span className="foot1">Buy Now</span></button>
        <span className="foot1"><i className="fa fa-shopping-cart"></i>Add TO Cart</span>
      </div>
    </div>
  </div>

            </section>
        </>
    );
}
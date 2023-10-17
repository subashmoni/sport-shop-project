import React from 'react'
import './navbar.css';
import navimage from '../assets/5857560-removebg-preview.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import sportimg from '../assets/1000_F_629154105_EHcWktqAZrfIJmSNAEt8rBexwzoWdbLv.jpg'
import fitnessimg from '../assets/fitnessimg.jpg'
import shoes from '../assets/shoesimg.jpeg'
import cloth from '../assets/sportclothimg.jpg'

export function Navbar() {
    return (
        <>
        
            <header className='nav_border'>
                <img src={navimage} />
                <nav className='navbar'>
                    <a href='#home'>Home</a>
                    <a href='/userdashboard'>Sports</a>
                    <a href='/userdashboard'>Fitness</a>
                    <a href='/userdashboard'>Shoes</a>
                    <a href='/userdashboard'>Clothing</a>
                    <Link to='/register'>Sign In</Link>
                    <Link to='/loginpage'>Login</Link>
                </nav>
            </header>
            <br />
            <section>
                <div className="home_image" >

                </div>
            </section>
            <br /><br />
            <section className='Container'>
                <div className='list_image'>
                    <img src={sportimg} className='img_size mar1' alt="..." />
                    <img src={fitnessimg} className='img_size' alt="..." />
                    <img src={shoes} className='img_size' alt="..." />
                    <img src={cloth} className='img_size' alt="..." />
                </div>
                <div className='list_heading'>
                    <h1>SPORTS</h1>
                    <h1>FITNESS</h1>
                    <h1>SHOES</h1>
                    <h1>CLOTHING</h1>
                </div>
            </section>
            <br /><br />
            <section>
                <div className="sec_border" >

                </div>
            </section>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <footer class="footer">
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>
                <ul class="social-icon">
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                    </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a></li>
                </ul>
                <ul class="menu">
                    <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
                    <li class="menu__item"><a class="menu__link" href="#">Sports</a></li>
                    <li class="menu__item"><a class="menu__link" href="#">Fitness</a></li>
                    <li class="menu__item"><a class="menu__link" href="#">Clothing</a></li>
                    <li class="menu__item"><a class="menu__link" href="#">Register</a></li>

                </ul>
                <p>&copy;2023 Nadine Coelho | All Rights Reserved</p>
            </footer>
        </>
    );
}
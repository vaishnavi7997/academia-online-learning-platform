import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <>
    <section className='newletter'>
        <div className='container flexSB'>
            <div className='left row'>
                <h1>Newsletter -Stay tune and get the latest update</h1>
                <span>far far away, behind the word mountains</span>
            </div>
            <div className='right row'>
                <input type='text' placeholder='Enter email address' />
                <i className='fa fa-paper-plane'></i>
            </div>
        </div>
    </section>
    <footer>
        <div className="container padding">
            <div className='box logo'>
                <h1>ACADEMIA</h1>
                <span>online education & learning</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, magnam.</p>
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-instagram icon'></i>
                <i className='fab fa-twitter icon'></i>
            </div>
            <div className='box link'>
                <h3>Explore</h3>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className='box link'>
                <h3>Quick Links</h3>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>   
                </ul>
            </div>
           
            <div className='box last'>
                <h3>Have a Questions?</h3>
                <ul>
                    <li>
                        <i className='fa fa-map'></i>
                        203 Fake ST. Mount View INDIA
                    </li>
                    <li>
                        <i className='fa fa-phone-alt'></i>
                        +123 456 7891
                    </li>
                    <li>
                        <i className='fa fa-paper-plane'></i>
                        info@gmail.com
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    <div className='legal'>
         <p>&copy; 2025 All rights reserved!</p>
    </div>
    </>
  )
}

export default footer

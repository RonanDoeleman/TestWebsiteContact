import React, { Component } from 'react';
import Logo from "../images/logo.rostudio.svg";
import './Footer.css';


const Footer = () => {
  
    return(
        <React.Fragment>
            <div className="footer">
                <img className="footer-logo" src={Logo} alt=""></img>
                    <div className="services">
                        <h2>Links</h2>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Over mij</a></li>
                            <li><a href="/">Cases</a></li>
                            <li><a href="/">Diensten</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="connect">
                        <h2>Connect</h2>
                        <ul>
                            <li><a href="/">Stationsplein 20, 1234AB Amsterdam</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">+ 31 06 15 66 83 53</a></li>
                        </ul>
                    </div>        
            </div>
        </React.Fragment> 
    );
};

export default Footer;
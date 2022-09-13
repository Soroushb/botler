import React from "react";
import './Footer.scss';
import { images } from '../../constants'



const Footer = () => {

    return(
    <>
    <div className="footer-container">
    <div className="footer-options">
        <h2 className="option">Home</h2>
        <h2 className="option">Botler For Citizens</h2>
        <h2 className="option">Botler for Teams</h2>
        <h2 className="option">Request Access</h2>
        <h2 className="option">Partner With Us</h2>
        <h2 className="option">Press</h2>
        <h2 className="option">Contact Us</h2>
    </div>
    <div className="newsletter">
        <img src={images.logo} alt="logo" width="70px"/>
        <p className="news-paragraph">Stay informed on Botler’s latest developments through our newsletter.</p>
        <input type="text" placeholder="name@canada.ca"/>
        
    </div>
  

    </div>

    <div className="links">
            <div className="pages">
                <h3>Terms and conditions</h3>
                <h3>Privacy Policy</h3>
                <h3>Cookie Policy</h3>

            </div>
            <div className="social-media">

            </div>
    </div>
    </>
    )

}

export default Footer;
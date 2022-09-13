import React from "react";
import { images } from '../../constants'
import './Header.scss';

const Header = () => {

    return(
    <div className="navbar_container">
        <div className="nav-content">
        <p className="logo">
            <img src={images.logo} alt="logo" width="150px"/>
        </p>
        <div className="nav-items">
        <p>Login</p>
        <p id="language">EN | FR</p>
        </div>
        </div>

    </div>
    )

}

export default Header;
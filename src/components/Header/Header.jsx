import React from "react";
import { images } from '../../constants'
import './Header.scss';

const Header = () => {

    return(
    <div className="navbar_container">
        <p className="logo">
            <img src={images.logo} alt="logo" width="150px"/>
        </p>
        <div className="nav-items">
        <h3>Login</h3>
        <p>EN | FR</p>
        </div>

    </div>
    )

}

export default Header;
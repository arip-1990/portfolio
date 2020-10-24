import React from "react";

import logo from "../images/logo192.png";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <img className="header_logo" src={logo} alt="" />
                <div className="header_contact">
                    <a href="mailto:dev@arip.info">dev@arip.info</a>
                    <a href="tel:+79886463659">+7 (988) 646 36 59</a>
                </div>
            </div>
        </header>
    );
};

export default Header;

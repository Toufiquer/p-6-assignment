import React from "react";
import logo from "../../logo/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="Toufiquer Logo" />
        <ul>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/product">PRODUCT</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

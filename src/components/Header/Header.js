import React, { Component } from 'react';
import './Header.css';
import Sunrise from "../../images/Sunrise.png";

class Header extends Component {

  render() {
    return (
      <div className="content content-header">
        <img src={Sunrise} alt="header-logo" className="header-logo" />
      </div>
    );
  }
}

export default Header;

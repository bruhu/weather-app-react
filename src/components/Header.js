import React, { Component } from "react";
import "../assets/styles/Header.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="header-h1">
          <i className="fas fa-bolt" /> Hello, weather!
        </h1>
      </div>
    );
  }
}

export default Header;

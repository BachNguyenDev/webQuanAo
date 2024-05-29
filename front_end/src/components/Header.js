import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="col10">
          <img width={300} src="logo.png" alt="Logo" />
        </div>
        <div className="col30 topnav">
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Home
          </NavLink>
          <div className="nav-item dropdown">
            <NavLink
              to="/ao"
              id="navbarDropdownAo"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Áo
            </NavLink>
          </div>
          <div className="nav-item dropdown">
            <NavLink
              to="/quan"
              id="navbarDropdownQuan"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Quần
            </NavLink>
          </div>
          <NavLink className="nav" to="/giohang">
            Giỏ hàng
          </NavLink>
          <NavLink className="nav" to="/lienhe">
            Liên hệ
          </NavLink>
          <input type="text" placeholder="Search.." />
        </div>
      </header>
    );
  }
}

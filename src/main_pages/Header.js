import React from 'react';
import logo2 from './logo2.png';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header-menu">
        <div className="container-fluid shadow">
          <nav className="navbar navbar-expand-lg navbar-expand-md">
            <Link className="navbar-brand" to="/">
              <img src={logo2} alt="logo" width="120"/>
            </Link>
            <div className="navbar-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item"> 
                  <Link className="nav-link" to="/product">Product</Link>
                </li> 
                <li className="nav-item"> 
                  <Link className="nav-link" to="/about">About Us</Link> 
                </li> 
                <li className="nav-item"> 
                  <Link className="nav-link" to="/contact">Contact Us</Link> 
                </li> 
                <li className="nav-item">
                  <Link className="nav-link" to="/transectionHistory">Transection History</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-actions">
              <Link className="search-btn" to="/search">
              Search
              </Link>
            </div>
            <div className="navbar-actions">
              <Link className="cart-link" to="/cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </div>
          </nav>
        </div>
      </header>
  );
}

export default Header;

import React from 'react';
import logo2 from './logo2.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer_section pt-5 pb-2" id="footer_section">
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-12">
                    <div className="footer_title">
                    <Link to="/">
                          <img src={logo2} width="150px" class="img img-fluid" alt="logo"/></Link>
                    </div>
                    <div className="footer_description mt-3">This is E-Commerce devloped by Saksham Sharma.
                    </div>
                </div>
            <div className="col-md-3 col-6">
                <div className="footer_title pt-3 mb-3">
                    <h3>Quick Links</h3>
                </div>
                <div className="footer_links">
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/transectionHistory">Transection History</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className="footer_title pt-3 mb-3">
                    <h3>New Products</h3>
                </div>
                <div className="footer_links">
                    <ul>
                        <li><Link to="/category/Electronics">Electronics</Link></li>
                        <li><Link to="/category/Clothes">Clothes</Link></li>
                        <li><Link to="/category/Console%20Games">Console Games</Link></li>
                        <li><Link to="/category/Food">Food</Link></li>
                        <li><Link to="/category/Kitchen%20Product">Kitchen Product</Link></li>
                     </ul>
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className="footer_title pt-3 mb-3">
                    <h3>Support</h3>
                </div>
                <div className="footer_links">
                    <ul>
                        <li><Link to="/faq">Frequently Asked Questions</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="border-top mt-5 pt-3">
        <h6 className="text-center mb-0">Copyright ©2024 All rights reserved</h6>
    </div>
  </footer>
</section>
  );
}

export default Footer;

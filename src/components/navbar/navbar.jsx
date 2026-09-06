import React from "react";
import logo from '../../assets/mlogo.png'
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="logo_ul">
          <li className="logo">
            <img src={logo} height={70} width={70} />
          </li>
          <li>
            <h2 className="matias_name">Matias</h2>
          </li>
        </ul>
        <ul className="li_ul">
          <li className="h_color"><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/works">WORKS</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/testinomal">TESTINOMAL</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
        <ul className="btn_ul">
          <li>
            <button className="btn_1">Let's Talk ➔</button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;

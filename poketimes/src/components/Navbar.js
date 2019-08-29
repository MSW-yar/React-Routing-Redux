import React from "react";
import { Link, NavLink, withRouter } from 'react-router-dom'
const Navbar = (props) => {
  setTimeout (() => {
    props.history.push ('/')
  }, 100000)
  return (
    <div className="container">
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <a className="brand-logo"> Poket Times </a>
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);

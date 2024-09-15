import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={require("./Images/Logo.png")} alt="Logo"  />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contact
              </Link>
            </li>
            
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

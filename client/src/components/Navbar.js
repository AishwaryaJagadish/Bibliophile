import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Icon
          </a>
          <h1 className="navbar-brand">Bibliophile Heaven</h1>
          <Link to="/login" className="btn btn-outline-light">Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import Logo from './logo.js'; // Importe o componente do logo


function Menu() {
  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
 <Logo />      
 <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  );
}


export default Menu;
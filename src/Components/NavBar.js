import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <Link to ="/registraton">Registration</Link>
        
       
      
      </div>
    </nav>
  );
}

export default NavBar;

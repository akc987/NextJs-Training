import Link from "next/link";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 

const Navbar = () => {
  return (
    <>  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Ecommerce</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <Link className="nav-link" href="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" href="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" href="/courses">Courses</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" href="/facilities">Facilities</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
  </>
  );
};

export default Navbar;

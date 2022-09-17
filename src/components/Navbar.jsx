import logo from '../assets/Img/logo2.png'
import { Link, NavLink } from "react-router-dom";
import '../Assets-Home/Home-Css/home.css'
import React from 'react';
import { AppContext } from '../Context/AppContext';

export default function Navbar() {
  const Contex= React.useContext(AppContext)
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-warning ">
  <div class="container-fluid">
  <NavLink className="nav-link text-light " to="/">
    <img src={logo} alt="" className='logo animate__animated animate__lightSpeedInLeft animate__delay-0.8s' />
    </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
       

        <li className="nav-item">
        <NavLink className="nav-link text-light" to="/product">
         {Contex.lang ==='en' ?'Product':'Produk'}
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link text-light" to="/about">
        {Contex.lang ==='en' ?'About':'Tentang'}
        </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link text-light" to="/cart">
        {Contex.lang ==='en' ?'Cart':'Keranjang'}
        </NavLink>
      </li>

      
      </ul>
      
      <form class="d-flex bg-warning " role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-light" type="submit" >Search</button>
      </form>
      
      <a className="text-reset me-3" to="#">
        
      <i className="fas fa-shopping-cart text-light " />
    </a>
      <a
        className="text-reset me-3 dropdown-toggle hidden-arrow"
        to="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-bell text-light" />
        <span className="badge rounded-pill badge-notification bg-danger">
          1
        </span>
      </a>
      <div class="dropdown d-flex">
  <img 
  class="btn btn-secondary dropdown-toggle" 
  type="button"
   data-bs-toggle="dropdown"
    aria-expanded="false"
    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          className="rounded-circle"
          height={25}
          alt="Black and White Portrait of a Man"
          loading="lazy"/>
   
 
  <ul className="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuAvatar">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Setting</a></li>
    <li><a class="dropdown-item" href="#">Log Out</a></li>
  </ul>
  <button class="nav-link bahasa" style={{marginLeft:'10px'}} onClick={() => Contex.onchangebahasa(Contex.lang === "en" ? "id" : "en")} >{Contex.lang==="en"?"en":"id"}</button>
</div>
    </div>
  </div>
</nav>
    </>

  )
}

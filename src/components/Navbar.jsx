import logo from '../assets/Img/logo2.png'
import { Link, NavLink } from "react-router-dom";
import '../Assets-Home/Home-Css/home.css'

export default function Navbar() {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-warning ">
  <div class="container-fluid">
  <NavLink className="nav-link text-light " to="/">
    <img src={logo} alt="" className='logo animate__animated animate__lightSpeedInLeft animate__delay-0s' />
    </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
       

        <li className="nav-item">
        <NavLink className="nav-link text-light" to="/product">
          Product
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link text-light" to="/about">
          About
        </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link text-light" to="/cart">
          Cart
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
      <div class="dropdown">
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
</div>
    </div>
  </div>
</nav>
    </>

  )
}

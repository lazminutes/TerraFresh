import logo from '../assets/Img/logo2.png'
import { Link, NavLink } from "react-router-dom";
import '../assets/css/home.css'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useState } from 'react';
import { useAPI } from '../context/APIContext';

export default function Navbar() {
  const { cart } = useAPI()
  const Contex = useContext(AppContext)
  let auth = JSON.parse(localStorage.getItem('user'))
  const handleLogout = (e) => {
    localStorage.clear()
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container">
          <NavLink className="nav-link text-light " to="/">
            <img src={logo} alt="" className='logo animate__animated animate__lightSpeedInLeft animate__delay-0.8s' />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/product">
                  {Contex.lang === 'en' ? 'Product' : 'Produk'}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/about">
                  {Contex.lang === 'en' ? 'About' : 'Tentang'}
                </NavLink>
              </li>
            </ul>
            <Link className="text-reset me-3" to="/cart">
              <i className="fas fa-shopping-cart text-light " />
              <span className="badge rounded-pill badge-notification bg-danger">
                {cart.length}
              </span>
            </Link>
            <button className="btn btn-success mx-3" onClick={() => Contex.onchangebahasa(Contex.lang === "en" ? "id" : "en")} >{Contex.lang === "en" ? "en" : "id"}
            </button>
            {auth ? (
              <>
                <div>John Doe</div>
                <a className="btn btn-danger ms-3" href='/' onClick={(e) => handleLogout(e)}>Logout</a>
              </>
            ) : (
              <>
                <Link className="btn btn-success" to="/login">Login</Link>
                <Link className="btn btn-success ms-3" to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>

  )
}

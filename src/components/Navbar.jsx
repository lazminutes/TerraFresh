import logo from '../assets/Img/logo2.png'
import { Link, NavLink } from "react-router-dom";
import '../assets/css/home.css'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Navbar() {
  const Contex = useContext(AppContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning ">
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
              <li className="nav-item ">
                <NavLink className="nav-link text-light" to="/cart">
                  {Contex.lang === 'en' ? 'Cart' : 'Keranjang'}
                </NavLink>
              </li>
            </ul>
            <form className="d-flex bg-warning " role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            <a className="text-reset me-3" to="#">
              <i className="fas fa-shopping-cart text-light " />
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </a>
            <div>John Doe</div>
            <button className="btn btn-success" style={{ marginLeft: '10px' }} onClick={() => Contex.onchangebahasa(Contex.lang === "en" ? "id" : "en")} >{Contex.lang === "en" ? "en" : "id"}
            </button>
          </div>
        </div>
      </nav>
    </>

  )
}

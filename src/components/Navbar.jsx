import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link" to="/product">
          Product
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/cart">
          Cart
        </NavLink>
      </li>
      </ul>
      <a className="text-reset me-3" to="#">
      <i className="fas fa-shopping-cart" />
    </a>
      <a
        className="text-reset me-3 dropdown-toggle hidden-arrow"
        to="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-bell" />
        <span className="badge rounded-pill badge-notification bg-danger">
          1
        </span>
      </a>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
    </>

  )
}

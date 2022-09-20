import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Product from "./pages/Product"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Payment from "./pages/Payment"
import Login from "./pages/Login"
import Register from "./pages/Register"
import LayoutDefault from "./layouts/LayoutDefault"
import LayoutAuth from "./layouts/LayoutAuth"
import ProductFruit from "./pages/ProductFruit"
import ProductVegetable from "./pages/ProductVegetable"
import ProductDetail from './pages/ProductDetail';
import Create from './pages/Create';
import Edit from './pages/Edit';

function Import() {

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <LayoutDefault>
            <Home />
          </LayoutDefault>
        }
        />
        <Route path="/product" element={
          <LayoutDefault>
            <Product />
          </LayoutDefault>
        }
        />
        <Route path="/product/:name" element={
          <LayoutDefault>
            <ProductDetail />
          </LayoutDefault>
        }
        />
        <Route path="/about" element={
          <LayoutDefault>
            <About />
          </LayoutDefault>
        }
        />
        <Route path="/cart" element={
          <LayoutDefault>
            <Cart />
          </LayoutDefault>
        }
        />
        <Route path="/payment" element={
          <LayoutDefault>
            <Payment />
          </LayoutDefault>
        }
        />
        <Route path="/login" element={
          <LayoutAuth>
            <Login />
          </LayoutAuth>
        }
        />
        <Route path="/register" element={
          <LayoutAuth>
            <Register />
          </LayoutAuth>
        }
        />
        <Route path="/product/fruits" element={
          <LayoutDefault>
            <ProductFruit />
          </LayoutDefault>
        } />
        <Route path="/product/vegetables" element={
          <LayoutDefault>
            <ProductVegetable />
          </LayoutDefault>
        } />
        <Route path="/admin" element={
          <LayoutDefault>
            <Admin />
          </LayoutDefault>
        } />
        <Route path="/create" element={
          <LayoutDefault>
            <Create />
          </LayoutDefault>
        } />
        <Route path="/edit/:name" element={
          <LayoutDefault>
            <Edit />
          </LayoutDefault>
        } />
      </Routes>
    </div>
  );
}

export default Import;

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Payment from "./pages/Payment"
import Login from "./pages/Login"
import Register from "./pages/Register"
import LayoutDefault from "./layouts/LayoutDefault"
import LayoutAuth from "./layouts/LayoutAuth"

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={
         
            <Home />
         
        }
        />
        <Route path="/product" element={
          <LayoutDefault>
            <Product />
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
      </Routes>
    </>
  )
}

export default App

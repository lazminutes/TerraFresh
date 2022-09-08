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
import Swiper from "./Assets-Home/Swiper/Swiper"
import Footer from "./pages/Footer"
import Buah from "./pages/Pages-produk-tambahan/Buah"
import Sayur from "./pages/Pages-produk-tambahan/Sayur"

function App() {

  return (
    <>
          

      <Routes>
        <Route path="/" element={
         
            <Home />
           }
        />
       
        <Route path="/product" element={
      
            <Product />
        
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
        
        <Route path="/produk/buah" element={<Buah/>}/>
        <Route path="/produk/sayur" element={<Sayur/>}/>
      </Routes>
      
<Footer/>
   
    </>
  )
}

export default App

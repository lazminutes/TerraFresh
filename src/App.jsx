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
import Buah from "./Pages-produk-tambahan/Buah"
import Sayur from "./Pages-produk-tambahan/Sayur"
// import detail sayuran
import Bayam from "./Page-detail-sayuran/Detail-bayam"
import Sawi from "./Page-detail-sayuran/Detail-Sawi"
import Cabai from "./Page-detail-sayuran/Detail-Cabai"
import Kangkung from "./Page-detail-sayuran/Detail-kangkung"
import Kecamba from "./Page-detail-sayuran/Detail-kecamba"
import Kentang from "./Page-detail-sayuran/Detail-Kentang"
import Kol from "./Page-detail-sayuran/Detail-kol"
import Paprika from "./Page-detail-sayuran/Detail-paprika"
import Terong from "./Page-detail-sayuran/Detail-Terong"
import Wortel from "./Page-detail-sayuran/Detail-wortel"

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
  
{/* Import Detail sayur */}

<Route path='/produk/sayur/detail-sawi' element={<Sawi/>}/>
<Route path='/produk/sayur/detail-bayam' element={<Bayam/>}/>
<Route path='/produk/sayur/detail-cabai' element={<Cabai/>}/>
<Route path='/produk/sayur/detail-Kangkung' element={<Kangkung/>}/>
<Route path='/produk/sayur/detail-Kecamba' element={<Kecamba/>}/>
<Route path='/produk/sayur/detail-Kentang' element={<Kentang/>}/>
<Route path='/produk/sayur/detail-Kol' element={<Kol/>}/>
<Route path='/produk/sayur/detail-Paprika' element={<Paprika/>}/>
<Route path='/produk/sayur/detail-Terong' element={<Terong/>}/>
<Route path='/produk/sayur/detail-Wortel' element={<Wortel/>}/>


      </Routes>
      

   
    </>
  )
}

export default App

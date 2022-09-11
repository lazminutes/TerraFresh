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

//import detail buah
import Apel from "./pages-detail-buah/Detail-apel"
import Durian from "./pages-detail-buah/Detail-durian"
import Jeruk from "./pages-detail-buah/Detail-jeruk"
import Mangga from "./pages-detail-buah/Detail-mangga"
import Melon from "./pages-detail-buah/Detail-melon"
import Naga from "./pages-detail-buah/detail-naga"
import Pepaya from "./pages-detail-buah/detail-pepaya"
import Pisang from "./pages-detail-buah/detail-pisang"
import Rambutan from "./pages-detail-buah/detail-rambutan"
import Srikaya from "./pages-detail-buah/detail-srikaya"
import Sirsak from "./pages-detail-buah/Detail-Sirsak"
import Jambu from "./pages-detail-buah/Detail-Jambu"

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

{/* import Detail Buah */}
<Route path='/produk/Buah/detail-apel' element={<Apel/>}/>
<Route path='/produk/Buah/detail-Durian' element={<Durian/>}/>
<Route path='/produk/Buah/detail-Jeruk' element={<Jeruk/>}/>
<Route path='/produk/Buah/detail-Mangga' element={<Mangga/>}/>
<Route path='/produk/Buah/detail-Melon' element={<Melon/>}/>
<Route path='/produk/Buah/detail-Naga' element={<Naga/>}/>
<Route path='/produk/Buah/detail-Pepaya' element={<Pepaya/>}/>
<Route path='/produk/Buah/detail-Pisang' element={<Pisang/>}/>
<Route path='/produk/Buah/detail-Rambutan' element={<Rambutan/>}/>
<Route path='/produk/Buah/detail-Srikaya' element={<Srikaya/>}/>
<Route path='/produk/Buah/detail-Sirsak' element={<Sirsak/>}/>
<Route path='/produk/Buah/detail-Jambu-biji' element={<Jambu/>}/>


      </Routes>
      

   
    </>
  )
}

export default App

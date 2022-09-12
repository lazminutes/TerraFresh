import Navbar from '../components/Navbar'
import '../Assets-produk/css-produk/produk.css'
import sayuran from '../Assets-Home/Img Swiper/sayuran.png'
import buahan from '../Assets-Home/Img Swiper/buah.png'
import Footer from './Footer'
//import router-dom
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <>
      <Navbar />
      <div className='produk'>
        <div className='text-center'>
          <h2>Produk</h2>
          <div className='row '>

          
              <div className='col-md-6 selsectproduk animate__animated animate__bounceIn animate__delay-0s' style={{
                borderRadius: '100px'
              }} >
                  <Link to='/produk/sayur'><img src={sayuran} alt="" className='imgproduk' /> </Link>
                <h2>Sayur-Sayuran</h2>
              </div>
           

            
              <div className='col-md-6 selsectproduk animate__animated animate__bounceIn animate__delay-0s'
                style={{
                  borderRadius: '100px'
                }}
              >
            <Link to='/produk/buah'><img src={buahan} alt="" className='imgprodukb' /></Link>
                <h2>Buah-Buahan</h2>
              </div>
           
            
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

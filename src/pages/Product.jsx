import { useContext } from 'react'
import '../assets/css/product.css'
import sayuran from '../assets/Img/sayuran.png'
import buahan from '../assets/Img/buah.png'
import Footer from './Footer'
import { AppContext } from '../context/AppContext'
//import router-dom
import { Link } from 'react-router-dom'

export default function Product() {
  const Contex = useContext(AppContext)
  return (
    <>
      <div className='produk'>
        <div className='text-center'>
          <h2 className=' title-web'>{Contex?.lang === "en" ? "Product" : "Produk"}</h2>
          <div className='row '>


            <div className='col-md-6 selsectproduk animate__animated animate__bounceIn animate__delay-0s' style={{
              borderRadius: '100px'
            }} >
              <Link to='/product/vegetables'><img src={sayuran} alt="" className='imgproduk' /> </Link>
              <h2>{Contex.lang === 'en' ? 'vegetables' : 'Sayuran'}</h2>
            </div>



            <div className='col-md-6 selsectproduk animate__animated animate__bounceIn animate__delay-0s'
              style={{
                borderRadius: '100px'
              }}
            >
              <Link to='/product/fruits'><img src={buahan} alt="" className='imgprodukb' /></Link>
              <h2>{Contex.lang === 'en' ? 'Fruits' : 'Buah-buahan'}</h2>
            </div>


          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

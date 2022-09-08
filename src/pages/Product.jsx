import '../Assets-produk/css-produk/produk.css'
import sayuran from '../Assets-Home/Img Swiper/sayuran.png'
import buahan from  '../Assets-Home/Img Swiper/buahan.png'
export default function Product() {
  return (
    <div>
      <div className='container text-center'>
        <h2>Produk</h2>
        <div className='row '>
          
          <div className='col-md-6 selsectproduk'style={{border:'2px solid black'}} >

      <img src={sayuran} alt="" className='imgproduk'/>
      <h2>adad</h2>
          </div>
          <div className='col-md-6'style={{backgroundColor:'yellow'}} >

          <img src={buahan} alt=""  className='imgproduk'/>
          </div>
        </div>
      </div>
    </div>
  )
}

import sayuran from '../Assets-Home/Img Swiper/sayuran.png'
import buahan from  '../Assets-Home/Img Swiper/buahan.png'
export default function Product() {
  return (
    <div>
      <div className='container text-center'>
        <div className='row '>
          
          <div className='col-md-6'style={{backgroundColor:'red'}} >

      <img src={sayuran} alt="" className='imgproduk'/>
          </div>
          <div className='col-md-6'style={{backgroundColor:'yellow'}} >

          <img src={buahan} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

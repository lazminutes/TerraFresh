import { Link } from 'react-router-dom'
//import gambar
import apel from '../Img Swiper/apel.png'
import pepaya from '../Img Swiper/pepaya.png'
import mangga from '../Img Swiper/mangga.png'
import sawi from '../Img Swiper/sawi.png'
import cabai from '../Img Swiper/cabai.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';
import '../Home-Css/home.css'

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}

      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='bgshop'
    >
      <SwiperSlide>
      <div class="card list-produk" >
            <div className='item'>
              <div className='oval'></div>
              <img src={mangga} class="card-img-top size-img tengah" alt="" />

              <div className='shopnow align-items-center'>
                <Link to='/produk/Buah/detail-Mangga'><button class="btn-Costum">Detail</button> </Link>

                <i className="fas fa-shopping-cart" />
              </div>

            </div>
            <div class="card-body bodyCard">
              <div class="stars editStart">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>

              <h5 class="card-title">Manggo</h5>
              <p class="card-text">Rp 6000</p>
              
              <p className='stock'>stock:10</p>

            </div>
          </div>
     </SwiperSlide>
      <SwiperSlide>
      <div class="card list-produk" >
            <div className='item'>
              <div className='oval'></div>
              <img src={apel} class="card-img-top size-img" alt="" style={{ marginTop: '30px' }} />

              <div className='shopnow align-items-center  '>

                <Link to='/produk/Buah/detail-apel'><button class="btn-Costum">Detail</button> </Link>

                <i className="fas fa-shopping-cart" />
              </div>

            </div>
            <div class="card-body bodyCard ">

              <div class="stars editStart ">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>

              <h5 class="card-title">Apel</h5>
              <p class="card-text">Rp 5000</p>

              <p className='stock'>stock:10</p>

            </div>
          </div>
        
      
      </SwiperSlide>

      <SwiperSlide> 

      <div class="card list-produk" >
            <div className='item '>
              <div className='oval'></div>
              <img src={pepaya} class="card-img-top size-img tengah" alt="" />

              <div className='shopnow align-items-center'>
                <Link to='/produk/Buah/detail-Pepaya'><button class="btn-Costum">Detail</button> </Link>

                <i className="fas fa-shopping-cart" />
              </div>

            </div>
            <div class="card-body bodyCard">
              <div class="stars editStart">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>

              <h5 class="card-title">Pepaya</h5>
              <p class="card-text">Rp 6000</p>
             
              <p className='stock'>stock:10</p>

            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide> 
      <div class="card list-produk" >
        <div className='item'>
          <div className='oval'></div>
          <img src={sawi} class="card-img-top size-img tengah sedang" alt="" />

          <div className='shopnow align-items-center'>
         <Link to='/produk/sayur/detail-sawi'>  <button class="btn-Costum">Detail</button> </Link> 
           
            <i className="fas fa-shopping-cart" />
            </div>

          </div>
          <div class="card-body bodyCard">
          <div class="stars editStart">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Sawi</h5>
            <p class="card-text">Rp 2000</p>
            
            <p className='stock'>stock:10</p>
           
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
     
      <div class="card list-produk" >
        <div className='item'>
          <div className='oval'></div>
          <img src={cabai} class="card-img-top size-img tengah" alt="" />

          <div className='shopnow align-items-center'>
              <Link to='/produk/sayur/detail-cabai'>
            <button class="btn-Costum">Detail</button>  
            </Link>
            <i className="fas fa-shopping-cart" />
            </div>

          </div>
          <div class="card-body bodyCard">
          <div class="stars editStart">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">cabai</h5>
            <p class="card-text">Rp 5000</p>
          
            <p className='stock'>stock:10</p>
           
          </div>
        </div>
    
      </SwiperSlide>
      
      
    </Swiper>
  );
};
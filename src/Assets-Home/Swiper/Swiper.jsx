
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
        <div class="card" >
        <div className='fruit'>
          <img src={mangga} class="card-img-top" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
            <h5 class="card-title">Manggo</h5>
            <p class="card-text">Rp 6000</p>
            <div className='shopnow'>
            <a href="#" ><button class="btn-Costum">Detail</button>  </a> 
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div></SwiperSlide>
      <SwiperSlide>
      
         <div class="card" >
          <div className='fruit'>
         <img src={apel} class="card-img-top imgTR" alt="" />
          </div>
        <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
         
          <h5 class="card-title">Apel</h5>
          <p class="card-text"> Rp 5000</p>
          <div className='shopnow'>
            <a href="#" ><button class="btn-Costum">Detail</button>  </a> 
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
        </div>
      </div>
     
      
      </SwiperSlide>
      <SwiperSlide> <div class="card" >
      <div className='fruit'>
        <img src={pepaya} class="card-img-top" alt="" />
        </div>
        <div class="card-body">
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h5 class="card-title">Pepaya</h5>
          <p class="card-text">Rp 10.000</p>
          <div className='shopnow'>
            <a href="#" ><button class="btn-Costum">Detail</button>  </a> 
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide> <div class="card" >
      <div className='fruit'>
        <img src={sawi} class="card-img-top" alt="" />
        </div>
        <div class="card-body">
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h5 class="card-title">Sawi</h5>
          <p class="card-text">Rp 3000</p>
          <div className='shopnow'>
            <a href="#" ><button class="btn-Costum">Detail</button>  </a> 
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
        </div>
      </div></SwiperSlide>
      <SwiperSlide>
     
         <div class="card" >
         <div className='fruit'>
        <img src={cabai} class="card-img-top" alt="" />  
        </div>
        <div class="card-body">
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h5 class="card-title">Cabai</h5>
          <p class="card-text">Rp 2000</p>
          <div className='shopnow'>
            <a href="#" ><button class="btn-Costum">Detail</button>  </a> 
           
            <i className="fas fa-shopping-cart" />
            </div>
        </div>
        <p>stock:10</p>
      </div>
    
      </SwiperSlide>
      
      
    </Swiper>
  );
};
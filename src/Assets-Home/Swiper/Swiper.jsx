import slide3 from '../Img Swiper/slide3.png'
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
    >
      <SwiperSlide>
        <div class="card" >
          <img src={slide3} class="card-img-top" alt="" />
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
            <a href="#" class="btn btn-warning btn-costum">Detail</a>
          </div>
        </div></SwiperSlide>
      <SwiperSlide> <div class="card" >
        <img src={slide3} class="card-img-top imgTR" alt="" />
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
          <a href="#" class="btn btn-warning btn-costum">Detail</a>
        </div>
      </div></SwiperSlide>
      <SwiperSlide> <div class="card" >
        <img src={slide3} class="card-img-top" alt="" />
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
          <a href="#" class="btn btn-warning btn-costum">Detail</a>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide> <div class="card" >
        <img src={slide3} class="card-img-top" alt="" />
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
          <a href="#" class="btn btn-warning btn-costum">Detail</a>
        </div>
      </div></SwiperSlide>
      <SwiperSlide> <div class="card" >
        <img src={slide3} class="card-img-top" alt="" />
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
          <a href="#" class="btn btn-warning btn-costum">Detail</a>
        </div>
      </div></SwiperSlide>
      
      
    </Swiper>
  );
};
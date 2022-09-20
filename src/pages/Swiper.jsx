import { Link } from 'react-router-dom'
//import gambar
import apel from '../assets/img/apel.png'
import pepaya from '../assets/img/pepaya.png'
import mangga from '../assets/img/mangga.png'
import sawi from '../assets/img/sawi.png'
import cabai from '../assets/img/cabai.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';
import '../assets/css/home.css'

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}

      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className='bgshop'
    >
      <SwiperSlide>
        <div className="card list-produk" >
          <div className='item'>
            <div className='oval'></div>
            <img src={mangga} className="card-img-top size-img tengah" alt="" />

            <div className='shopnow align-items-center'>
              <Link to='/product/Mango'><button className="btn-Costum">Detail</button> </Link>

           
            </div>

          </div>
          <div className="card-body bodyCard">
            <div className="stars editStart">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>

            <h5 className="card-title">Manggo</h5>
            <p className="card-text">Rp 6000</p>

            <p className='stock'>stock:10</p>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card list-produk" >
          <div className='item'>
            <div className='oval'></div>
            <img src={apel} className="card-img-top size-img" alt="" style={{ marginTop: '30px' }} />

            <div className='shopnow align-items-center  '>

              <Link to='/product/Apple'><button className="btn-Costum">Detail</button> </Link>

           
            </div>

          </div>
          <div className="card-body bodyCard ">

            <div className="stars editStart ">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>

            <h5 className="card-title">Apel</h5>
            <p className="card-text">Rp 5000</p>

            <p className='stock'>stock:10</p>

          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>

        <div className="card list-produk" >
          <div className='item '>
            <div className='oval'></div>
            <img src={pepaya} className="card-img-top size-img tengah" alt="" />

            <div className='shopnow align-items-center'>
              <Link to='/product/Papaya'><button className="btn-Costum">Detail</button> </Link>

           
            </div>

          </div>
          <div className="card-body bodyCard">
            <div className="stars editStart">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>

            <h5 className="card-title">Pepaya</h5>
            <p className="card-text">Rp 6000</p>

            <p className='stock'>stock:10</p>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card list-produk" >
          <div className='item'>
            <div className='oval'></div>
            <img src={sawi} className="card-img-top size-img tengah sedang" alt="" />

            <div className='shopnow align-items-center'>
              <Link to='/product/Sawi'>  <button className="btn-Costum">Detail</button> </Link>

           
            </div>

          </div>
          <div className="card-body bodyCard">
            <div className="stars editStart">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>

            <h5 className="card-title">Sawi</h5>
            <p className="card-text">Rp 2000</p>

            <p className='stock'>stock:10</p>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card list-produk" >
          <div className='item'>
            <div className='oval'></div>
            <img src={cabai} className="card-img-top size-img tengah" alt="" />

            <div className='shopnow align-items-center'>
              <Link to='/product/Chili'>
                <button className="btn-Costum">Detail</button>
              </Link>
           
            </div>

          </div>
          <div className="card-body bodyCard">
            <div className="stars editStart">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>

            <h5 className="card-title">cabai</h5>
            <p className="card-text">Rp 5000</p>

            <p className='stock'>stock:10</p>

          </div>
        </div>

      </SwiperSlide>


    </Swiper>
  );
};

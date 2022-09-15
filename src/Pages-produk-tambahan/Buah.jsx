import { Link } from 'react-router-dom'
//import gsmbsr buah
import apel from '../Assets-Home/Img Swiper/apel.png'
import durian from '../Assets-Home/Img Swiper/durian.png'
import jeruk from '../Assets-Home/Img Swiper/jeruk.png'
import mangga from '../Assets-Home/Img Swiper/mangga.png'
import melon from '../Assets-Home/Img Swiper/melon.png'
import naga from '../Assets-Home/Img Swiper/naga.png'
import pepaya from '../Assets-Home/Img Swiper/pepaya.png'
import pisang from '../Assets-Home/Img Swiper/pisang.png'
import rambutan from '../Assets-Home/Img Swiper/Rambutan.png'
import srikaya from '../Assets-Home/Img Swiper/Srikaya.png'
import sirsak from '../Assets-Home/Img Swiper/Sirsak.png'
import jambu from '../Assets-Home/Img Swiper/Jambu.png'

import Navbar from "../components/Navbar"

export default function Buah() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className='card-title'>
          <h2 className='text-center'>Buah Segar Hari ini</h2>
        </div>
        <div className='Sayur d-flex text-center'>
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

              <p>stock:10</p>

            </div>
          </div>
          <div class="card list-produk" >
            <div className='item'>
              <div className='oval'></div>
              <img src={durian} class="card-img-top size-img" alt="" />

              <div className='shopnow align-items-center'>
                <Link to='/produk/Buah/detail-Durian'><button class="btn-Costum">Detail</button> </Link>

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

              <h5 class="card-title">Durian</h5>
              <p class="card-text">Rp 10.000</p>
             
              <p>stock:10</p>

            </div>
          </div>
          <div class="card list-produk" >
            <div className='item'>
              <div className='oval'></div>
              <img src={jeruk} class="card-img-top size-img" alt="" style={{ marginTop: '5px' }} />

              <div className='shopnow align-items-center'>
                <Link to='/produk/Buah/detail-Jeruk'><button class="btn-Costum">Detail</button> </Link>

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

              <h5 class="card-title">Jeruk</h5>
              <p class="card-text">Rp 5000</p>
             
              <p>stock:10</p>

            </div>
          </div>
          <div class="card list-produk" >
            <div className='item'>
              <div className='oval'></div>
              <img src={mangga} class="card-img-top size-img " alt="" />

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
              
              <p>stock:10</p>

            </div>
          </div>
          <div class="card list-produk" >
            <div className='item'>
              <div className='oval'></div>
              <img src={melon} class="card-img-top size-img" alt="" style={{ marginTop: '30px' }} />

              <div className='shopnow align-items-center'>
                <Link to='/produk/Buah/detail-Melon'><button class="btn-Costum">Detail</button> </Link>

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

              <h5 class="card-title">melon</h5>
              <p class="card-text">Rp 6000</p>
            
              <p>stock:10</p>

            </div>
          </div>
          <div class="card list-produk" >
            <div className='item'>
              <div className='oval'></div>
              <img src={naga} class="card-img-top size-img" alt="" style={{ marginLeft: '20px' }} />

              <div className='shopnow align-items-center'>
                <Link to='/produk/Buah/detail-Naga'><button class="btn-Costum">Detail</button> </Link>

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

              <h5 class="card-title">naga</h5>
              <p class="card-text">Rp 8000</p>
             
              <p>stock:10</p>

            </div>
          </div>
          <div class="card list-produk" >
            <div className='item '>
              <div className='oval'></div>
              <img src={pepaya} class="card-img-top size-img" alt="" />

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
             
              <p>stock:10</p>

            </div>
          </div>
          <div class="card list-produk" >
            <div className='item'>
              <div className='oval'></div>
              <img src={pisang} class="card-img-top size-img" alt="" style={{ marginLeft: '15px' }} />

              <div className='shopnow align-items-center'>
                <Link to='/produk/Buah/detail-Pisang'><button class="btn-Costum">Detail</button> </Link>

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

              <h5 class="card-title">Pisang</h5>
              <p class="card-text">Rp 4000</p>
            
              <p>stock:10</p>

            </div>
          </div>
          <div class="card list-produk" >
            <div className='item'>
              <div className='oval'></div>
              <img src={rambutan} class="card-img-top size-img" alt="" />

              <div className='shopnow align-items-center'>
                <Link to='/produk/Buah/detail-Rambutan'><button class="btn-Costum">Detail</button> </Link>

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

              <h5 class="card-title">Rambutan</h5>
              <p class="card-text">Rp 3000</p>
            
              <p>stock:10</p>

            </div>
          </div>

          <div class="card list-produk" >
            <div className='item'>
              <div className='oval'></div>
              <img src={srikaya} class="card-img-top  size-img" alt="" style={{ marginLeft: '25px', marginTop: '10px' }} />

              <div className='shopnow align-items-center'>
                <Link to='/produk/Buah/detail-Srikaya'><button class="btn-Costum">Detail</button> </Link>

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

              <h5 class="card-title">Srikaya</h5>
              <p class="card-text">Rp 6000</p>
             
              <p>stock:10</p>

            </div>
          </div>


          <div class="card list-produk" >
            <div className='item'>
              <div className='oval'></div>
              <img src={sirsak} class="card-img-top   size-img" alt="" />

              <div className='shopnow align-items-center'>
                <Link to='/produk/Buah/detail-Sirsak'>

                  <button class="btn-Costum">Detail</button> </Link>

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

              <h5 class="card-title">Sirsak</h5>
              <p class="card-text">Rp 6000</p>
             
              <p>stock:10</p>

            </div>
          </div>

          <div class="card list-produk" >
            <div className='item'>
              <div className='oval'></div>
              <img src={jambu} class="card-img-top   size-img" alt="" style={{ marginTop: '20px' }} />

              <div className='shopnow align-items-center'>
                <Link to='/produk/Buah/detail-Jambu-biji'><button class="btn-Costum">Detail</button> </Link>

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

              <h5 class="card-title">Jambu Biji</h5>
              <p class="card-text">Rp 3000</p>
             
              <p>stock:10</p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

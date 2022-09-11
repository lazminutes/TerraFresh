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


import Navbar from "../components/Navbar"

export default function Buah() {
    return (
        <>
       <Navbar/>
       <div className="container">
        <div className='card-title'>
          <h1>Buah Segar Hari ini</h1>
          </div>
          <div className='Sayur d-flex text-center'>
      <div class="card list-produk" >
        <div className='item'>
          <img src={apel} class="card-img-top size-img" alt=""  style={{marginTop:'30px'}}/>
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Apel</h5>
            <p class="card-text">Rp 5000</p>
            <div className='shopnow'>
           <Link to='/produk/Buah/detail-apel'><button class="btn-Costum">Detail</button> </Link>
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src={durian} class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Durian</h5>
            <p class="card-text">Rp 10.000</p>
            <div className='shopnow'>
           <Link to='/produk/Buah/detail-Durian'><button class="btn-Costum">Detail</button> </Link>
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src={jeruk} class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Jeruk</h5>
            <p class="card-text">Rp 5000</p>
            <div className='shopnow'>
           <Link to='/produk/Buah/detail-Jeruk'><button class="btn-Costum">Detail</button> </Link>
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src={mangga} class="card-img-top size-img " alt="" />
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
           <Link to='/produk/Buah/detail-Mangga'><button class="btn-Costum">Detail</button> </Link>
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src={melon} class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">melon</h5>
            <p class="card-text">Rp 6000</p>
            <div className='shopnow'>
           <Link to='/produk/Buah/detail-Melon'><button class="btn-Costum">Detail</button> </Link>
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src={naga} class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">naga</h5>
            <p class="card-text">Rp 8000</p>
            <div className='shopnow'>
           <Link to='/produk/Buah/detail-Naga'><button class="btn-Costum">Detail</button> </Link>
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item '>
          <img src={pepaya} class="card-img-top size-img" alt="" />
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
            <p class="card-text">Rp 6000</p>
            <div className='shopnow'>
           <Link to='/produk/Buah/detail-Pepaya'><button class="btn-Costum">Detail</button> </Link>
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src={pisang} class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Pisang</h5>
            <p class="card-text">Rp 4000</p>
            <div className='shopnow'>
           <Link to='/produk/Buah/detail-Pisang'><button class="btn-Costum">Detail</button> </Link>
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src='https://images.genpi.co/uploads/arsip/normal/2021/10/15/sering-makan-buah-rambutan-gula-darah-dan-3-penyakit-ini-am-oot1.jpeg' class="card-img-top  mini" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Rambutan</h5>
            <p class="card-text">Rp 3000</p>
            <div className='shopnow'>
           <Link to='/produk/Buah/detail-Rambutan'><button class="btn-Costum">Detail</button> </Link>
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>

        <div class="card list-produk" >
        <div className='item'>
          <img src='https://cdn0-production-images-kly.akamaized.net/4z5RGcfBjSLQ5rSgOY7mmCj2oV0=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2874491/original/038968300_1565087262-iStock-1040422630.jpg' class="card-img-top  mini" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Srikaya</h5>
            <p class="card-text">Rp 6000</p>
            <div className='shopnow'>
           <Link to='/produk/Buah/detail-Srikaya'><button class="btn-Costum">Detail</button> </Link>
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        </div>
      </div>
      </>
    )
  }
  
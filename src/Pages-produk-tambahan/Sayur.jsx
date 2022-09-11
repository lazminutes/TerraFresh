import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../Assets-produk/css-produk/produk.css'
//import sayuran
import sawi from '../Assets-Home/Img Swiper/sawi.png'
import bayam from '../Assets-Home/Img Swiper/bayam.png'
import cabai from '../Assets-Home/Img Swiper/cabai.png'
import kentang from '../Assets-Home/Img Swiper/kentang.png'
import kol from '../Assets-Home/Img Swiper/kol.png'
import paprika from '../Assets-Home/Img Swiper/paprika.png'
import wortel from '../Assets-Home/Img Swiper/wortel.png'
import Kangkung from '../Page-detail-sayuran/Detail-kangkung'
import Kecamba from '../Page-detail-sayuran/Detail-kecamba'
import Terong from '../Page-detail-sayuran/Detail-Terong'


export default function Sayur() {

  

    return (
        <>
        <Navbar/>
      <div className='container'>
        <div className='card-title'>
          <h1>Sayur Segar Hari ini</h1>
          </div>
          <div className='Sayur d-flex text-center'>


        <div class="card list-produk" >
        <div className='item'>
          <img src={sawi} class="card-img-top size-img" alt="" />
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
            <p class="card-text">Rp 2000</p>
            <div className='shopnow'>
         <Link to='/produk/sayur/detail-sawi'>  <button class="btn-Costum">Detail</button> </Link> 
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src={bayam} class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">bayam</h5>
            <p class="card-text">Rp 3000</p>
            <div className='shopnow'>
              <Link to='/produk/sayur/detail-bayam'>
            <button class="btn-Costum">Detail</button>  </Link>
           
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src={cabai} class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">cabai</h5>
            <p class="card-text">Rp 5000</p>
            <div className='shopnow'>
              <Link to='/produk/sayur/detail-cabai'>
            <button class="btn-Costum">Detail</button>  
            </Link>
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src={kentang} class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Kentang</h5>
            <p class="card-text">Rp 5000</p>
            <div className='shopnow'>
              <Link to='/produk/sayur/detail-Kentang'>
            <button class="btn-Costum">Detail</button>  
           </Link>
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src={kol} class="card-img-top mini" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Kol</h5>
            <p class="card-text">Rp 2000</p>
            <div className='shopnow'>
              <Link to='/produk/sayur/detail-Kol'>
            <button class="btn-Costum">Detail</button>  
           </Link>
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src={paprika} class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Paprika</h5>
            <p class="card-text">Rp 6000</p>
            <div className='shopnow'>
              <Link to='/produk/sayur/detail-Paprika'>
            <button class="btn-Costum">Detail</button>  
           </Link>
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src={wortel} class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Wortel</h5>
            <p class="card-text">Rp 4000</p>
            <div className='shopnow'>
              <Link to='/produk/sayur/detail-Wortel'> 
            <button class="btn-Costum">Detail</button>  
           </Link>
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src='https://desasesela.com/wp-content/uploads/2021/09/Kangkung.jpg'class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Kangkung</h5>
            <p class="card-text">Rp 3000</p>
            <div className='shopnow'>
              <Link to='/produk/sayur/detail-Kangkung'>
            <button class="btn-Costum">Detail</button>  
           </Link>
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <img src='https://asset-a.grid.id/crop/7x21:619x436/700x465/photo/2021/09/07/bean-sprouts-white-surface_55883-20210907070823.jpg' class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Kecamba</h5>
            <p class="card-text">Rp 6000</p>
            <div className='shopnow'>
               <Link to='/produk/sayur/detail-Kecamba'>
            <button class="btn-Costum">Detail</button>  
          </Link>
            <i className="fas fa-shopping-cart" />
            </div>
            <p>stock:10</p>
           
          </div>
        </div>

        <div class="card list-produk  " >
        <div className='item'>
          <img src='https://www.pngmart.com/files/1/Eggplant-PNG-Image.png' class="card-img-top size-img" alt="" />
          </div>
          <div class="card-body">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

            <h5 class="card-title">Terong</h5>
            <p class="card-text">Rp 6000</p>
            <div className='shopnow'>
              <Link to='/produk/sayur/detail-Terong'>
            <button class="btn-Costum">Detail</button>  
           </Link>
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
  
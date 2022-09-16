import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../Assets-produk/css-produk/produk.css'
//import sayuran
import sawi from '../Assets-Home/Img Swiper/sawi.png'
import bayam from '../Assets-Home/Img Swiper/bayam.png'
import cabai from '../Assets-Home/Img Swiper/cabai.png'
import kangkung from '../Assets-Home/Img Swiper/Kangkung.png'
import kol from '../Assets-Home/Img Swiper/kol.png'
import paprika from '../Assets-Home/Img Swiper/paprika.png'
import wortel from '../Assets-Home/Img Swiper/wortel.png'
import kentang from '../Assets-Home/Img Swiper/Kentang.png'
import kecamba from '../Assets-Home/Img Swiper/Kecamba.png'
import terong from '../Assets-Home/Img Swiper/Terong.png'
import bawang from '../Assets-Home/Img Swiper/Bawang.png'
import tomat from '../Assets-Home/Img Swiper/Tomat.png'



export default function Sayur() {

  

    return (
        <>
        <Navbar/>
      <div className='container'>
        <div className='card-title'>
          <h2 className='text-center '>Sayur Segar Hari ini</h2>
          </div>
          <div className='Sayur d-flex text-center'>


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
        <div class="card list-produk" >
        <div className='item'>
          <div className='oval'></div>
          <img src={bayam} class="card-img-top size-img tengah" alt="" />

          <div className='shopnow align-items-center'>
              <Link to='/produk/sayur/detail-bayam'>
            <button class="btn-Costum">Detail</button>  </Link>
           
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

            <h5 class="card-title">bayam</h5>
            <p class="card-text">Rp 3000</p>
           
            <p className='stock'>stock:10</p>
           
          </div>
        </div>
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
        <div class="card list-produk" >
        <div className='item'>
          <div className='oval'></div>
          <img src={kentang} class="card-img-top size-img tengah" alt="" />

          <div className='shopnow align-items-center'>
              <Link to='/produk/sayur/detail-Kentang'>
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

            <h5 class="card-title">Kentang</h5>
            <p class="card-text">Rp 5000</p>
         
            <p className='stock'>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <div className='oval'></div>
          <img src={kol} class="card-img-top mini tengah" alt="" />

          <div className='shopnow align-items-center'>
              <Link to='/produk/sayur/detail-Kol'>
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

            <h5 class="card-title">Kol</h5>
            <p class="card-text">Rp 2000</p>
           
            <p className='stock'>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <div className='oval'></div>
          <img src={paprika} class="card-img-top size-img tengah" alt="" />


          <div className='shopnow align-items-center'>
              <Link to='/produk/sayur/detail-Paprika'>
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

            <h5 class="card-title">Paprika</h5>
            <p class="card-text">Rp 6000</p>
          
            <p className='stock'>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <div className='oval'></div>
          <img src={wortel} class="card-img-top size-img tengah" alt="" />

          <div className='shopnow align-items-center'>
              <Link to='/produk/sayur/detail-Wortel'> 
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

            <h5 class="card-title">Wortel</h5>
            <p class="card-text">Rp 4000</p>
          
            <p className='stock'>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <div className='oval'></div>
          <img src={kangkung}class="card-img-top size-img tengah" alt="" />

          <div className='shopnow align-items-center'>
              <Link to='/produk/sayur/detail-Kangkung'>
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

            <h5 class="card-title">Kangkung</h5>
            <p class="card-text">Rp 3000</p>
           
            <p className='stock'>stock:10</p>
           
          </div>
        </div>
        <div class="card list-produk" >
        <div className='item'>
          <div className='oval'></div>
          <img src={kecamba} class="card-img-top size-img tengah" alt="" />

          <div className='shopnow align-items-center'>
               <Link to='/produk/sayur/detail-Kecamba'>
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

            <h5 class="card-title">Kecamba</h5>
            <p class="card-text">Rp 6000</p>
          
            <p className='stock'>stock:10</p>
           
          </div>
        </div>

        <div class="card list-produk  " >
        <div className='item'>
          <div className='oval'></div>
          <img src={terong} class="card-img-top size-img tengah sedang" alt="" />

          <div className='shopnow align-items-center'>
              <Link to='/produk/sayur/detail-Terong'>
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

            <h5 class="card-title">Terong</h5>
            <p class="card-text">Rp 6000</p>
           
            <p className='stock'>stock:10</p>
           
          </div>
        </div>

        <div class="card list-produk" >
        <div className='item'>
          <div className='oval'></div>
          <img src={bawang}class="card-img-top size-img tengah" alt="" />

          <div className='shopnow align-items-center'>
               <Link to='/produk/sayur/detail-Bawang-Merah'>
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

            <h5 class="card-title">Bawang Merah</h5>
            <p class="card-text">Rp 3000</p>
           
            <p className='stock'>stock:10</p>
           
          </div>
        </div>

        <div class="card list-produk" >
        <div className='item'>
          <div className='oval'></div>
          <img src={tomat} class="card-img-top size-img tengah" alt="" />

          <div className='shopnow align-items-center'>
               <Link to='/produk/sayur/detail-Tomat'>
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

            <h5 class="card-title">Tomat</h5>
            <p class="card-text">Rp 5000</p>
           
            <p className='stock'>stock:10</p>
           
          </div>
        </div>
        </div>
      </div>
      </>
    )
  }
  
import Swiper from '../Assets-Home/Swiper/Swiper'
// import Gambar
import slide1 from '../assets/Img/slide1.png'
import slide2 from '../assets/Img/slide2.png'
import slide3 from '../assets/Img/slide3.png'

//import Link
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import '../Assets-Home/Home-css/home.css'
export default function Home() {
  return (


    <div classNameName='home'>

      {/* // Carousel start */}
      <Navbar />
      <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* slide 1 */}
          <div className="carousel-item active">
            <div className='container d-flex justify-content-between'>
              <div className='d-flex justify-content-center align-items-start flex-column ms-5'>

                <h5 className='info'>#Baru Di Petik</h5>
                <h1 className='Text'>Apel Segar </h1>
                <h3 className='Text'>It's Organic</h3>
                <p className='deskripsi'>Apel yang kami tanam 100% Organik, tanpa menggunakan pestisida dalam Penanamannya, sehingga aman di konsumsi tanpa mengganggu kesehatan.   </p>
                <Link to='/product'>
                  <button type="button" class=" btn-Costum">Shop Now</button>
                </Link>
              </div>
              <div>
                <img src={slide1} className="img" alt="..." />

              </div>
            </div>
          </div>


          {/* slide 2 */}
          <div className="carousel-item ">
            <div className='container d-flex justify-content-between'>
              <div className='d-flex justify-content-center align-items-start flex-column ms-5'>

                <h5 className='info'>#Sayur Segar</h5>
                <h1 className='Text'>  Sayuran Organik </h1>
                <h3 className='Text'></h3>
                <p className='deskripsi'>Sayuran kami langsung berasal dari Petani  yang ditanam dengan baik, tanpa menggunakan pestisida atau pun obat-obatan.Untuk lebih jelasnya bisa di baca di <b>tentang kami</b> </p>
                <Link to="/about">
                  <button type="button" class=" btn-Costum">About Us</button>
                </Link>
              </div>
              <div>
                <img src={slide2} className="img2" alt="..." />

              </div>
            </div>
          </div>

          {/* slide 3 */}
          <div className="carousel-item ">
            <div className='container d-flex justify-content-between'>
              <div className='d-flex justify-content-center align-items-start flex-column ms-5'>

                <h5 className='info'>#Diskon!!!</h5>
                <h1 className='Text'>  For New User </h1>

                <p className='deskripsi'>kami memberikan diskon 40% bagi setiap pengguna baru, sebgai ucapan terima kasih kepada pengunjung yang menjadi Konsumnen kami </p>
                <Link to='/login'>
                  <button type="button" class=" btn-Costum">Login Now!!</button>
                </Link>
              </div>
              <div>
                <img src={slide3} className="img2" alt="..." />

              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* carousel end */}

      {/* fitur */}
      <div className='fitur'>
        <div className='text-center '>
          <h1 className='title-fitur'>FITUR KAMI</h1>
          <br />
        </div>

        <div className='fitur-all'>

          <div className='fitur-1 col-md-3 text-center background-white0'>
            <i class="fa-solid fa-truck-fast icon"></i>
            <br />
            <br />
            <p className='deskripsi'>fast delivery
              aman sampai tujuan</p>
          </div>


          <div className='fitur-1 col-md-3 text-center background-white'>
            <i class="fa-solid fa-hand-holding-dollar icon"></i>
            <br />
            <br />
            <p className='deskripsi'>COD System, bisa bayar di tempat</p>
          </div>


          <div className='fitur-1 col-md-3 text-center background-white1'>
            <i class="fa-solid fa-seedling icon" ></i>
            <br />
            <br />
            <p className='deskripsi'>100% Organic, tanpa Pestisida</p>
          </div>
        </div>
      </div>
      {/* fitur end */}
     
      <div className='Top-recomed'>
        <div className='container'>
        <div className='heading'><h1>Top Recomended</h1></div>
        <Swiper/>
        </div>
      </div>
      </div>
   
  )
}

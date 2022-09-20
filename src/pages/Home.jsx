import { useContext } from 'react'
import Swiper from './Swiper'
import { AppContext } from '../context/AppContext'
// import Gambar
import slide1 from '../assets/Img/slide1.png'
import slide2 from '../assets/Img/slide2.png'
import slide3 from '../assets/Img/slide3.png'

//import Link
import { Link } from 'react-router-dom'

import '../assets/css/home.css'
import Footer from './Footer'

export default function Home() {
  const Contex = useContext(AppContext)
  return (
    <div className='home'>
      {/* // Carousel start */}

      <div id="carouselExampleFade" className="carousel slide carousel-fade bg-warning" data-bs-ride="carousel ">
        <div className="carousel-inner backgroundHome">

          {/* slide 1 */}
          <div className="carousel-item active">
            <div className='container d-flex justify-content-between'>
              <div className='d-flex justify-content-center align-items-start flex-column ms-5'>

                <h5 className='info'>{Contex.lang === "en" ? "#freshly picked" : "#Baru di Petik"}</h5>
                <h1 className='Text'>{Contex.lang === "en" ? "Fresh Apple" : "Apel Segar"} </h1>
                <h3 className='Text'>{Contex.lang === "en" ? "100% Organic" : " 100% Organik"}</h3>
                <p className='deskripsi'>{Contex.lang === "en" ? "The apples that we plant are 100% organic, without the use of pesticides in their planting, so they are safe for consumption without disturbing health." : " Apel yang kami tanam 100% Organik, tanpa menggunakan pestisida dalam Penanamannya, sehingga aman di konsumsi tanpa mengganggu kesehatan. "}  </p>
                <Link to='/product'>
                  <button type="button" className="btn btn-success">{Contex.lang === "en" ? "Shop Now" : " Belanja Sekarang"}</button>
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

                <h5 className='info'>{Contex.lang === "en" ? "#Fresh Vegetables" : " #Sayur Segar"}</h5>
                <h1 className='Text'>{Contex.lang === "en" ? "Organic Vegetables" : " Sayur Segar Organik"} </h1>
                <h3 className='Text'></h3>
                <p className='deskripsi'>{Contex.lang === "en" ? "Our vegetables come directly from farmers who are planted well, without using pesticides or drugs. For more details, please read here" : " Sayuran kami langsung berasal dari Petani  yang ditanam dengan baik, tanpa menggunakan pestisida atau pun obat-obatan.Untuk lebih jelasnya bisa di baca di "}<b>{Contex.lang === "en" ? "About Us" : "Tentang Kami"}</b> </p>
                <Link to="/about">
                  <button type="button" className="btn-Costum">{Contex.lang === "en" ? "About Us" : "Tentang Kami"}</button>
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

                <h5 className='info'>{Contex.lang === "en" ? "#Discount!!!" : "#Diskon!!!"}</h5>
                <h1 className='Text'> {Contex.lang === "en" ? "For New User" : "Untuk Pengguna Baru"} </h1>

                <p className='deskripsi'>{Contex.lang === "en" ? "we give a 40% discount for every new user, as a thank you to visitors who become our consumers" : "Untuk Pengguna Barukami memberikan diskon 40% bagi setiap pengguna baru, sebgai ucapan terima kasih kepada pengunjung yang menjadi Konsumnen kami"} </p>
                <Link to='/login'>
                  <button type="button" className="btn-Costum">{Contex.lang === "en" ? "Login Now!!" : "Buruan Login!!"}</button>
                </Link>
              </div>
              <div>
                <img src={slide3} className="img2" alt="..." />

              </div>
            </div>
          </div>
        </div >
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div >
      {/* carousel end */}

      {/* fitur */}
      <div className='fitur '>
        <div className='text-center '>
          <h1 className='title-fitur title-web'>{Contex.lang === "en" ? "OUR FEATURE" : "FITUR KAMI"}</h1>
          <br />
        </div>

        <div className='fitur-all'>

          <div className='fitur-1 col-md-3 text-center background-white0'>
          <i className="a-solid fa-truck-fast icon "></i>
            <br />
            <br />
            <p className='deskripsi '>{Contex.lang === "en" ? "fast delivery safe to destination" : "pengiriman cepat selamat sampai tujuan"}</p>
          </div>


          <div className='fitur-1 col-md-3 text-center background-white'>
          <i className="a-solid fa-hand-holding-dollar icon "></i>
            <br />
            <br />
            <p className='deskripsi'>{Contex.lang === "en" ? "COD system can pay on the spot" : "COD bisa bayar ditempat"}</p>
          </div>


          <div className='fitur-1 col-md-3 text-center background-white1'>
          <i className="a-solid fa-seedling icon " ></i>
            <br />
            <br />
            <p className='deskripsi'>{Contex.lang === "en" ? "100% Organic without pesticides" : "100% Organik, tanpa Pestisida"}</p>
          </div >
        </div >
      </div >
      {/* fitur end */}

      <div className='Top-recomed' >
        <div className='container'>
          <div className='heading'><h1>{Contex.lang === "en" ? "Top Recomended" : "Top Rekomendasi"}</h1></div>
          <Swiper />
        </div>
      </div>
      <Footer />
    </div >

  )
}

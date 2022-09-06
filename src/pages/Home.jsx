// import Gambar
import slide1 from '../assets/Img/slide1.png'
import slide2 from '../assets/Img/slide2.png'


import Navbar from '../components/Navbar'
import '../CSS/Home/home.css'
export default function Home() {
  return (
    <div classNameName=''>
      <Navbar />
      <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
        <div className="carousel-inner">
          
          {/* slide 1 */}
          <div className="carousel-item active">
            <div className='container d-flex justify-content-between'>
              <div className='d-flex justify-content-center align-items-start flex-column ms-5'>
               
                <h5 className='info'>#Baru Di Petik</h5>
                <h1 className='Text'>  Apel Segar </h1>
                <h3 className='Text'>It's Organic</h3>
                <p className='deskripsi'>Apel yang kami tanam 100% Organik, tanpa menggunakan pestisida dalam Penanamannya, sehingga aman di konsumsi tanpa mengganggu kesehatan.   </p>
               
                <button type="button" class=" btn-Costum">Shop Now</button>

              </div>
              <div>
                <img src={slide1} className="img" alt="..." />

              </div>
            </div>
          </div>


          {/* slide 2 */}
          <div className="carousel-item active">
            <div className='container d-flex justify-content-between'>
              <div className='d-flex justify-content-center align-items-start flex-column ms-5'>
               
                <h5 className='info'>#Sayur Segar</h5>
                <h1 className='Text'>  Sayuran Organik </h1>
                <h3 className='Text'></h3>
                <p className='deskripsi'>Sayuran kami langsung berasal dari Petani  yang ditanam dengan baik, tanpa menggunakan pestisida atau pun obat-obatan.Untuk lebih jelasnya bisa di baca di <b>tentang kami</b> </p>
               
                <button type="button" class=" btn-Costum">About Us</button>

              </div>
              <div>
                <img src={slide2} className="img2" alt="..." />

              </div>
            </div>
          </div>

          {/* slide 3 */}
          <div className="carousel-item active">
            <div className='container d-flex justify-content-between'>
              <div className='d-flex justify-content-center align-items-start flex-column ms-5'>
               
                <h5 className='info'>#Baru Di Petik</h5>
                <h1 className='Text'>  Apel Segar </h1>
                <h3 className='Text'>It's Organic</h3>
                <p className='deskripsi'>Buah yang kami punya semua nya Organik, Tanpa Pestisida dan aman di komsumsi bersama keluarga, rasa nya manis dan segar</p>
               
                <button type="button" class=" btn-Costum">Shop Now</button>

              </div>
              <div>
                <img src={slide1} className="img" alt="..." />

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
    </div>
  )
}

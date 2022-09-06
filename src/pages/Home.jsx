import slide1 from '../assets/Img/slide1.png'
import Navbar from '../components/Navbar'
import '../CSS/Home/home.css'
export default function Home() {
  return (
    <div classNameName=''>
      <Navbar/>
<div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className='container d-flex justify-content-between'>
      <div className='d-flex justify-content-center align-items-start flex-column ms-5'>
        <h1>dwad</h1>
      </div>
      <div>
      <img src={slide1} className="d-block w-10" alt="..."/>
      </div>
      </div>  

    </div>
    <div className="carousel-item">
      <img src={slide1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide1} className="d-block w-100" alt="..."/>
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

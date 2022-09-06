import slide1 from '../assets/Img/slide1.jpg'
import Navbar from '../components/Navbar'
import '../CSS/Home/home.css'
export default function Home() {
  return (
    <div classNameName=''>
      <Navbar/>
<div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block" >
        <h5>Jangan sampai kelewatan </h5>
       <button classNameName="btn-warning bg-warning">BUY NOW</button>
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

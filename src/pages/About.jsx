import React from "react"
import Navbar from "../components/Navbar"
import { AppContext } from "../Context/AppContext"
import Footer from './Footer'

export default function About() {
  const Contex = React.useContext(AppContext)
  return (
    <>
      <Navbar />
      <div className="Title bg-warning">
        
        <h3 className="title-web text-center">Terra Team</h3>
        <div className="imgAbout text-center d-flex align-items-center">

          <div className='Link'>
           
          <a href="https://nando-portofolio.netlify.app/" target="_blank"> 
           
            <img src="https://nando-portofolio.netlify.app/static/media/foto.b2867b0ab5404a6aeff3.jpg" alt="" className="anggota nimate__animated animate__bounceIn animate__delay-1s" />
              </a>
            
            <p className="text-putih">Nandito</p>
           
          
          </div>

          
         

          <div className='Link'>
          <a href="https://cool-tanuki-5aab5a.netlify.app/" target="_blank"> 
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHYdn6uFgam9A/profile-displayphoto-shrink_800_800/0/1649523686513?e=2147483647&v=beta&t=7b0lOS_gqC9MVD4mo3OAxxU_BqiQyskaBFF7Zd59xTM" alt="" className="anggota nimate__animated animate__bounceIn animate__delay-0s" />
             </a>
            <p className="text-putih">Dika</p>
           
          </div>



          <div className='Link'>
          <a href=""  target="_blank">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/300754444_783231842930633_1067218521195121380_n.jpg?ccb=11-4&oh=01_AVzvj66P2W-rs2be90MVd13vHBVei_cFvfBeVWpolDmYrg&oe=63305F2D" alt="" className="anggota nimate__animated animate__bounceIn animate__delay-1s" />
             </a>
            <p className="text-putih">Kharmila</p>
           
          </div>


          <div className='Link' >
          <a href="https://personalwebme.netlify.app/" target="_blank">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/295203360_3229903683926535_3117951425647528933_n.jpg?ccb=11-4&oh=01_AVx-lrETWN3D_MAyF4Sho2kRXfhFSj_fGNzPVsI3TuD3iw&oe=632FA83D" alt="" className="anggota nimate__animated animate__bounceIn animate__delay-1s" />
            </a>
            <p className="text-putih">Putri</p>
          
          </div>

    
          <div className='Link' >
          <a href="https://lazarus-s2-technical1.netlify.app/" target="_blank">
            <img src="https://lazarus-s2-technical1.netlify.app/assets/profile_pic.c348e7ee.png" alt="" className="anggota nimate__animated animate__bounceIn animate__delay-1s" />
            </a>
            <p className="text-putih">Lazarus</p>
            
          </div>

        </div>

        <div>
          <h1 className="title-web text-center ">Terra Fresh</h1>
          <p className="col-10 text-center about-text">{Contex.lang === 'en'?'TerraFresh is useful to help buyers in choosing quality fruits and vegetables, rich in nutrients, and environmentally friendly. The problems that exist in various countries, especially in Indonesia, commercial fruit and vegetables on the market today still contain many chemicals. This is certainly worrying people who want to buy because of various negative impacts on health. To answer this problem, TerraFresh is here to help the community in choosing and buying fruits and vegetables that are rich in nutritional content and are 100% organic without chemicals.':"TerraFresh berguna untuk membantu pembeli dalam memilih buah dan sayuran yang berkualitas, kaya akan kandungan gizi, dan ramah lingkungan.  Permasalahan yang ada diberbagai negara khususnya di Indonesia, buah maupun sayuran yang komersil di pasaran  saat ini masih banyak yang mengandung bahan kimia. Hal tersebut tentunya mengkhawatirkan masyarakat yang ingin membeli karena berbagai dampak negatif bagi kesehatan. Untuk menjawab permasalahan tersebut, TerraFresh ini hadir untuk membantu masyarakat dalam memilih dan membeli buah maupun sayuran yang kaya akan kandungan gizi serta 100% organik tanpa bahan kimia.  "} </p>
        </div>

      </div>
      <Footer/>
    </>
  )
}

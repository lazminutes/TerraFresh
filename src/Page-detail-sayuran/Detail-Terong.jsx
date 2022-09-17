import { Link } from 'react-router-dom'
import '../Assets-produk/Css-Detail/Detail.css'
import React from 'react'
import { AppContext } from '../Context/AppContext'

export default function Terong() {
  const Contex =React.useContext(AppContext)
  return (
    <div className="container">
      <Link to='/produk/sayur' className='Link '>
      <h1><i class="fa-solid fa-angle-left stars" ></i>{Contex.lang ==='en' ?'Back':'Kembali'}</h1>
      </Link>
      <div className="row d-flex">

        <div className="col-md-4">

          <div id="carouselExampleIndicators" class="carousel slide jarak-img" data-bs-ride="carousel">
            <div className='carousel-controls'>
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1" style={{ backgroundImage:"url(https://cms.sehatq.com/public/img/article_img/di-balik-kelezatannya-ini-manfaat-terong-ungu-untuk-tubuh-anda-1572343600.jpg)" }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundImage:"url(https://awsimages.detik.net.id/community/media/visual/2017/02/17/d984d581-dd4b-45a6-8a00-bf8ba40ccdf2_169.jpg?w=700&q=90)" }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"style={{ backgroundImage:"url(https://asset.kompas.com/crops/44x0REJzhINXNuA8J1SakgbBqGM=/35x0:983x632/750x500/data/photo/2021/07/25/60fd94dadbd49.jpg  )" }}>
                </button>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="carousel-inner bg-light">
              <div class="carousel-item active text-center gambar-sawi">
                <img src="https://cms.sehatq.com/public/img/article_img/di-balik-kelezatannya-ini-manfaat-terong-ungu-untuk-tubuh-anda-1572343600.jpg" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item text-center gambar-sawi">
                <img src="https://awsimages.detik.net.id/community/media/visual/2017/02/17/d984d581-dd4b-45a6-8a00-bf8ba40ccdf2_169.jpg?w=700&q=90" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item text-center gambar-sawi">
                <img src="https://asset.kompas.com/crops/44x0REJzhINXNuA8J1SakgbBqGM=/35x0:983x632/750x500/data/photo/2021/07/25/60fd94dadbd49.jpg" class="d-block w-100" alt="..." />
              </div>

            </div>

          </div>

        </div>

        <div className="col-md-5 ">
          <div className="Detail-page text-center">
            <h1>Terong</h1>
            <br />
            <div className='deskripsi-sawi d-flex'>
              <p>{Contex.lang ==='en' ?'sold':'Terjual'} <span>27</span></p>
              <i class="fas fa-star stars">5</i>
              <p><span>(28 rating)</span></p>
            </div>

          </div>
          <br />
          <div className='harga'>
            <h1>Rp 6000</h1>
          </div>

          <div className='des-detail'>
            <br />
            <h5>Detail:</h5>
            <p><span>{Contex.lang ==='en' ?'Condition:':'Kondisi:'}</span>{Contex.lang ==='en' ?'Fresh,Just Picked':'Segar,Baru Petik'}</p>
            <p><span>{Contex.lang ==='en' ?'Heavy:':'Berat:'}</span>100 g</p>
            <p><span>{Contex.lang ==='en' ?'Category':'Kategori'}</span>{Contex.lang ==='en' ?'Vegetable':'Sayur'}</p>
            <p>{Contex.lang ==='en' ?'The eggplant that we sell is 100% grown without using pesticides because it is 100% organic. A recent study in Egypt proved that purple eggplant helps overcome impotence in men. Consumption of purple eggplant also helps increase sexual desire in both men and women because of its high vitamin, mineral and antioxidant content.':'Terong yang kami jual 100% ditanam tanpa menggunakan pestisida karana 100% organik,Sebuah studi terbaru di Mesir membuktikan bahwa terong ungu membantu mengatasi impotensi pada laki-laki. Konsumsi terong ungu juga membantu meningkatkan hasrat seksual pada laki-laki dan perempuan karena kandungan vitamin, mineral, dan antioksidannya yang tinggi'} </p>
          </div>
        </div>

        <div className="col-md-3 Rincian">
          <div className="cart-detail">
          <div className="card-body p-7">
                <div className="row d-flex justify-content-between align-items-center">
                  
                
                    <h2 className="lead fw-normal mb-2">Terong</h2>
                   <h5>{Contex.lang ==='en' ?'set Purchase amount':'atur jumlah Pembelian'}</h5>
                 
                  <div className="col-md-3 col-lg-3 col-xl-6 d-flex">
                    <button
                      className="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <input
                      id="form1"
                      min={0}
                      name="quantity"
                      defaultValue={2}
                      type="number"
                      className="form-control form-control-sm"
                    />
                    <button
                      className="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    >
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0"><span>Stock Total:</span>10</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" className="text-danger">
                      <i className="fas fa-trash fa-lg" />
                    </a>
                  </div>
                </div>
                <br />
                <div className='text-center btn-detail'>
                <button className='btn btn-warning'>{Contex.lang ==='en' ?'Cart':'Keranjang'}</button>
                <br />
                <br />
                <button className='btn-beli'>{Contex.lang ==='en' ?'Buy Now':'Beli Sekarang'}</button>
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>

  )
}

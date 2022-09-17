import { Link } from 'react-router-dom'
import '../Assets-produk/Css-Detail/Detail.css'
import React from 'react'
import { AppContext } from '../Context/AppContext'

export default function Kangkung() {
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
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1" style={{ backgroundImage:"url(https://foto.kontan.co.id/kH6W8v0sFxKxEewe4EEBjZ5JAzM=/smart/2021/06/16/414321180p.jpg)" }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundImage:"url(https://risetcdn.jatimtimes.com/images/2022/02/27/Kangkung-Foto-klikdokter-P80b0ee85dacfbf66.md.jpg)" }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"style={{ backgroundImage:"url(https://cdf.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/manfaat-kangkung.width-800.jpegquality-80.jpg  )" }}>
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
                <img src="https://foto.kontan.co.id/kH6W8v0sFxKxEewe4EEBjZ5JAzM=/smart/2021/06/16/414321180p.jpg" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item text-center gambar-sawi">
                <img src="https://risetcdn.jatimtimes.com/images/2022/02/27/Kangkung-Foto-klikdokter-P80b0ee85dacfbf66.md.jpg" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item  text-center gambar-sawi">
                <img src="https://cdf.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/manfaat-kangkung.width-800.jpegquality-80.jpg" class="d-block w-100" alt="..." />
              </div>

            </div>

          </div>

        </div>

        <div className="col-md-5 ">
          <div className="Detail-page text-center">
            <h1> Kangkung</h1>
            <br />
            <div className='deskripsi-sawi d-flex'>
              <p>{Contex.lang ==='en' ?'sold':'Terjual'} <span>13</span></p>
              <i class="fas fa-star stars">5</i>
              <p><span>(22 rating)</span></p>
            </div>

          </div>
          <br />
          <div className='harga'>
            <h1>Rp 3000</h1>
          </div>

          <div className='des-detail'>
            <br />
            <h5>Detail:</h5>
            <p><span>{Contex.lang ==='en' ?'Condition:':'Kondisi:'}</span>{Contex.lang ==='en' ?'Fresh,Just Picked':'Segar,Baru Petik'}</p>
            <p><span>{Contex.lang ==='en' ?'Heavy:':'Berat:'}</span>90 g</p>
            <p><span>{Contex.lang ==='en' ?'Category':'Kategori'}</span>{Contex.lang ==='en' ?'Vegetable':'Sayur'}</p>
            <p> {Contex.lang ==='en' ?'The kale vegetables that we sell are 100% grown without using pesticides because they are 100% organic. This very easy-to-process vegetable has many benefits and nutritional content for the body. Yes, the benefits of kale are very diverse, ranging from maintaining eye health, preventing diabetes, fighting liver disease, and others.':'Sayur Kangkung yang kami jual 100% ditanam tanpa menggunakan pestisida karana 100% organik,Sayuran yang sangat mudah diolah ini punya banyak manfaat dan kandungan gizi untuk tubuh. Ya, khasiat kangkung ternyata sangat beragam, mulai dari menjaga kesehatan mata, mencegah diabetes, melawan penyakit hati (liver), dan lainnya.'} </p>
          </div>
        </div>

        <div className="col-md-3 Rincian">
          <div className="cart-detail">
          <div className="card-body p-7">
                <div className="row d-flex justify-content-between align-items-center">
                  
                
                    <h2 className="lead fw-normal mb-2">Kangkung</h2>
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

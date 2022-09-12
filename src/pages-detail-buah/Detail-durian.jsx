import { Link } from 'react-router-dom'
import '../Assets-produk/Css-Detail/Detail.css'


export default function Durian() {
  return (
    <div className="container">
      <Link to='/produk/buah' className='Link '>
      <h1><i class="fa-solid fa-angle-left stars" ></i>Back</h1>
      </Link>
      <div className="row d-flex">

        <div className="col-md-4">

          <div id="carouselExampleIndicators" class="carousel slide jarak-img" data-bs-ride="carousel">
            <div className='carousel-controls'>
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1" style={{ backgroundImage:"url(https://foto.kontan.co.id/Yp201LSkwMEHn1ukrTpaZA9c_Mk=/smart/2022/05/31/921220359p.jpg)" }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundImage:"url(https://asset.kompas.com/crops/-UiRgla2rB23sBS-zG0RhxmCpJU=/0x39:676x490/780x390/data/photo/2020/02/20/5e4e5b40c6428.jpg)" }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"style={{ backgroundImage:"url(http://assets.kompasiana.com/items/album/2021/04/22/jonny-clow-xza4jue7edm-unsplash-60810f7c8ede4841c83a8a53.jpg  )" }}>
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
                <img src="https://foto.kontan.co.id/Yp201LSkwMEHn1ukrTpaZA9c_Mk=/smart/2022/05/31/921220359p.jpg" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item  text-center gambar-sawi">
                <img src="https://asset.kompas.com/crops/-UiRgla2rB23sBS-zG0RhxmCpJU=/0x39:676x490/780x390/data/photo/2020/02/20/5e4e5b40c6428.jpg" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item  text-center gambar-sawi">
                <img src="http://assets.kompasiana.com/items/album/2021/04/22/jonny-clow-xza4jue7edm-unsplash-60810f7c8ede4841c83a8a53.jpg" class="d-block w-100" alt="..." />
              </div>

            </div>

          </div>

        </div>

        <div className="col-md-5 ">
          <div className="Detail-page text-center">
            <h1>Durian</h1>
            <br />
            <div className='deskripsi-sawi d-flex'>
              <p>terjual <span>15</span></p>
              <i class="fas fa-star-half-alt stars">3</i>
              <p><span>(3,9 rating)</span></p>
            </div>

          </div>
          <br />
          <div className='harga'>
            <h1>Rp 10.000</h1>
          </div>

          <div className='des-detail'>
            <br />
            <h5>Detail:</h5>
            <p><span>Kondisi:</span>Segar,Pemetikan 2 hari </p>
            <p><span>Berat:</span>3 kg g</p>
            <p><span>Kategori:</span>Buah</p>
            <p> Durian  yang kami jual 100% ditanam tanpa menggunakan pestisida karana 100% organik,Durian juga mengandung kalium yang dipercaya dapat memberikan beragam kebaikan untuk tubuh. Setidaknya terkandung 436 mg kalium di dalam 1 buah durian. Kalium sendiri dapat membantu tubuh dalam menjaga kesehatan otot, tulang, saraf dan pembuluh darah, serta menurunkan tekanan darah tinggi. </p>
          </div>
        </div>

        <div className="col-md-3 Rincian">
          <div className="cart-detail">
          <div className="card-body p-7">
                <div className="row d-flex justify-content-between align-items-center">
                  
                
                    <h2 className="lead fw-normal mb-2"></h2>
                   <h5>Atur Jumlah Pembelian</h5>
                 
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
                <button className='btn btn-warning'>Keranjang</button>
                <br />
                <br />
                <button className='btn-beli'>Beli Sekarang</button>
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>

  )
}

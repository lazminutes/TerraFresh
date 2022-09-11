import { Link } from 'react-router-dom'
import '../Assets-produk/Css-Detail/Detail.css'


export default function Jambu() {
  return (
    <div className="container">
      <Link to='/produk/buah' className='Link '>
      <h1><i class="fa-solid fa-angle-left stars" ></i>Back</h1>
      </Link>
      <div className="row d-flex">

        <div className="col-md-4">

          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div className='carousel-controls'>
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1" style={{ backgroundImage:"url(https://cdn1-production-images-kly.akamaized.net/975JKeyMdOPveo3s1BeTv3XoXCM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1906218/original/077629500_1518794656-Benarkah-Tanaman-Jambu-Efektif-Atasi-Diare.jpg)" }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundImage:"url(https://asset.kompas.com/crops/UNge9JGnL9t0b9qsbhjBYcMKBvU=/0x0:1000x667/780x390/data/photo/2021/05/30/60b35ae15c781.jpg)" }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"style={{ backgroundImage:"url(https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/ayobandung/bank_image/medium/10-manfaat-jambu-biji-merah-untuk-kesehatan-tubuh.jpg  )" }}>
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
            <div class="carousel-inner">
              <div class="carousel-item active text-center gambar-sawi">
                <img src="https://cdn1-production-images-kly.akamaized.net/975JKeyMdOPveo3s1BeTv3XoXCM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1906218/original/077629500_1518794656-Benarkah-Tanaman-Jambu-Efektif-Atasi-Diare.jpg" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item  text-center gambar-sawi">
                <img src="https://asset.kompas.com/crops/UNge9JGnL9t0b9qsbhjBYcMKBvU=/0x0:1000x667/780x390/data/photo/2021/05/30/60b35ae15c781.jpg" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item  text-center gambar-sawi">
                <img src="https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/ayobandung/bank_image/medium/10-manfaat-jambu-biji-merah-untuk-kesehatan-tubuh.jpg" class="d-block w-100" alt="..." />
              </div>

            </div>

          </div>

        </div>

        <div className="col-md-5 ">
          <div className="Detail-page text-center">
            <h1>Jambu Biji</h1>
            <br />
            <div className='deskripsi-sawi d-flex'>
              <p>terjual <span>15</span></p>
              <i class="fas fa-star-half-alt stars">3</i>
              <p><span>(3,9 rating)</span></p>
            </div>

          </div>
          <br />
          <div className='harga'>
            <h1>Rp 3000</h1>
          </div>

          <div className=''>
            <br />
            <h5>Detail:</h5>
            <p><span>Kondisi:</span>Segar,baru di petik </p>
            <p><span>Berat:</span>3 kg g</p>
            <p><span>Kategori:</span>Buah</p>
            <p> Jambu Biji  yang kami jual 100% ditanam tanpa menggunakan pestisida karana 100% organik,Karena mengandung vitamin C tinggi, jambu biji dapat juga dimanfaatkan untuk membantu mengobati sariawan maupun gusi bengkak. Hal ini dikarenakan, vitamin C berperan dalam proses penyembuhan luka dan membangun daya tahan tubuh melawan infeksi. </p>
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

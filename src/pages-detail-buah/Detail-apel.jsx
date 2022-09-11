import { Link } from 'react-router-dom'
import '../Assets-produk/Css-Detail/Detail.css'


export default function Apel() {
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
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1" style={{ backgroundImage:"url(https://faktualnews-prod.s3.ap-southeast-1.amazonaws.com/images/2019/02/apel-1.jpg)" }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundImage:"url(https://cdn1.katadata.co.id/media/images/thumb/2021/10/27/Ilustrasi_buah_apel-2021_10_27-11_10_29_cea6996a3c47dbb3e1e9615772a00f85_620x413_thumb.jpg)" }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"style={{ backgroundImage:"url(https://awsimages.detik.net.id/community/media/visual/2022/04/04/apel-malang-yang-khas-hingga-malang-raya-mendapat-julukan-kota-apel-4_169.jpeg?w=1200  )" }}>
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
                <img src="https://faktualnews-prod.s3.ap-southeast-1.amazonaws.com/images/2019/02/apel-1.jpg" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item  text-center gambar-sawi">
                <img src="https://cdn1.katadata.co.id/media/images/thumb/2021/10/27/Ilustrasi_buah_apel-2021_10_27-11_10_29_cea6996a3c47dbb3e1e9615772a00f85_620x413_thumb.jpg" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item  text-center gambar-sawi">
                <img src="https://awsimages.detik.net.id/community/media/visual/2022/04/04/apel-malang-yang-khas-hingga-malang-raya-mendapat-julukan-kota-apel-4_169.jpeg?w=1200" class="d-block w-100" alt="..." />
              </div>

            </div>

          </div>

        </div>

        <div className="col-md-5 ">
          <div className="Detail-page text-center">
            <h1>Apel</h1>
            <br />
            <div className='deskripsi-sawi d-flex'>
              <p>terjual <span>20</span></p>
              <i class="fas fa-star stars">5</i>
              <p><span>(10 rating)</span></p>
            </div>

          </div>
          <br />
          <div className='harga'>
            <h1>Rp 5000</h1>
          </div>

          <div className='des-detail'>
            <br />
            <h5>Detail:</h5>
            <p><span>Kondisi:</span>Segar,baru petik</p>
            <p><span>Berat:</span>40 g</p>
            <p><span>Kategori:</span>Buah</p>
            <p> Buah yang kami jual 100% ditanam tanpa menggunakan pestisida karana 100% organik,Mengonsumsi dua atau tiga apel merah mentah sehari dapat membantu menjaga kesehatan jantung. Hal itu juga berlaku bagi jus apel merah. Selain itu, ini memainkan peran penting dalam menurunkan tekanan darah tinggi. </p>
          </div>
        </div>

        <div className="col-md-3 Rincian">
          <div className="cart-detail">
          <div className="card-body p-7">
                <div className="row d-flex justify-content-between align-items-center">
                  
                
                    <h2 className="lead fw-normal mb-2">Apel</h2>
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

import { Link } from 'react-router-dom'
import '../Assets-produk/Css-Detail/Detail.css'


export default function Kentang() {
  return (
    <div className="container">
      <Link to='/produk/sayur' className='Link '>
      <h1><i class="fa-solid fa-angle-left stars" ></i>Back</h1>
      </Link>
      <div className="row d-flex">

        <div className="col-md-4">

          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div className='carousel-controls'>
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1" style={{ backgroundImage:"url(https://awsimages.detik.net.id/community/media/visual/2017/02/02/32fb49bc-a1b8-4a8c-9349-a84c1f7083fc.jpg?w=700&q=90)" }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundImage:"url(https://www.taysbakers.com/wp-content/uploads/2016/04/Kentang-e1461740372213-738x369.jpg)" }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"style={{ backgroundImage:"url(https://statik.tempo.co/data/2017/03/21/id_591873/591873_620.jpg  )" }}>
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
                <img src="https://awsimages.detik.net.id/community/media/visual/2017/02/02/32fb49bc-a1b8-4a8c-9349-a84c1f7083fc.jpg?w=700&q=90" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item  text-center gambar-sawi">
                <img src="https://www.taysbakers.com/wp-content/uploads/2016/04/Kentang-e1461740372213-738x369.jpg" class="d-block w-100" alt="..." />
              </div>

              <div class="carousel-item  text-center gambar-sawi">
                <img src="https://statik.tempo.co/data/2017/03/21/id_591873/591873_620.jpg" class="d-block w-100" alt="..." />
              </div>

            </div>

          </div>

        </div>

        <div className="col-md-5 ">
          <div className="Detail-page text-center">
            <h1>Kentang</h1>
            <br />
            <div className='deskripsi-sawi d-flex'>
              <p>terjual <span>8</span></p>
              <i class="fas fa-star stars">5</i>
              <p><span>(24 rating)</span></p>
            </div>

          </div>
          <br />
          <div className='harga'>
            <h1>Rp 5000</h1>
          </div>

          <div className=''>
            <br />
            <h5>Detail:</h5>
            <p><span>Kondisi:</span>Segar,baru petik</p>
            <p><span>Berat:</span>700 g</p>
            <p><span>Kategori:</span>Sayur</p>
            <p> Kentang yang kami jual 100% ditanam tanpa menggunakan pestisida karana 100% organik,Manfaat kentang yang kaya antioksidan ternyata juga berguna untuk memelihara kesehatan jantung. Selain itu, kentang juga mengandung serat, kalium, vitamin C, dan vitamin B6 yang akan memaksimal fungsinya untuk menjaga kesehatan jantung. Kentang kaya akan serat, yang akan membantu menurunkan jumlah total kolesterol. </p>
          </div>
        </div>

        <div className="col-md-3 Rincian">
          <div className="cart-detail">
          <div className="card-body p-7">
                <div className="row d-flex justify-content-between align-items-center">
                  
                
                    <h2 className="lead fw-normal mb-2">Sawi</h2>
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

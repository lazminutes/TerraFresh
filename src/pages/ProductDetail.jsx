import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import '../assets/css/detail.css'
import { AppContext } from '../Context/AppContext'
import { useLocation } from 'react-router-dom'

export default function ProductDetail() {
  const navigate = useNavigate()
  const Contex = useContext(AppContext)
  const location = useLocation();
  const { state } = location;
  return (
    <div className="container">
      <Link to='/produk/buah' className='Link '>
        <h1 onClick={() => navigate(-1)}><i className="fa-solid fa-angle-left stars" ></i>{Contex.lang === 'en' ? 'Back' : 'Kembali'}</h1>
      </Link>
      <div className="row d-flex">

        <div className="col-md-4">

          <div id="carouselExampleIndicators" className="carousel slide jarak-img" data-bs-ride="carousel">
            <div className='carousel-controls'>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1" style={{ backgroundImage: `url(${state?.preview_img1})` }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"  style={{ backgroundImage: `url(${state?.preview_img2})` }}>
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"  style={{ backgroundImage: `url(${state?.preview_img3})` }}>
                </button>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="carousel-inner bg-light">
              <div className="carousel-item active text-center gambar-sawi">
                <img src={state?.preview_img1} className="d-block w-100" alt={state?.name} />
              </div>

              <div className="carousel-item  text-center gambar-sawi">
                <img src={state?.preview_img2} className="d-block w-100" alt={state?.name} />
              </div>

              <div className="carousel-item  text-center gambar-sawi">
                <img src={state?.preview_img3} className="d-block w-100" alt={state?.name} />
              </div>

            </div>

          </div>

        </div>

        <div className="col-md-5 ">
          <div className="Detail-page text-center">
            <h1>{state?.name}</h1>
            <br />
            <div className='deskripsi-sawi d-flex'>
              <p>{Contex.lang === 'en' ? 'sold' : 'Terjual'}  <span>20</span></p>
              <i className="fas fa-star stars">5</i>
              <p><span>(10 rating)</span></p>
            </div>

          </div>
          <br />
          <div className='harga'>
            <h1>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(state?.price)}</h1>
          </div>

          <div className='des-detail'>
            <br />
            <h5>Detail:</h5>
            <p><span>{Contex.lang === 'en' ? 'Condition:' : 'Kondisi:'} </span>{state?.condition}</p>
            <p><span>{Contex.lang === 'en' ? 'Heavy:' : 'Berat:'} </span>{state?.weight} g</p>
            <p><span>{Contex.lang === 'en' ? 'Category' : 'Kategori'} </span>{state?.category}</p>
            <p>{state?.description}</p>
          </div>
        </div>

        <div className="col-md-3 Rincian">
          <div className="cart-detail">
            <div className="card-body p-7">
              <div className="row d-flex justify-content-between align-items-center">


                <h2 className="lead fw-normal mb-2">{state?.name}</h2>
                <h5>{Contex.lang === 'en' ? 'set Purchase amount' : 'atur jumlah Pembelian'}</h5>

                <div className="col-md-3 col-lg-3 col-xl-6 d-flex">
                  <button
                    className="btn btn-link px-2"
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
                  >
                    <i className="fas fa-plus" />
                  </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0"><span>Stock Total:</span> {state?.stock}</h5>
                </div>
              </div>
              <br />
              <div className='text-center btn-detail'>
                <button className='btn btn-warning'>{Contex.lang === 'en' ? 'Cart' : 'Keranjang'}</button>
                <br />
                <br />
                <button className='btn-beli'>{Contex.lang === 'en' ? 'Buy Now' : 'Beli Sekarang'}</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

import '../Assets-produk/Css-Detail/Detail.css'


export default function Sawi() {
  return (
    <div className="container">
      <h1>fe</h1>
      <div className="row d-flex">

        <div className="col-md-4">
         
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div className='carousel-controls'>
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style={{backgroundColor:'red'}}>
                </button>
                
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
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
                  <img src="https://cdn-1.timesmedia.co.id/images/2022/03/18/Sawi.jpg" class="d-block w-100" alt="..." />
                </div>

                <div class="carousel-item active text-center gambar-sawi">
                  <img src="https://cdn-cas.orami.co.id/parenting/images/jenis-sawi.width-800.jpegquality-80.jpg" class="d-block w-100" alt="..." />
                </div>

                <div class="carousel-item active text-center gambar-sawi">
                  <img src="https://www.harapanrakyat.com/wp-content/uploads/2019/10/Manfaat-Sawi-Hijau.jpg" class="d-block w-100" alt="..." />
                </div>
                
              </div>

            </div>
       
            </div>

          <div className="col-md-5 ">
            <div className="Detail-page text-center">
                    <h1>Sayur Sawi</h1>
                    <div className='deskripsi-sawi d-flex'>
                     <p>terjual <span>10</span></p>
                     <i class="fas fa-star stars">5</i>
                     <p><span>(20 rating)</span></p>
                    </div>

            </div>
            <div className='harga'>
  <h1>Rp 2000</h1>
</div>

<div className=''>
  <h5>Detail:</h5>
  <p><span>Kondisi:</span>Segar,baru petik</p>
  <p><span>Berat:</span>100 g</p>
  <p><span>Kategori:</span>Sayur</p>
  <p></p>
</div>
          </div>

          <div className="col-md-3">
            <div className="cart-detail">
<h1>Atur Pembelian Barang</h1>
            </div>
          </div>

      </div>
    </div>

  )
}

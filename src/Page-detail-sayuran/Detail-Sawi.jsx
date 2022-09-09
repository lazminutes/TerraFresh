import '../Assets-produk/Css-Detail/Detail.css'


export default function Sawi() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-md-4">
          <div className="img-detail">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active text-center">
                  <img src="https://cdn-1.timesmedia.co.id/images/2022/03/18/Sawi.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://cdn-cas.orami.co.id/parenting/images/jenis-sawi.width-800.jpegquality-80.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://www.harapanrakyat.com/wp-content/uploads/2019/10/Manfaat-Sawi-Hijau.jpg" class="d-block w-100" alt="..." />
                </div>
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
          </div>

          <div className="col-md-4">
            <div className="Detail-page">

            </div>
          </div>

          <div className="col-md-4">
            <div className="cart-detail">

            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default function Home() {
  return (
    <div><section id="home-section" className="hero">
    <div className="home-slider owl-carousel">
      <div className="slider-item js-fullheight">
        <div className="overlay"></div>
        <div className="container-fluid p-0">
          <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
            <img className="one-third order-md-last img-fluid" src="images/bg_1.png" alt="" />
            <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
              <div className="text">
                <span className="subheading">#New Arrival</span>
                <div className="horizontal">
                  <h1 className="mb-4 mt-3">Shoes Collection 2019</h1>
                  <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                  
                  <p><a href="#" className="btn-custom">Discover Now</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-item js-fullheight">
        <div className="overlay"></div>
        <div className="container-fluid p-0">
          <div className="row d-flex no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
            <img className="one-third order-md-last img-fluid" src="images/bg_2.png" alt=""/>
            <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
              <div className="text">
                <span className="subheading">#New Arrival</span>
                <div className="horizontal">
                  <h1 className="mb-4 mt-3">New Shoes Winter Collection</h1>
                  <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                  
                  <p><a href="#" className="btn-custom">Discover Now</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

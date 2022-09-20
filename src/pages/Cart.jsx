import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"
import { useAPI } from '../context/APIContext'

export default function Cart() {

   const getTotalSum = () => {
    const { vegetables } = useAPI()
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  const Contex = useContext(AppContext)
  const [localCart, setLocalCart] = useState([])

  return (
    <section className="min-vh-100 bg-warning">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">{Contex.lang === "en" ? "Shopping Cart" : "Keranjang Belanja"}</h3>
            </div>
            
              <>
              {vegetables?.map(vegetable => (
                <div className="card rounded-3 mb-4">
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                      
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                          className="img-fluid rounded-3"
                          alt="Cotton T-shirt"
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2" key={vegetable?.name}></p>
                       
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
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
                        <h5 className="mb-0">$499.00</h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger">
                          <i className="fas fa-trash fa-lg" />
                        </a>
                       
                      </div>
                    </div>
                  </div>
                </div> 
              ))}
              </>
      
              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <h6>Keranjang anda kosong!</h6>
                  </div>
                </div>
              </div>
            
            <div className="card">
              <div className="card-body">
                <button type="button" className="btn btn-warning btn-block btn-lg">
                  {Contex.lang === "en" ? " Proceed to Pay" : 'Proses Pembayaran'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

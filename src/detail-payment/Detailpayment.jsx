import React from 'react'
import "../pages/style.css";
import tera from "../assets/tera.jpg"
import bsi from "../assets/bsi.png"
import kiwi from "../assets/kiwi.jpg"
import apel from "../assets/apel.jpg"



export default function Detailpayment() {
  return (
    <div className="container mt-5 mb-5" >
    <div className="row d-flex justify-content-center" >
      <div className="col-md-8" >
        <div className="card border-warning shadow-inner" style={{borderRadius: '15px', boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
          <div className="text-left logo p-2 px-5 container-fluid" style={{borderRadius: '15px', backgroundColor: "#f9ca24"}}>
            <img src={tera} width={50} />
          </div>
          <div className="invoice p-5">
            <h5>Your order Confirmed!</h5>
            <span className="font-weight-bold d-block mt-4">Hello, User</span>
            <span>You order has been confirmed!</span>
            <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <div className="py-2">
                        <span className="d-block text-muted">Order Date</span>
                        <span>20 September,2022</span>
                      </div>
                    </td>
                    <td>z
                      <div className="py-2">
                        <span className="d-block text-muted">Order No</span>
                        <span>MT12332345</span>
                      </div>
                    </td>
                    <td>
                      <div className="py-2">
                        <span className="d-block text-muted">No Handphone</span>
                        <span>085338157999</span>
                      </div>
                    </td>
                    <td>
                      <div className="py-2">
                        <span className="d-block text-muted">Payment</span>
                        <span><img src={bsi} width={20} />BSI</span>
                      </div>
                    </td>
                    <td>
                      <div className="py-2">
                        <span className="d-block text-muted">Alamat</span>
                        <span>Sumbawa, Brang Biji. Jl.Cendrawasih No.121</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="product border-bottom table-responsive">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td width="20%">
                      <img src={apel} width={90} />
                    </td>
                    <td width="60%">
                      <span className="font-weight-bold">Apel</span>
                      <div className="product-qty">
                        <span className="d-block">Jumlah:1</span>
                      </div>
                    </td>
                    <td width="20%">
                      <div className="text-right">
                        <span className="font-weight-bold">Rp. 10.000</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td width="20%">
                      <img src={kiwi} width={90} />
                    </td>
                    <td width="60%">
                      <span className="font-weight-bold">Kiwi</span>
                      <div className="product-qty">
                        <span className="d-block">Jumlah:1</span>
                      </div>
                    </td>
                    <td width="20%">
                      <div className="text-right">
                        <span className="font-weight-bold">Rp. 10.000</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td width="20%">
                      <img src={kiwi} width={90} />
                    </td>
                    <td width="60%">
                      <span className="font-weight-bold">Anggur</span>
                      <div className="product-qty">
                        <span className="d-block">Jumlah:1</span>
                      </div>
                    </td>
                    <td width="20%">
                      <div className="text-right">
                        <span className="font-weight-bold">Rp. 10.000</span>
                      </div>
                    </td>
                  </tr>
                </tbody> 
              </table>
            </div>
            <div className="row d-flex justify-content-end">
              <div className="col-md-5">
                <table className="table table-borderless">
                  <tbody className="totals">
                    <tr>
                      <td>
                        <div className="text-left">
                          <span className="text-muted">Subtotal</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-right">
                          <span>Rp. 30.000</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-left">
                          <span className="text-muted">Ongkos Kirim</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-right">
                          <span>Rp 10.000</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-left">
                          <span className="text-muted">Biaya Penanganan</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-right">
                          <span>Rp 5.000</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-left">
                          <span className="text-muted">Discount</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-right">
                          <span className="text-success">-Rp 10.000</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-top border-bottom">
                      <td>
                        <div className="text-left">
                          <span className="font-weight-bold">Subtotal</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-right">
                          <span className="font-weight-bold">Rp 35.000</span>
                        </div>
                      </td>
                    </tr>                                    
                  </tbody>                               
                </table>                         
              </div>
            </div>
           <div className='m-auto align-items-center text-center my-2'>
              <p className="btn btn-warning align-items-center" style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}}>Back to home</p>
              </div>
            <p>We will be sending shipping confirmation email when the item shipped successfully!</p>
            <p className="font-weight-bold mb-0">Thanks for shopping with us!</p>
            <span>Tera Fresh Team</span>
          </div>
          
          <div className="d-flex justify-content-between footer p-3">
            <span>Need Help? visit our <a href="#"> help center</a></span>
            <span>12 June, 2020</span>
          </div>
        </div>
      </div>
    </div>
  </div>
 )
}

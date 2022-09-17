import React from 'react'
import { AppContext } from '../Context/AppContext';
import "./style.css";
import ava from "../assets/ava.png"
import tera from "../assets/tera.jpg"
import bni from "../assets/bni.png"
import bri from "../assets/bri.png"
import bsi from "../assets/bsi.png"
import grab from "../assets/grab.png"
import gojek from "../assets/gojek.png"
import mandiri from "../assets/mandiri.png"


export default function Payment() {
  const Contex =React.useContext(AppContext)
  return (
        <>
        {/*Container*/}
      <div className="d-lg-flex contain border border-warning shadow-inner" style={{borderRadius: '15px', boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
        {/* Box 1 */}
        <div className="box-1 bg-light user" style={{marginTop: '20px', margin: 'auto'}}>
          <div className="d-flex align-items-center mb-3">
            <img className="pic rounded-circle imagine" src={ava}  alt="avatar" />
            <p className="ps-2 name"  style={{marginTop: '20px'}}>user</p>
          </div>
          {/* Pembayaran */}
          <div className="box-inner-1 pb-3 mb-3">
            <p className="fw-bold">{Contex.lang ==='en'?"Payment Summary:":"Ringkasan Pembayaran :"}</p>
            <div className="dis fw-bold mb-2">
              <p className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">List Barang</span>
                <span className="text-muted">3</span>
              </p>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <p className="my-0">Product name</p>
                    <small className="text-muted">Deskripsi Barang</small>
                  </div>
                  <span className="text-muted">Rp 10.000</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <p className="my-0">Product name</p>
                    <small className="text-muted">Deskripsi Barang</small>
                  </div>
                  <span className="text-muted">Rp 10.000</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <p className="my-0">Product name</p>
                    <small className="text-muted">Deskripsi Barang</small>
                  </div>
                  <span className="text-muted">Rp 10.000</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-warning">
                    <p className="my-0">Promo code</p>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-warning">-Rp. 15.000</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (Rp)</span>
                  <strong>Rp. 15.000</strong>
                </li>
              </ul>
              <form className="card p-2">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-secondary">Redeem</button>
                  </div>
                </div>
              </form>
            </div>
            {/* Jasa kirim */}
            <div className="radiobtn">
              <p className="dis fw-bold mb-2" style={{marginTop: '20px'}}>{Contex.lang==='en'?'Choose your favorite shipping service':'Pilih jasa kirim favorit anda'}</p>
              <input type="radio" name="box" id="one" />
              <input type="radio" name="box" id="two" />
              <label htmlFor="one" className="box py-2 first">
                <div className="d-flex align-items-start">
                  <span className="circle" style={{marginTop: '15px'}} />
                  <img className="imagine" src={grab} alt="" />
                  <div className="course">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="fw-bold">
                        Grab             
                      </span>                                 
                    </div>
                    <span>{Contex.lang ==='en'?'Shipping cost':'ongkos Kirim'} Rp.10.000</span>
                  </div>
                </div>
              </label>
              <label htmlFor="two" className="box py-2 second">
                <div className="d-flex">
                  <span className="circle" style={{marginTop: '15px'}} />
                  <img className="imagine" src={gojek} alt="" />
                  <div className="course">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="fw-bold">
                        Gojek
                      </span>
                    </div>
                    <span>{Contex.lang ==='en'?'Shipping cost':'ongkos Kirim'} Rp.10.000</span>
                  </div>
                </div>
              </label>
            </div>
            {/* Alamat */}
            <form action>
              <div>
                <p className=" dis fw-bold mb-2" style={{marginTop: '30px'}}>{Contex.lang==='en'?"Please fill in your address":'Silahkan mengisi alamat anda'}</p>
              </div>
              <div className="mb-3" style={{marginTop: '20px'}}>
                <input className="form-control" type="text" placeholder={Contex.lang==="en"?"Recipient Name":'Nama Penerima'} />
                <p className="dis mb-2">{Contex.lang==="en"?"Name":'Name'}</p>
              </div>
              <div className="mb-3">
                <input className="form-control" type="text" placeholder={Contex.lang==='en'?'Recipient Address':'Alamat Penerima'} />
                <p className="dis mb-2">{Contex.lang==='en'?'Address':'Alamat'}</p>
              </div>
              <div className="mb-3">
                <input className="form-control" type="text" placeholder={Contex.lang ==='en'?'recipient Phone No':'Nomor Hp Penerima'} />
                <p className="dis mb-2">{Contex.lang ==='en'?'Phone No':'Nomor Handphone'}</p>
              </div>
            </form>
          </div>
        </div>
        {/* Box 2 */}
        <div className="box-2" style={{marginTop: '80px'}}>
          <div className="box-inner-2">
            {/* Metode Pembayaran */}
            <form action>
              <p className="dis fw-bold mb-2">{Contex.lang ==='en'?'Choose Payment Method':'Pilih Metode Pembayaran'}</p>
              <div className="radiobtn">
                <input type="radio" name="box" id="three" />
                <input type="radio" name="box" id="four" />
                <input type="radio" name="box" id="five" />
                <input type="radio" name="box" id="six" />
                <input type="radio" name="box" id="seven" />
                <label htmlFor="three" className="box py-2 third">
                  <div className="d-flex">
                    <span className="circle" style={{marginTop: '15px'}} />
                    <img className="imagine" src={tera} alt="" />
                    <div className="course">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="fw-bold">
                          TerraFresh Pay 
                        </span>
                      </div>
                      <span>{Contex.lang==='en'?'Your remaining balance':'Sisa Saldo anda'} : Rp0</span>
                    </div>
                  </div>
                </label>
                <label htmlFor="four" className="box py-2 fourth">
                  <div className="d-flex">
                    <span className="circle" style={{marginTop: '15px'}} />
                    <img className="imagine" src={bri} alt="" />
                    <div className="course">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="fw-bold">
                          Bank BRI (Dicek Otomatis)                                 
                        </span>                                     
                      </div>
                      <span>{Contex.lang==='en'?'Only accept from Bank BRI':'Hanya menerima dari Bank BRI'}</span>
                    </div>
                  </div>
                </label>
                <label htmlFor="five" className="box py-2 fifth">
                  <div className="d-flex">
                    <span className="circle" style={{marginTop: '15px'}} />
                    <img className="imagine" src={bni} alt="" />
                    <div className="course">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="fw-bold">
                          Bank BNI (Dicek Otomatis)
                        </span>
                      </div>
                      <span>{Contex.lang==='en'?'Only accept from Bank BNI':'Hanya menerima dari Bank BNI'}</span>
                    </div>
                  </div>
                </label>
                <label htmlFor="six" className="box py-2 sixth">
                  <div className="d-flex">
                    <span className="circle" style={{marginTop: '15px'}} />
                    <img className="imagine" src={bsi} alt="" />
                    <div className="course">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="fw-bold">
                          Bank BSI (Dicek Otomatis)
                        </span>
                      </div>
                      <span>{Contex.lang==='en'?'Only accept from Bank BSI':'Hanya menerima dari Bank BSI'}</span>
                    </div>
                  </div>
                </label>
                <label htmlFor="seven" className="box py-2 seventh">
                  <div className="d-flex">
                    <span className="circle" style={{marginTop: '15px'}} />
                    <img className="imagine" src={mandiri} alt="" />
                    <div className="course">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="fw-bold">
                          Bank Mandiri (Dicek Otomatis)
                        </span>
                      </div>
                      <span>{Contex.lang==='en'?'Only accept from Bank Mandiri':'Hanya menerima dari Bank Mandiri'}</span>
                    </div>
                  </div>
                </label>
              </div>
            </form>
            <div className="cost">
              <p className="dis fw-bold mb-2" style={{marginTop: '30px'}}>{Contex.lang==='en'?'Total costI':'Total Biaya'}</p>
            </div>
            <div className="d-flex flex-column /">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <p>{Contex.lang==='en'?'Price of Goods':'Harga Barang'}</p>
                <p>Rp 15.000</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <p>{Contex.lang==='en'?'Handling Fee':'Biaya Penanganan'}</p>
                <p>Rp 10.000</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <p>{Contex.lang==='en'?'Shipping Cost':'Ongkos Kirim'}</p>
                <p>Rp 5.000</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="fw-bold">Total</p>
                <p className="fw-bold">Rp 25.000</p>
              </div>
              <div className="btn btn-warning mt-2" style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}}>{Contex.lang==='en'?'Pay':'Bayar'} Rp50.000</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

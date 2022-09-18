import '../Assets-Home/Home-css/home.css'
import { Link } from 'react-router-dom'
import React from 'react'
import { AppContext } from '../Context/AppContext'
export default function () {
    const Contex=React.useContext(AppContext)
    return (
 
 
<div className="footer">

<div className="box-container">

    <div className="box location">
        <h3 className="titlefooter" >{Contex.lang ==='en'?'Locations':'Lokasi'}</h3>
        <a href="#">Maluk</a>
        <a href="#">Jereweh</a>
        <a href="#">Taliwang</a>
        <a href="#">Alas</a>
        <a href="#">Sumbawa Besar</a>
    </div>

    <div className="box">
        <h3 className="titlefooter">{Contex.lang==='en'?'quick links':'Link Cepat'}</h3>
        <Link to='/'> {Contex.lang ==='en' ?'Home':'Rumah'}</Link> 
       <Link to='/product'> {Contex.lang ==='en' ?'Product':'Produk'}</Link> 
        <Link to='/about'> {Contex.lang ==='en' ?'About':'Tentang'} </Link>
        <Link to='/dasboard'>Dasboard</Link> 
       
       
    </div>

    <div className="box">
        <h3 className="titlefooter">         {Contex.lang ==='en' ?'Contact Info':'Info Kontak'}</h3>
        <a href="#">+62 8234567890</a>
        <a href="#">911</a>
        <a href="#">TereFresh@gmail.com</a>
        <a href="#">Dontpanicitsorganic@gmail.com</a>
        <a href="#">Sumbawa, NTB, - 84456</a>
    </div>


</div >

<div className="credit"> copyright @ 2022 by <span>TerraFress</span> </div>

</div>

      
    )
  }
  
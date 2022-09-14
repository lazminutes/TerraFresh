import '../Assets-Home/Home-css/home.css'
import { Link } from 'react-router-dom'
export default function () {
    return (
     
<div className="footer">

<div className="box-container">

    <div className="box location">
        <h3 className="titlefooter" >locations</h3>
        <a href="#">Maluk</a>
        <a href="#">Jereweh</a>
        <a href="#">Taliwang</a>
        <a href="#">Alas</a>
        <a href="#">Sumbawa Besar</a>
    </div>

    <div className="box">
        <h3 className="titlefooter">quick links</h3>
        <Link to='/'>home</Link> 
       <Link to='/product'>Product</Link> 
        <Link to='/about'> About </Link>
        <Link to='/dasboard'>Dasboard</Link> 
       
       
    </div>

    <div className="box">
        <h3 className="titlefooter">contact info</h3>
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
  
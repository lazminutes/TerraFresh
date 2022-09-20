import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../assets/css/product.css'
import { useAPI } from '../context/APIContext'



export default function ProductVegetable() {
  const { vegetables } = useAPI()
  const Contex = useContext(AppContext)
  return (
    <>
      <div className='container'>
        <div className='card-title'>
          <h2 className='text-center '> {Contex.lang === 'en' ? 'Fresh Vegetables of the Day' : 'Sayur Segar Hari ini'}</h2>
        </div>
        <div className='Sayur d-flex text-center'>
          {vegetables?.map(vegetable => (
            <div className="card list-produk" key={vegetable?.name}>
              <div className='item'>
                <div className='oval'></div>
                <img src={vegetable?.imgUrl} className="card-img-top size-img" alt="" style={{ marginTop: '30px' }} />
                <div className='shopnow align-items-center  '>
                  <Link to={`/product/${vegetable?.name}`} state={vegetable}><button className="btn-Costum">Detail</button> </Link>
                  <button className='btn-Costum'>Cart</button>
                </div>
              </div>
              <div className="card-body bodyCard ">
                <div className="stars editStart ">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h5 className="card-title">{vegetable.name}</h5>
                <p className="card-text">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(vegetable?.price)}</p>
                <p className='stock'>stock: {vegetable?.stock}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

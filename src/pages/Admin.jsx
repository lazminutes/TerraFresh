import { useAPI } from "../context/APIContext"
import { Link, useNavigate } from 'react-router-dom'

export default function Admin() {
  const { vegetables, fruits } = useAPI()
  const navigate = useNavigate()

  const fruitDelete = async (e, id) => {
    e.preventDefault()
    await fetch(`https://6326e609ba4a9c47532c9c95.mockapi.io/fruits/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
    )
    navigate('/')
  }
  return (
    <div className="min-vh-100 bg-warning">
      <div className="container">
        <Link className="btn btn-success my-3" to="/create">Create New</Link>
        <div className="table-responsive mb-3">
          <h1>Fruits</h1>
          <table className="table table-hover table-sm align-middle mb-0 bg-white table-warning text-success">
            <thead className="text-warning table-dark">
              <tr>
                <th>Name</th>
                <th>Desc</th>
                <th>Img Url</th>
                <th>Weight</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {fruits?.map(fruit => (
                <tr key={fruit?.id}>
                  <td>
                    <p>{fruit?.name}</p>
                  </td>
                  <td>
                    <p className="text-truncate d-inline-block" style={{ maxWidth: 150 }}>{fruit?.description}</p>
                  </td>
                  <td>
                    <p className="text-truncate d-inline-block" style={{ maxWidth: 150 }}>{fruit?.imgUrl}</p>
                  </td>
                  <td>
                    <p>{fruit?.weight} g</p>
                  </td>
                  <td>
                    <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(fruit?.price)}</p>
                  </td>
                  <td>
                    <p>{fruit?.stock}</p>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link to={`/edit/${fruit?.name}`} state={fruit}>
                        <i role="button" className="fa-solid fa-pen-to-square" title="Edit" />
                      </Link>
                      <i role="button" className="fa-solid fa-trash text-danger" title="Delete" onClick={(e) => fruitDelete(e, fruit.id)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-responsive mb-3">
          <h1>Vegetables</h1>
          <table className="table table-hover table-sm align-middle mb-0 bg-white table-warning text-success">
            <thead className="text-warning table-dark">
              <tr>
                <th>Name</th>
                <th>Desc</th>
                <th>Img Url</th>
                <th>Weight</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {vegetables?.map(vegetable => (
                <tr key={vegetable?.id}>
                  <td>
                    <p>{vegetable?.name}</p>
                  </td>
                  <td>
                    <p className="text-truncate d-inline-block" style={{ maxWidth: 150 }}>{vegetable?.description}</p>
                  </td>
                  <td>
                    <p className="text-truncate d-inline-block" style={{ maxWidth: 150 }}>{vegetable?.imgUrl}</p>
                  </td>
                  <td>
                    <p>{vegetable?.weight} g</p>
                  </td>
                  <td>
                    <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(vegetable?.price)}</p>
                  </td>
                  <td>
                    <p>{vegetable?.stock}</p>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link to={`/edit/${vegetable?.name}`} state={vegetable}>
                        <i role="button" className="fa-solid fa-pen-to-square" title="Edit" />
                      </Link>
                      <i role="button" className="fa-solid fa-trash text-danger" title="Delete" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
}

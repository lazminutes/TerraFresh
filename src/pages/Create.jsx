import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create() {
  const navigate = useNavigate()

  const [data, setData] = useState({
    name: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
    weight: 0,
    condition: "",
    imgUrl: "",
    preview_img1: "",
    preview_img2: "",
    preview_img3: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch(`https://6326e609ba4a9c47532c9c95.mockapi.io/${data.category}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }
    )
    navigate('/')
  }

  const handleChange = (e) => {
    setData(val => {
      return {
        ...val,
        [e.target.name]: e.target.value
      }
    })
  }
  console.log(data)
  return (
    <div className="min-vh-100 bg-warning">
      <div className="container">
        <div className="card">
          <div className="card-header">Create</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="name"
                  defaultValue={data.name}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  placeholder="price"
                  defaultValue={data.price}
                  onChange={handleChange}
                />
                <label htmlFor="price">Price</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="stock"
                  name="stock"
                  placeholder="stock"
                  defaultValue={data.stock}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="stock">Stock</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="description"
                  defaultValue={data.description}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="description">Description</label>
              </div>
              <div className="form-floating mb-3">
                <select className="form-select" id="category" aria-label="Floating label category example"
                  onChange={(e) => handleChange(e)}
                  name="category"
                >
                  <option value="fruits">Fruit</option>
                  <option value="vegetables">Vegetables</option>
                </select>
                <label htmlFor="category">Category</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="weight"
                  name="weight"
                  placeholder="weight"
                  defaultValue={data.weight}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="weight">Weight</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="condition"
                  name="condition"
                  placeholder="condition"
                  defaultValue={data.condition}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="condition">Condition</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="imgUrl"
                  name="imgUrl"
                  placeholder="imgUrl"
                  defaultValue={data.imgUrl}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="imgUrl">Image URL</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="preview_img1"
                  name="preview_img1"
                  placeholder="preview_img1"
                  defaultValue={data.preview_img1}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="preview_img1">Preview Image 1 URL</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="preview_img2"
                  name="preview_img2"
                  placeholder="preview_img2"
                  defaultValue={data.preview_img2}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="preview_img2">Preview Image 2 URL</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="preview_img3"
                  name="preview_img3"
                  placeholder="preview_img3"
                  defaultValue={data.preview_img3}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="preview_img3">Preview Image 3 URL</label>
              </div>
              <button type="submit" className="btn btn-success">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAPI } from '../context/APIContext'

export default function Login() {
  const { users } = useAPI()
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    let val = users.map(user => {
      if (user.email == data.email && user.password == data.password) {
        return user
      }
    })
    let filtered = val.filter(Boolean)
    if (filtered.length > 0) {
      const { password, ...rest } = filtered[0]
      navigate('/')
      localStorage.setItem("user", JSON.stringify(rest))
    }
    else {
      setError("Email / password salah")
      setTimeout(() => {
        setError("")
      }, 1500)
    }
  }

  const handleChange = (e) => {
    setData(val => {
      return {
        ...val,
        [e.target.name]: e.target.value
      }
    })
  }
  return (
    <section className="vh-100 bg-warning" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      defaultValue={data.email}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      name="password"
                      defaultValue={data.password}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>
                  <button className="btn btn-warning btn-lg btn-block" type="submit">
                    Login
                  </button>
                </form>
                <hr className="my-4" />
                <p>Don't have an account?</p>
                <Link to="/register">Register here</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

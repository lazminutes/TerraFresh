import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password_conf: "",
    role: "user",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { password_conf, ...rest } = data
    await fetch(`https://6326e609ba4a9c47532c9c95.mockapi.io/users`, {
      method: "POST",
      body: JSON.stringify(rest),
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
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          'url("/register.webp")'
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                        name="name"
                        defaultValue={data.name}
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="name">
                        Your Name
                      </label>
                    </div>
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
                        Your Email
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
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="password_conf"
                        name="password_conf"
                        defaultValue={data.password_conf}
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="password_conf">
                        Repeat your password
                      </label>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3cg"
                      />
                      <label className="form-check-label" htmlFor="form2Example3g">
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <Link to="/login" className="fw-bold text-body">
                        <u>Login here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

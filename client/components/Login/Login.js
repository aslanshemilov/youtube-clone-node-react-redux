import React from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Login = ({ onSubmit, LoginSchema, initialValues }) => (
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header pb-0">
            <h1 className="text-center">Login</h1>
          </div>
          <div className="card-body">
            <Formik
              onSubmit={onSubmit}
              initialValues={initialValues}
              validationSchema={LoginSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      className={classnames('form-control', {
                        'is-invalid': errors.email && touched.email,
                        'is-valid': !errors.email && touched.email
                      })}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      onBlur={handleBlur}
                      placeholder="Password"
                      onChange={handleChange}
                      value={values.password}
                      className={classnames('form-control', {
                        'is-invalid': errors.password && touched.password,
                        'is-valid': !errors.password && touched.password
                      })}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <button className="btn btn-info">Submit</button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Login.propTypes = {
  LoginSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired
}

export default Login

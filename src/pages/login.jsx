import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
function Login() {
    return (
        <div className="container ">
            <div className='row justify-content-center mt-5'>
                <div className="col-md-6 mt-5">
                    <div className="card p-5 mt-5">
                        <div className="card-body">
                            <h3 className='text-center mb-3'>Login</h3>
                            <form>
                                <div class="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" />
                                </div>

                                <div class="row mb-4">
                                    <div className="col d-flex justify-content-between">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label"> Remember me </label>
                                        </div>
                                    </div>

                                    <div className="col">

                                        <Link to="/">Forgot password?</Link>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <button type="button" className="btn btn-primary btn-block mb-4 w-100">Sign in</button>
                                    <p>Not a member? <Link to="/register">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
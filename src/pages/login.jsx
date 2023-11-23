import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BtnSubmit from '../components/buttons/btnsubmit';
import Api from '../lib/axios';
import Auth from '../lib/auth/auth';
import { useNavigate } from 'react-router-dom';
function Login() {
    const { setToken, getToken } = Auth();
    const navigation = useNavigate();
    useEffect(() => {
        if (getToken()) {
            navigation('/listing')
        }
    })

    const [isLoading, setIsLoading] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [errors, setErrorMessage] = useState();
    const onSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true);
        setBtnDisabled(true)
        const formData = new FormData(e.currentTarget);
        const data = JSON.stringify(Object.fromEntries(formData));
        Api.post('/user/login', data)
            .then(function (res) {
                if (res.data.status === true) {
                    setToken(res.data.token)
                    setIsLoading(false);
                    setBtnDisabled(false)
                } else {
                    setErrorMessage(res.data.message)
                    setIsLoading(false);
                    setBtnDisabled(false)
                }


            }).catch(function (error) {

                setErrorMessage(error)
            })
    }
    return (
        <div className="container ">
            <div className='row justify-content-center mt-5'>
                <div className="col-md-6">
                    <div className="card shadow-lg mt-5">
                        <div className="card-body">
                            <h3 className='text-center mb-3'>Login</h3>
                            <hr />
                            <form onSubmit={onSubmit} className='p-4 mt-4'>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name='email' className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" name='password' className="form-control" />
                                </div>



                                <div className="text-center">
                                    {errors && (<span className='text-danger mb-3'>{errors}</span>)}
                                    <BtnSubmit disabled={btnDisabled} isLoading={isLoading} mclass={"btn btn-primary w-100 mb-3 fw-bold"} title={"Sign In"} />
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
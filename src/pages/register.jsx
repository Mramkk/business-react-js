import React, { useEffect, useState } from 'react'
import BtnSubmit from '../components/buttons/btnsubmit'
import { Link } from 'react-router-dom';
import Api from '../lib/axios';
import Auth from '../lib/auth/auth';
import { useNavigate } from 'react-router-dom';
function Register() {
    const { getToken } = Auth();
    const navigation = useNavigate();
    useEffect(() => {
        if (getToken()) {
            navigation('/listing')
        }
    })
    const [isLoading, setIsLoading] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [errors, setErrorMessage] = useState();

    function onSubmit(e) {
        e.preventDefault()
        setIsLoading(true);
        setBtnDisabled(true)
        const formData = new FormData(e.currentTarget);
        const data = JSON.stringify(Object.fromEntries(formData));
        Api.post('/user/register', data)
            .then(function (res) {
                if (res.data.status === true) {
                    setIsLoading(false);
                    setBtnDisabled(false)
                    navigation('/')
                } else {
                    setIsLoading(false);
                    setBtnDisabled(false)
                    setErrorMessage(res.data.errors);
                }







            }).catch(function (error) {
                console.log(error);
            })

    }
    return (
        <div className="container ">
            <div className='row justify-content-center mt-5'>
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h3 className='text-center mb-3'>Register</h3>
                            <hr />
                            <form onSubmit={onSubmit} className='p-4'>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" name='name' className="form-control" placeholder="Name" />
                                    {errors && (<span className='text-danger'>{errors.name}</span>)}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name='email' className="form-control" placeholder="Email" />
                                    {errors && (<span className='text-danger'>{errors.email}</span>)}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" name='password' className="form-control" />
                                    {errors && (<span className='text-danger'>{errors.password}</span>)}
                                </div>
                                <div className="text-center mt-4">
                                    <BtnSubmit disabled={btnDisabled} isLoading={isLoading} mclass={"btn btn-primary w-100 mb-3 fw-bold"} title={"Sign Up"} />
                                    <Link to="/">Sign In</Link>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
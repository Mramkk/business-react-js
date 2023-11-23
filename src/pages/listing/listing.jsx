import React, { useEffect, useState } from 'react'
import Auth from '../../lib/auth/auth'
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import BtnSubmit from '../../components/buttons/btnsubmit';
import Api from '../../lib/axios';

function Listing() {
    const { getToken } = Auth();
    const navigation = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);

    useEffect(() => {
        if (!getToken()) {
            navigation('/')
        }
    })


    const [errors, setErrorMessage] = useState();
    const onSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true);
        setBtnDisabled(true)
        const formData = new FormData(e.currentTarget);
        const data = JSON.stringify(Object.fromEntries(formData));
        Api.post('/business/save', data)
            .then(function (res) {
                // console.log(res.data.errors.name);
                if (res.data.status === true) {
                    // navigation('/listing')
                    setIsLoading(false);
                    setBtnDisabled(false)
                    // e.target.reset();


                } else {
                    setErrorMessage(res.data.errors)
                    setIsLoading(false);
                    setBtnDisabled(false)
                    // e.target.reset();
                }


            }).catch(function (error) {

                setErrorMessage(error)
            })
    }

    return (
        <Layout>

            <div className="card mt-5 mb-5 shadow-lg">
                <div className="card-body p-5">
                    <div className="row justify-content-center">
                        <h3 className='text-center'>Add Business</h3>
                        <hr />
                        <form onSubmit={onSubmit} className='row justify-content-center'>
                            <div className="col-md-8">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" name='name' className="form-control" />
                                    {errors && (<span className='text-danger'>{errors.name}</span>)}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name='email' className="form-control" />
                                    {errors && (<span className='text-danger'>{errors.email}</span>)}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" name='phone_number' className="form-control" />
                                    {errors && (<span className='text-danger'>{errors.phone_number}</span>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Contect Person</label>
                                    <input type="text" name='contect_person' className="form-control" />
                                    {errors && (<span className='text-danger'>{errors.contect_person}</span>)}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Website</label>
                                    <input type="text" name='website' className="form-control" />
                                    {errors && (<span className='text-danger'>{errors.website}</span>)}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <textarea name='address' className="form-control" rows="3"></textarea>
                                    {errors && (<span className='text-danger'>{errors.address}</span>)}
                                </div>
                            </div>
                            <div className="text-center">

                                {errors && (<span className='text-danger mb-3'>{errors}</span>)}
                                <BtnSubmit disabled={btnDisabled} isLoading={isLoading} mclass={"btn btn-primary w-25 mb-3 mt-3 fw-bold"} title={"Submit"} />

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Listing
import React, { useEffect, useState } from 'react'
import Auth from '../../lib/auth/auth'
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import Api from '../../lib/axios';

function BusinessData() {
    const { getToken } = Auth();
    const navigation = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [businessData, setBusinessData] = useState([]);


    useEffect(() => {
        if (!getToken()) {
            navigation('/');
        } else {
            data();
        }
    }, [])



    const data = () => {

        setIsLoading(true);
        Api.get('/business/data')
            .then(function (res) {

                setBusinessData(res.data.data)
                setIsLoading(false);
            }).catch(function (error) {
                setIsLoading(false);
                console.log(error);
            })
    }

    if (isLoading) {
        return (<>
            <div className="card mt-5 mb-5 shadow-lg">
                <div className="card-body p-5 mt-5 mb-5">
                    <div className="row justify-content-center">
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>);
    }

    return (
        <Layout>

            <div className="card mt-5 mb-5 shadow-lg">
                <div className="card-body p-5">
                    <div className="row justify-content-center">
                        <h3 className='text-center'>Business Stores</h3>
                        <hr />



                        {
                            businessData.map((dataObj) => {
                                return (

                                    <>
                                        <p> Id : {dataObj.id}</p>
                                        <p> Name : {dataObj.name}</p>
                                        <p> Email : {dataObj.email}</p>
                                        <p> Contect Number : {dataObj.phone}</p>
                                        <p> Contect Person : {dataObj.contect_person}</p>
                                        <p> Website : {dataObj.website}</p>
                                        <p> Address : {dataObj.address}</p>
                                        <hr className='mt-3 mb-3' />
                                    </>

                                );
                            })
                        }



                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default BusinessData
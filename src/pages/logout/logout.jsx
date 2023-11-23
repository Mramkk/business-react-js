import React, { useEffect } from 'react'
import Layout from '../../components/layout/layout'
import { useNavigate } from 'react-router-dom';
import Auth from '../../lib/auth/auth';
function Logout() {
    const { removeToken, getToken } = Auth();

    const navigation = useNavigate();



    useEffect(() => {
        if (!getToken()) {
            navigation('/')
        } else {
            removeToken();
        }
    })
    return (
        <Layout>
            <div className="text-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </Layout>
    )
}

export default Logout
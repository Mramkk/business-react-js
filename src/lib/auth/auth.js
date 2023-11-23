import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Api from '../axios';

export default function Auth() {
    const navigation = useNavigate();
    const [token, setToken] = useState();
    const saveToken = (token) => {
        sessionStorage.setItem('token', token)
        setToken(token)
        navigation('/listing')
    }
    const getToken = () => {
        const mtoken = sessionStorage.getItem('token')
        return mtoken;
    }
    const removeToken = () => {
        sessionStorage.removeItem('token')
        setToken('');
        Api.post('/user/logout')
            .then((res) => {
                console.log(res.data.message);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return {
        setToken: saveToken,
        getToken,
        removeToken,
        token
    }
}


import axios from "axios";

const Api = axios.create({
    baseURL: 'http://localhost/business/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`


    },
})

export default Api;
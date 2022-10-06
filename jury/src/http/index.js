import axios from "axios";

export const API_URL = `http://aleksbcg.beget.tech/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use((confirm) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api
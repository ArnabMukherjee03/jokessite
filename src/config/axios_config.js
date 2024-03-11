import axios from "axios";

const axios_instance = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes',
})


axios_instance.interceptors.response.use(response =>{
    console.log(response.status);
    const response_data = {
        data: response?.data,
        status: response.status
    }
    return response_data;
},(err)=>{
    console.log(err);
})





export default axios_instance;
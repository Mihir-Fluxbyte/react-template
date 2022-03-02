import axios from "axios";
import environment from "../environment";

const ApiRequest = axios.create({
  baseURL: environment.REACT_APP_BASE_URL,
});

// ApiRequest.interceptors.request.use(request=>{
//     return request
// }, error=>{
//     return Promise.reject(error)
// })

// ApiRequest.interceptors.response.use(response=>{
//     return response
// }, error=>{
//     return Promise.reject(error)
// })

const Get = (url) => {
    return ApiRequest.get(url)
}

const Post = (url, payload) => {
    return ApiRequest.post(url, payload)
}

const Put = (url, payload) => {
    return ApiRequest.put(url, payload)
}

const Delete = (url) => {
    return ApiRequest.delete(url)
}

const Api = {
    ApiRequest,Get,Post,Put,Delete
}

export default Api
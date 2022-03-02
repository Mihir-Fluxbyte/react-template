import axios from 'axios'
import AuthContext from '../contextApi/AuthContext'
import { useContext,useEffect,useState } from 'react'
import environment from "../environment";

function useApiClientServie() {
    const auth = useContext(AuthContext)
    const [ApiRequest, setApiRequest] = useState(()=>axios.create({
        baseURL: environment.REACT_APP_BASE_URL,
    }))
    useEffect(() => {
        setApiRequest(()=>axios.create({
            baseURL: environment.REACT_APP_BASE_URL,
        }))
    }, [auth.state.token])
    ApiRequest.interceptors.request.use(
        config=>{
            if(auth.state.token)
            config.headers.Authorization = `Bearer ${auth.state.token}`
            return config
        },
        error=>{
            return Promise.reject(error);
        }
    )
    const ApiGet = (url) => {
        return ApiRequest.get(url)
    }
    const ApiPost = (url, payload) => {
        return ApiRequest.post(url, payload)
    }
    const ApiPut = (url, payload) => {
        return ApiRequest.put(url, payload)
    }
    const ApiDelete = (url) => {
        return ApiRequest.delete(url)
    }
    return { ApiGet, ApiPost, ApiPut, ApiDelete}
}

export default useApiClientServie
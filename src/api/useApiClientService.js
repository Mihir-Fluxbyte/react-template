import axios from "axios";
import AuthContext from "../contextApi/AuthContext";
import { useContext } from "react";
import environment from "../environment";
import LoadingContext from "../contextApi/LoadingContext";

function useApiClientService() {
  const auth = useContext(AuthContext);
  const loading = useContext(LoadingContext);

  /**
   * Get AxiosInstance For Api
   * @returns
   */
  const getAxios = () =>
    axios.create({
      baseURL: environment.REACT_APP_BASE_URL,
    });

  /**
   * Change Loading State
   * @param {'+' | '-'} action
   */
  const loadingAction = (action) => {
    loading.dispatch({
      type: action,
    });
  };

  /**
   * @returns AxiosInstance
   */
  const getApiRequest = () => {
    const ApiRequest = getAxios();
    requestInterceptor(ApiRequest);
    responseInterceptor(ApiRequest);
    return ApiRequest;
  };

  /**
   * Interceptor for request
   * @param {AxiosInstance} api
   */
  const requestInterceptor = (api) => {
    api.interceptors.request.use(
      (config) => {
        if (auth.state.token)
          config.headers.Authorization = `Bearer ${auth.state.token}`;
        loadingAction("+");
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };

  /**
   * Interceptor for response
   * @param {AxiosInstance} api
   */
  const responseInterceptor = (api) => {
    api.interceptors.response.use(
      (config) => {
        loadingAction("-");
        return config;
      },
      (error) => {
        loadingAction("-");
        console.error("Api Error: ",error.config.baseURL + error.config.url, error)
        return Promise.reject(error);
      }
    );
  };

  /**
   * Get Api
   * @param {string} url
   * @returns Promise
   */
  const ApiGet = (url) => {
    const ApiRequest = getApiRequest();
    return ApiRequest.get(url);
  };

  /**
   * Post Api
   * @param {string} url
   * @param {*} payload
   * @returns Promise
   */
  const ApiPost = (url, payload) => {
    const ApiRequest = getApiRequest();
    return ApiRequest.post(url, payload);
  };

  /**
   * Put Api
   * @param {string} url
   * @param {*} payload
   * @returns Promise
   */
  const ApiPut = (url, payload) => {
    const ApiRequest = getApiRequest();
    return ApiRequest.put(url, payload);
  };

  /**
   * Delete Api
   * @param {string} url
   * @returns Promise
   */
  const ApiDelete = (url) => {
    const ApiRequest = getApiRequest();
    return ApiRequest.delete(url);
  };

  return { ApiGet, ApiPost, ApiPut, ApiDelete };
}

export default useApiClientService;

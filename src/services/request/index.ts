import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { MyRequestConfig } from "./type";

class MyRequest {
  instance: AxiosInstance;

  //为了添加拦截器功能,将AxiosRequestConfig改为MyRequestConfig
  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config);
    //添加全局拦截器
    //请求拦截,可以针对每个请求拦截处理,比如添加token,并通常config
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );

    //针对个别请求添加拦截
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    );
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
  // get() {}
  // post() {}
}
export default MyRequest;

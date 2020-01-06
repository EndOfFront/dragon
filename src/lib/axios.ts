import axios from "axios";
import { message, notification } from "antd";
// import notification from "../components/base/notification/notifictation";
const { ipcRenderer = { send: (msg: string, result: boolean) => { } } } =
  window.electron || {};

const addErrorLog = errorInfo => {
  // const {
  //   statusText,
  //   status,
  //   request: { responseURL }
  // } = errorInfo;
  // let info = {
  //   type: "ajax",
  //   code: status,
  //   mes: statusText,
  //   url: responseURL
  // };
};
class HttpRequest {
  public baseUrl: string;
  public queue: object;
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      methods: "get",
      headers: {
        //
      }
    };
    return config;
  }
  destroy(url) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      message.destroy();
    }
  }
  interceptors(instance, url, noLoading = false, noMessage = false) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        // 添加全局的loading...
        if (!Object.keys(this.queue).length) {
          if (!noLoading) {
            message.loading("加载中……", 0);
          }
        }
        this.queue[url] = true;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        this.destroy(url);
        const { data } = res;
        let { code = "500", msg = "未知异常" } = data;
        switch (true) {
          case code===1001: {
            notification.destroy();
            let args = {
              message: "提示",
              description: '用户已超时即将重新登录！',
              duration: 3,
              onClose() {
                ipcRenderer.send('login', true)
              }
            };
            !noMessage && notification.error(args);
            return Promise.reject({ code, message: msg });
          }
          case code==='200': {
            return res;
          }
          case code!=='200': {
            notification.destroy();
            let args = {
              message: "提示",
              description: data.message,
              duration: 3,
              
            };
            !noMessage && notification.error(args);
            return Promise.reject({ code, message: msg });
          }
          default:
            return code !== "200" ? Promise.reject({ code, message: msg }) : res;
        }
      },
      error => {
        this.destroy(url);
        if (error.response) {
          let errorInfo = error.response;
          if (!errorInfo) {
            const {
              request: { statusText, status },
              config
            } = JSON.parse(JSON.stringify(error));
            errorInfo = {
              statusText,
              status,
              request: { responseURL: config.url }
            };
          }
          addErrorLog(errorInfo);
        }else{
          notification.error({
            message: "提示",
            description:JSON.stringify(error)
          })
        }

        return Promise.reject(error);
      }
    );
  }
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(
      instance,
      options.url,
      options.noLoading,
      options.noMessage
    );
    return instance(options);
  }
}
export default HttpRequest;

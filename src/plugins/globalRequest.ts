/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import {extend} from 'umi-request';
import {message} from "antd";
import {history} from "@@/core/history";
import {stringify} from "querystring";

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  prefix: process.env.NODE_ENV === 'production'?'http://user-backend.code-nav.cn':undefined
  // requestType: 'form',
});

/**
 * 所有请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  console.log(`do request url = ${url}`);
  return {
    url,
    options: {
      ...options,
      headers: {
      },
    },
  };
});

/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response, options): Promise<any> => {
  const request = await response.clone().json();
  const { search, pathname } = window.location;
  // 状态码为0，正常响应，返回data
  if (request.code === 0){
    return request.data;
  }
  // 状态码显示未登录，显示未登录错误，重定向到登录页
  if (request.code === 40100){
    message.error("请先登录");
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: pathname + search,
      }),
    });
  }else{
    // 如果是其他错误码，显示响应中的description
    message.error(request.description);
  }
  return request.data;
});

export default request;

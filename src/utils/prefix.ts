import {RequestInterceptor} from "@@/plugin-request/request";

export function prefix(value: string): RequestInterceptor {
  return (url: string, options: any) => {
    const newUrl = `${value}${url}`;
    return {
      url: newUrl,
      options: options,
    };
  };
}

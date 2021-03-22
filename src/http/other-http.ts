import axios from 'axios';
import { Param } from '/@/types';

export const formatUrl = (
  url: string,
  param: Param = {},
): string => {
  const usp = new window.URLSearchParams(param as any);
  const jointer = url.includes('?') ? '&' : '?';
  return url + jointer + usp.toString();
};
const instance = axios.create({});
instance.interceptors.response.use(
  ({ data }) => data,
  err => Promise.reject(err),
);
export const get = (
  url: string,
  param: Param = {},
  opt: any = {},
): Promise<any> => {
  const u = formatUrl(url, param);
  return instance.get(u, opt);
};
export const post = (
  url: string,
  param: Param = {},
  opt: any = {},
): Promise<any> => {
  return instance.post(url, param, opt);
};

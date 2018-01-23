import axios from 'axios';
import parse from 'url-parse';
import { Buffer } from 'buffer';
import _defaultsDeep from 'lodash/defaultsDeep';
import _trim from 'lodash/trim';

export default class Request {
  constructor(baseURL, _options) {
    const url = parse(baseURL);
    const pathname = url.pathname;

    this._instance = axios.create(_defaultsDeep({
      baseURL: url.origin,
      url: pathname
    }, _options));

    this._instance.interceptors.response.use((response) => ({
      data: response.data,
      status: response.status,
      statusText: response.statusText
    }), e => Promise.reject(e));
  }

  options(_url, _config) {
    return this._instance.options(_url, _config);
  }

  propfind(_url, _config) {
    return this._instance.request(_defaultsDeep({
      method: 'propfind',
      url: _url
    }, _config));
  }

  withAuth(username, password) {
    const defaults = this._instance.defaults;
    const common = defaults.headers.common;
    const token = Buffer.from(`${_trim(username)}:${_trim(password)}`);

    common.Authorization = `Basic ${token.toString('base64')}`;
    defaults.withCredentials = true;

    return this;
  }
}


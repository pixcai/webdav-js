import _forEach from 'lodash/forEach';
import Request from './request';
import methods from './methods';
import interceptors from './interceptors';

class WebDAV {
  constructor(baseURL, _options) {
    this.defaults = {
      request: new Request(baseURL, _options),
      interceptors
    };

    _forEach(methods, (handler, method) => {
      this[method] = (...args) => handler.apply(this, args).then((response) => {
        return this.defaults.interceptors.reduce((data, interceptor) => {
          return interceptor(data, method, response);
        }, response.data);
      });
    });
  }
}

module.exports = WebDAV;


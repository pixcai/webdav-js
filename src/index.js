import axios from 'axios';
import parse from 'url-parse';
import { xml2js } from 'xml-js';
import _trimEnd from 'lodash/trimEnd';
import _forEach from 'lodash/forEach';
import _defaults from 'lodash/defaults';
import basic from './basic';
import commands from './commands';
import interceptors from './interceptors';

class WebDAV {
  constructor(baseURL, _options = {}) {
    const url = parse(baseURL);

    this._fetch = axios.create(_defaults({
      url: _trimEnd(url.pathname, '/'),
      baseURL: url.origin
    }, _options));
    this._fetch.interceptors.response.use(({ data }) => xml2js(data, {
      spaces: 2,
      compact: true,
      ignoreDeclaration: true,
      ignoreInstruction: true
    }), (e) => Promise.reject(e));

    _forEach(commands(this), (handler, command) => {
      this[command] = handler;
    });

    this._interceptors = interceptors;
  }

  auth(username, password) {
    const defaults = this._fetch.defaults;

    defaults.headers.common['Authorization'] = basic(username, password);
    defaults.withCredentials = true;

    return this;
  }

  use(interceptor) {
    if (this._interceptors.indexOf(interceptor) === -1) {
      this._interceptors.push(interceptor);
    }

    return this._interceptors;
  }
}

module.exports = WebDAV;


import _get from 'lodash/get';
import { convertXML2JS } from '../util';

export default function propfind(data, method, response) {
  if (method === 'propfind') {
    data = _get(convertXML2JS(data), ['multistatus', 'response']);
  }

  return data;
}


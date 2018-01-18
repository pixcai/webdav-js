import _get from 'lodash/get';
import { getTextProp, getProps } from '../util';

export default (data, method, instance) => {
  if (method === 'PROPFIND') {
    return _get(data, ['d:multistatus', 'd:response'], []).map((item) => {
      return {
        href: getTextProp(item, 'd:href'),
        props: getProps(item)
      };
    });
  }

  return data;
}


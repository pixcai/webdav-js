import _mapValues from 'lodash/mapValues';
import find from './find';

const commands = {
  find: {
    action: find,
    method: 'PROPFIND'
  }
};

export default (instance) => {
  return _mapValues(commands, ({ action, method }) => {
    return async (...args) => {
      return instance._interceptors.reduce((data, interceptor) => {
        return interceptor(data, method, instance);
      }, await action.apply({ instance, method }, args));
    }
  });
}


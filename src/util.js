import _get from 'lodash/get';
import _compact from 'lodash/compact';

export function getProp(item, name) {
  return _get(item, _compact(['d:propstat', 'd:prop'].concat(name)));
}

export function getTextProp(item, name) {
  return _get(item, _compact([].concat(name).concat('_text')));
}

export function getProps(item) {
  const prop = (name) => getTextProp(getProp(item, name));

  return {
    displayName: prop('d:displayname'),
    owner: prop('d:owner'),
    getLastModified: prop('d:getlastmodified'),
    getContentType: prop('d:getcontenttype'),
    getContentLength: parseInt(prop('d:getcontentlength'), 10),
    resourceType: _get(Object.keys(getProp(item, [
      'd:resourcetype'
    ])), '0', '').substr(2),
    currentUserPrivilegeSet: _compact([].concat(getProp(item, [
      'd:current-user-privilege-set',
      'd:privilege'
    ])).map((privilege) => _get(Object.keys(privilege), '0', '').substr(2)))
  }
}


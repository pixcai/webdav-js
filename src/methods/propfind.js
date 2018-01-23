import { convertJS2XML } from '../util';

export default async function propfind(_resource, _props = []) {
  const data = {
    type: 'element',
    name: 'propfind',
    attributes: {
      xmlns: 'DAV:'
    },
    elements: []
  };

  if (_props.length) {
    data.elements.push({
      type: 'element',
      name: 'prop',
      elements: _props.map(prop => ({
        type: 'element',
        name: _prop
      }))
    });
  } else {
    data.elements.push({
      type: 'element',
      name: 'propname'
    });
  }

  return await this.defaults.request.propfind(_resource, {
    headers: {
      'Content-Type': 'text/xml; charset="utf-8"'
    },
    data: convertJS2XML(data)
  });
}


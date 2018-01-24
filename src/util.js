import { js2xml, xml2js } from 'xml-js';
import _isString from 'lodash/isString';
import _isPlainObject from 'lodash/isPlainObject';

export function convertJS2XML(data) {
  if (_isString(data)) {
    try {
      data = JSON.parse(data);
    } catch (e) {}
  }
  if (_isPlainObject(data)) {
    data = js2xml({
      declaration: {
        attributes: {
          version: '1.0',
          encoding: 'utf-8'
        }
      },
      elements: [].concat(data)
    });
  }

  return data;
}

export function convertXML2JS(data) {
  if (_isString(data)) {
    data = xml2js(data, {
      nativeType: true,
      trim: true,
      spaces: 2,
      compact: true,
      ignoreDeclaration: true,
      ignoreInstruction: true,
      elementNameFn: name => name.split(':').pop()
    });
  }

  return data;
}


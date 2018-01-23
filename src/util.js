import { js2xml, xml2js } from 'xml-js';
import _get from 'lodash/get';
import _compact from 'lodash/compact';

export function convertJS2XML(data) {
  return js2xml({
    declaration: {
      attributes: {
        version: '1.0',
        encoding: 'utf-8'
      }
    },
    elements: [].concat(data)
  });
}

export function convertXML2JS(data) {
  return xml2js(data, {
    spaces: 2,
    compact: true,
    ignoreDeclaration: true,
    ignoreInstruction: true
  });
}


import _trimStart from 'lodash/trimStart';

export default async function find(path = '') {
  const url = this.instance._fetch.defaults.url;

  return await this.instance._fetch({
    url: [url, _trimStart(path, '/')].join('/'),
    method: this.method
  });
}


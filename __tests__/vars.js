import WebDAV from '../src';

const URL = process.env.WEBDAV_URL;

export const WebDAVWithAuth = new WebDAV(URL).auth(
  process.env.WEBDAV_USERNAME,
  process.env.WEBDAV_PASSWORD
);

export const WebDAVWithoutAuth = new WebDAV(URL);


const dotenv = require('dotenv');
const WebDAV = require('.');

dotenv.config({ path: '.env.test' });

module.exports = {
  testMatch: [
    '**/?(*.)(spec|test).js'
  ],
  globals: {
    client: new WebDAV(process.env.WEBDAV_URL).auth(
      process.env.WEBDAV_USERNAME,
      process.env.WEBDAV_PASSWORD
    ),
    WebDAV: WebDAV
  },
  testEnvironment: 'node'
};


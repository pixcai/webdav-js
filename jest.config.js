const dotenv = require('dotenv');
const fs = require('fs');
const WebDAV = require('.');

const {
  WEBDAV_URL,
  WEBDAV_USERNAME,
  WEBDAV_PASSWORD
} = dotenv.parse(fs.readFileSync('.env.test'));

const client = new WebDAV(WEBDAV_URL, {
  auth: {
    username: WEBDAV_USERNAME,
    password: WEBDAV_PASSWORD
  }
});

module.exports = {
  testMatch: [
    '**/?(*.)(spec|test).js'
  ],
  globals: {
    client,
    WebDAV
  },
  testEnvironment: 'node'
};


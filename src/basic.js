import { Buffer } from 'buffer';
import _trim from 'lodash/trim';

const basic = (secret) => 'Basic ' + secret;

export default (username, password) => {
  if (password === undefined) {
    password = username.password;
    username = username.username;
  }
  username = _trim(username);
  password = _trim(password);

  return basic(Buffer.from(username + ':' +  password).toString('base64'));
}


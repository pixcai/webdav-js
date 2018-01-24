export default function options(data, method, response) {
  if (method === 'options') {
    data = response.headers.allow.split(',').map(method => method.trim());
  }

  return data;
}


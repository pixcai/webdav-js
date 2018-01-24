export default function options(data, method, response) {
  if (method === 'options') {
    return response.headers.allow.split(',').map(method => method.trim());
  }

  return data;
}


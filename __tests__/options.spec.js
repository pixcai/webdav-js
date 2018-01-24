test('OPTIONS', () => {
  const methods = [
    'DELETE',
    'GET',
    'LOCK',
    'UNLOCK',
    'MKCOL',
    'MOVE',
    'OPTIONS',
    'PROPFIND',
    'PUT',
    'COPY'
  ];

  return client.options().then((data) => {
    expect(data).toEqual(expect.arrayContaining(methods));
  });
});


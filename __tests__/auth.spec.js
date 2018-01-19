test('login with empty account', () => {
  return new WebDAV(process.env.WEBDAV_URL).find().catch((e) => {
    expect(e.message).toMatch('401');
  });
});

test('login with configured account', () => {
  return client.find().catch((e) => {
    expect(e.message).not.toMatch('401');
  });
});


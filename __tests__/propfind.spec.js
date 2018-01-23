describe('PROPFIND', () => {
  test('return value must be an array', () => {
    return client.propfind().then((data) => {
      expect(Array.isArray(data)).toBe(true);
    });
  });
});


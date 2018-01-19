describe('`find` command', () => {
  test('return value must be an array', () => {
    return client.find().then((data) => {
      expect(Array.isArray(data)).toBe(true);
    });
  });
});


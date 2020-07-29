expect.extend({
    toBeWithinRange(received, floor, ceiling) {
      const pass = received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false,
        };
      }
    },
  });

describe('Testing numeric ranges', () => {
    it('Should pass if the numeric ranges is true', () => {
        expect(100).toBeWithinRange(90,100);
        expect({ apples: 6, bananas: 11}).toEqual({
            apples: expect.toBeWithinRange(1, 10),
            bananas: expect.toBeWithinRange(11, 20),
        });
    });
})
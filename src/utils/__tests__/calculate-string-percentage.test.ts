import calculateStringPercentage from '../calculate-string-percentage';

describe('calculateStringPercentage', () => {
  test('should return the ration of two number', () => {
    expect(calculateStringPercentage(1, 2)).toEqual('50');
  });
});

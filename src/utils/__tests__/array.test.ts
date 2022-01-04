import {map, toArray} from '../array';

describe('array', () => {
  describe('toArray', () => {
    test('converts non-array value to array', () => {
      expect(toArray('some string'));
    });

    test('returns argument when called with array', () => {
      expect(toArray(['some', 'strings', 'in', 'array']));
    });
  });

  describe('map', () => {
    test('calls the function with a single value', () => {
      const mock = jest.fn();

      map('some string', mock);

      expect(mock).toHaveBeenCalledWith('some string', 0, ['some string']);
    });

    test('calls the function for each array value', () => {
      const mock = jest.fn();
      const data = ['string 1', 'string 2'];

      map(data, mock);

      expect(mock).toHaveBeenCalledTimes(2);
      expect(mock).toHaveBeenNthCalledWith(1, 'string 1', 0, data);
      expect(mock).toHaveBeenNthCalledWith(2, 'string 2', 1, data);
    });
  });
});

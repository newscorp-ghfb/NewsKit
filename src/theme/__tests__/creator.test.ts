import {createTheme} from '..';

describe('themeing functions', () => {
  describe('createTheme', () => {
    test('should create a default theme', () => {
      expect(createTheme({name: 'default-theme'})).toMatchSnapshot();
    });
  });
});

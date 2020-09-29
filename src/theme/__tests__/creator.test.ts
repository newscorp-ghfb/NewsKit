import {createTheme} from '..';

describe('themeing functions', () => {
  describe('createTheme', () => {
    test('should create a default theme', () => {
      expect(createTheme({name: 'default-theme'})).toMatchSnapshot();
    });

    test('should create an unnamed theme', () => {
      expect(createTheme({})).toHaveProperty('name', 'unnamed-newskit-theme');
    });

    test('should throw error if base theme is already compiled', () => {
      expect(() =>
        createTheme({baseTheme: {compiled: true} as any}),
      ).toThrowErrorMatchingInlineSnapshot(
        `"createTheme received a compiled baseTheme. Base themes must be uncompiled."`,
      );
    });
  });
});

import {parseEnumValues} from '../parse-enum-values';

enum StringEnum {
  One = 'one',
  Two = 'two',
  Three = 'three',
}

enum NumberEnum {
  One,
  Two,
  Three,
}

describe('parse-enum-values', () => {
  describe('parseEnumValues', () => {
    it('parse string enum', () => {
      expect(parseEnumValues(StringEnum)).toMatchInlineSnapshot(`
        Array [
          "\\"one\\"",
          "\\"two\\"",
          "\\"three\\"",
        ]
      `);
    });

    it('parse number enum', () => {
      expect(parseEnumValues(NumberEnum)).toMatchInlineSnapshot(`
        Array [
          "\\"One\\"",
          "\\"Two\\"",
          "\\"Three\\"",
          "0",
          "1",
          "2",
        ]
      `);
    });
  });
});

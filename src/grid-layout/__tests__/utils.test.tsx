import {areaToValidCSS, capitalize, extractAreas} from '../utils';

const areasWithNoSpace = `
A
B
C
D`;

describe('GridLayout utils', () => {
  test('capitalize should capitalize strings', () => {
    expect(capitalize('component')).toEqual('Component');
  });

  test('should extract areas from string', () => {
    expect(
      extractAreas(`
    "A B"
    "A C"
    "A D"
    "A E"
  `),
    ).toEqual(['A', 'B', 'A', 'C', 'A', 'D', 'A', 'E']);
  });

  test('should extract areas from string without space', () => {
    expect(extractAreas(areasWithNoSpace)).toEqual(['A', 'B', 'C', 'D']);
  });

  test('should convert areas to valid CSS', () => {
    // white space in the string is intentional, the function should handle that too
    expect(
      areaToValidCSS(`

    "A B"
    "A C"
    "A D"
    "A E"

  `),
    ).toEqual(`"A B"\n"A C"\n"A D"\n"A E"`);

    // white space in the string is intentional, the function should handle that too
    expect(
      areaToValidCSS(`

    A B
    A C
    A D
    A E

  `),
    ).toEqual(`"A B"\n"A C"\n"A D"\n"A E"`);
  });
});

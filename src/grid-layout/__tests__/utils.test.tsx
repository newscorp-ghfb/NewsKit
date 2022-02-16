import {areaToValidCSS, capitalize, extractAreas} from '../utils';

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

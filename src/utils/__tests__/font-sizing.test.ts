import {getFontSizing} from '../font-sizing';

// input font size, input line height, expected output
type Test = [string, number, ReturnType<typeof getFontSizing>];

describe('font sizing utils', () => {
  describe('getFontSizing', () => {
    ([
      ['16px', 1, {fontSize: '16px', lineHeight: 1}],
      ['16px', 1.125, {fontSize: '16px', lineHeight: 1.25}],
      ['16px', 1.25, {fontSize: '16px', lineHeight: 1.25}],
      ['16px', 1.5, {fontSize: '16px', lineHeight: 1.5}],
      ['16px', 2, {fontSize: '16px', lineHeight: 2}],

      ['18px', 1, {fontSize: '18px', lineHeight: 1.1111111111111112}],
      ['18px', 1.125, {fontSize: '18px', lineHeight: 1.1111111111111112}],
      ['18px', 1.25, {fontSize: '18px', lineHeight: 1.3333333333333333}],
      ['18px', 1.5, {fontSize: '18px', lineHeight: 1.5555555555555556}],
      ['18px', 2, {fontSize: '18px', lineHeight: 2}],

      ['40px', 1, {fontSize: '40px', lineHeight: 1}],
      ['40px', 1.125, {fontSize: '40px', lineHeight: 1.1}],
      ['40px', 1.25, {fontSize: '40px', lineHeight: 1.3}],
      ['40px', 1.5, {fontSize: '40px', lineHeight: 1.5}],
      ['40px', 2, {fontSize: '40px', lineHeight: 2}],
    ] as Test[]).forEach(([fontSize, lineHeight, expectedResult]) => {
      describe(`for a font size of ${fontSize} and line height of ${lineHeight}`, () => {
        test(`returns the font size and snapped line height of ${expectedResult.lineHeight}`, () => {
          expect(getFontSizing(fontSize, lineHeight)).toEqual(expectedResult);
        });
      });
    });
  });
});

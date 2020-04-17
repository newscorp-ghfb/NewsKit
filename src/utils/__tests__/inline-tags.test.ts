import {isInlineElement} from '../inline-tags';

describe('inline tags helper', () => {
  describe('isInlineElement', () => {
    test('returns true if tag is inline element by default', () => {
      expect(isInlineElement('span')).toBeTruthy();
    });

    test('returns false if tag is block or inline-block element by default', () => {
      expect(isInlineElement('div')).toBeFalsy();
    });
  });
});

import React from 'react';
import {childrenIsString} from '../react-children-utilities';

describe('react-children-utilities', () => {
  describe('childrenIsString', () => {
    test('childrenIsString with react component ', () => {
      expect(childrenIsString([<div>Hello</div>, <p>world</p>])).toBe(false);
      expect(childrenIsString(<div>Hello</div>)).toBe(false);
    });
    test('childrenIsString with string', () => {
      expect(childrenIsString('hello')).toBe(true);
      expect(childrenIsString(['hello', 'world'])).toBe(true);
    });
    test('childrenIsString with fragment', () => {
      expect(childrenIsString(<>hello</>)).toBe(true);
      expect(childrenIsString([<>hello</>, <>world</>])).toBe(true);
    });
  });
});

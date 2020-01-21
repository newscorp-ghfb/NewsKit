import {filterObject} from '../filter-object';

interface Target {
  a: string;
  b: boolean;
  c: number;
}

describe('filter object helper', () => {
  let target: Partial<Target>;
  beforeEach(() => {
    target = {
      a: 'test',
      b: true,
      c: 235,
    };
  });

  test('returns original object if no omit keys are set', () => {
    expect(filterObject(target)).toEqual(target);
  });

  test('returns original object if omit keys are not present', () => {
    expect(filterObject(target, ['d'] as any)).toEqual(target);
  });

  test('returns { a: "test", b: true } if c is omitted', () => {
    expect(filterObject(target, ['c'])).toEqual({
      a: 'test',
      b: true,
    });
  });
});

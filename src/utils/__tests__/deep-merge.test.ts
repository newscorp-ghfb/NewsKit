import {deepMerge} from '../deep-merge';

describe('deepMerge', () => {
  test('performs deep merge on target', () => {
    const target = {foo: {bar: {baz: true, quux: true}}} as any;
    const source = {foo: {bar: {baz: false}}} as any;
    const ret = deepMerge(target, source);
    expect(ret).toEqual({foo: {bar: {baz: false, quux: true}}});
  });

  test('can handle three way merge', () => {
    const target = {foo: 1, bar: 2} as any;
    const source1 = {foo: 2, baz: 3} as any;
    const source2 = {foo: 3, quux: 4} as any;
    const ret = deepMerge({}, target, source1, source2);
    expect(ret).toEqual({foo: 3, bar: 2, baz: 3, quux: 4});
  });

  test('can handle missing target', () => {
    const ret = deepMerge();
    expect(ret).toEqual({});
  });

  test('can handle missing sources', () => {
    const target = {foo: 1, bar: 2} as any;
    const source = false;
    const ret = deepMerge(target, source as any);
    expect(ret).toEqual({foo: 1, bar: 2});
  });

  test('can handle empty target', () => {
    const target = {};
    const source = {foo: {bar: {baz: true, quux: true}}} as any;
    const ret = deepMerge(target, source);
    expect(ret).toEqual({foo: {bar: {baz: true, quux: true}}});
  });
});

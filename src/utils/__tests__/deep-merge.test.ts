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

  test('recognises __shallow keyword', () => {
    const target = {foo: {bar: {baz: true, quux: true}}} as any;

    // root level
    const source = {__shallow: true, foo: {}, baz: 1} as any;
    const ret = deepMerge(target, source);
    expect(ret).toEqual({foo: {}, baz: 1});

    // 1 level nested
    const source1 = {foo: {__shallow: true, bar: {baz: false}}} as any;
    const ret1 = deepMerge(target, source1);
    expect(ret1).toEqual({foo: {bar: {baz: false}}});

    // 2 level nested
    const source2 = {foo: {bar: {__shallow: true, baz: false}}} as any;
    const ret2 = deepMerge(target, source2);
    expect(ret2).toEqual({foo: {bar: {baz: false}}});
  });

  test('can handle three way merge with __shallow keyword', () => {
    const target = {foo: 1, bar: 2, caz: 3} as any;
    const source1 = {__shallow: true, foo: 2, baz: 3} as any;
    const source2 = {foo: 3, quux: 4} as any;
    const ret = deepMerge({}, target, source1, source2);
    expect(ret).toEqual({foo: 3, baz: 3, quux: 4});
  });
});

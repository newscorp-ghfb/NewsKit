import {deepMerge} from '../deep-merge';
import {mergeBreakpointObject} from '../merge-breakpoint-object';

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

  test('use callback to shallow merge', () => {
    const target = {foo: 1, bar: 2, mq: {xs: 1, sm: 2}} as any;
    const source1 = {foo: 2, baz: 3, mq: {xs: 2, lg: 2}} as any;
    // @ts-ignore
    const fn = (obj: any) => obj?.xs;
    const ret = deepMerge(fn, target, source1);
    expect(ret).toEqual({foo: 2, bar: 2, baz: 3, mq: {xs: 2, lg: 2}});
  });

  test('merge nested string value with media query object', () => {
    const ret = deepMerge(
      mergeBreakpointObject(['xs', 'md']),
      {foo: 'bar'},
      {foo: {xs: 1, md: 2}},
    );
    expect(ret).toEqual({foo: {xs: 1, md: 2}});
  });

  test('merge nested media query object with string value', () => {
    const ret = deepMerge(
      mergeBreakpointObject(['xs', 'md']),

      {foo: {xs: 1, md: 2}},
      {foo: 'bar'},
    );
    expect(ret).toEqual({foo: 'bar'});
  });

  test('merge media query object with string', () => {
    const ret = deepMerge(
      mergeBreakpointObject(['xs', 'md']),
      {xs: 1, md: 2},
      'bar',
    );
    expect(ret).toEqual('bar');
  });

  test('merge text and object', () => {
    const ret = deepMerge(
      {size: 'iconSize040'},
      {
        size: {
          lg: 'iconSize040',
          md: 'iconSize030',
          sm: 'iconSize020',
          xl: 'iconSize050',
          xs: 'iconSize010',
        },
      },
    );
    expect(ret).toEqual({
      size: {
        lg: 'iconSize040',
        md: 'iconSize030',
        sm: 'iconSize020',
        xl: 'iconSize050',
        xs: 'iconSize010',
      },
    });
  });

  test('merge object and text', () => {
    const ret = deepMerge(
      {
        size: {
          lg: 'iconSize040',
          md: 'iconSize030',
          sm: 'iconSize020',
          xl: 'iconSize050',
          xs: 'iconSize010',
        },
      },
      {size: 'iconSize040'},
    );
    expect(ret).toEqual({
      size: 'iconSize040',
    });
  });
});

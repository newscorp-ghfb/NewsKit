import {renderHook} from '../../../test/test-utils';
import {useReactKeys} from '..';

jest.mock('../../get-ssr-id', () => {
  const originalModule = jest.requireActual('../../get-ssr-id');
  return {
    ...originalModule,
  };
});

describe('useReactKeys hook', () => {
  test('returns empty array when zero is passed', () => {
    const {result} = renderHook(() => useReactKeys(0));

    expect(result.current).toBeInstanceOf(Array);
    expect(result.current).toHaveLength(0);
    expect(result.current).toMatchInlineSnapshot(`Array []`);
  });
  test('returns array with 3 keys when we pass 3 as a prop to the hook', () => {
    const {result} = renderHook(() => useReactKeys(3));

    expect(result.current).toBeInstanceOf(Array);
    expect(result.current).toHaveLength(3);
    expect(result.current).toMatchInlineSnapshot(`
      Array [
        "nk-1",
        "nk-2",
        "nk-3",
      ]
    `);
  });
});

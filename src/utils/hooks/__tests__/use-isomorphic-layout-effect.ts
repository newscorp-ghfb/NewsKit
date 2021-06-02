import {useEffect, useLayoutEffect} from 'react';
import {useIsomorphicLayoutEffect} from '..';

describe('isomorphic layout effect hook', () => {
  test('will be useEffect when there is no window object defined', () => {
    expect(useIsomorphicLayoutEffect).toBe(useEffect);
  });
});

describe('isomorphic layout effect hook', () => {
  test('will be useLayoutEffect when the window object is defined', () => {
    jest.mock('../../__mocks__/windows.ts', () => ({window: {}}));

    expect(useIsomorphicLayoutEffect).toBe(useLayoutEffect);
  });
});

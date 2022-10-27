import {act, renderHook} from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';
import {useMediaQuery} from '../index';

let matchMedia: MatchMediaMock;

describe('useMediaQuery', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it('should return false with no matching media query', () => {
    matchMedia.useMediaQuery(`(min-width: 0px)`);
    const {result} = renderHook(() => useMediaQuery('test'));

    expect(result.current).toEqual(false);
  });

  it('should return false on a no matching breakpoint and true when query becomes matching', () => {
    matchMedia.useMediaQuery('(prefers-reduced-motion: reduce)');
    const {result} = renderHook(() =>
      useMediaQuery('(prefers-reduced-motion: no-preference)'),
    );

    expect(result.current).toEqual(false);

    act(() => {
      // change media query
      matchMedia.useMediaQuery('(prefers-reduced-motion: no-preference)');
    });
    expect(result.current).toEqual(true);
  });
});

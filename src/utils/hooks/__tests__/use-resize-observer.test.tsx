import {act} from '@testing-library/react-hooks';
import {renderHook} from '../../../test/test-utils';
import {useResizeObserver} from '..';

describe('useResizeObserver hook', () => {
  const renderHelper = (
    current = document.createElement('div'),
    callback?: (entry: DOMRectReadOnly) => void,
  ) => {
    const ref = {current};
    return renderHook(() => useResizeObserver(ref, callback));
  };

  interface Event {
    contentRect?: {
      width: number;
      height?: number;
    };
  }

  let callback: (e: Event[]) => void;
  const observe = jest.fn();
  const disconnect = jest.fn();
  const mockResizeObserver = jest.fn(cb => ({
    observe: () => {
      callback = cb;
      observe();
    },
    disconnect,
  }));

  const triggerObserverCb = (e: Event) => {
    callback([e]);
  };

  beforeAll(() => {
    // @ts-ignore
    global.ResizeObserver = mockResizeObserver;
    // @ts-ignore
    global.ResizeObserverEntry = jest.fn();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should not start observe if the target isn't set", () => {
    // @ts-ignore
    renderHelper(null);
    expect(observe).not.toHaveBeenCalled();
  });

  it('should return [0,0] for width and height', () => {
    const {result} = renderHelper();
    expect(result.current).toEqual([0, 0]);
  });

  it('should return width and height correctly', () => {
    const {result} = renderHelper();
    expect(result.current).toEqual([0, 0]);
    const event = {contentRect: {width: 50, height: 100}};
    act(() => {
      triggerObserverCb(event);
    });
    expect(result.current).toEqual([
      event.contentRect.width,
      event.contentRect.height,
    ]);
  });

  it('should call callback', () => {
    const mockCallback = jest.fn();
    const {result} = renderHelper(undefined, mockCallback);

    expect(result.current).toEqual([0, 0]);
    const event = {contentRect: {width: 50, height: 100}};
    act(() => {
      triggerObserverCb(event);
    });
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(event.contentRect);
  });

  it('should stop observe when un-mount', () => {
    const {unmount} = renderHelper();
    unmount();
    expect(disconnect).toHaveBeenCalledTimes(1);
  });
});

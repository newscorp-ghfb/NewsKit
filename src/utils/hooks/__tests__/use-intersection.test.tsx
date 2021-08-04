import React from 'react';
import {render} from '@testing-library/react';
import {useIntersection, UseIntersection} from '..';

let callback: (e: Event[]) => void;
let target: HTMLDivElement;

const observe = jest.fn();
const disconnect = jest.fn();
const unobserve = jest.fn();
const mockIntersectionObserver = jest.fn(cb => ({
  observe: (trg: any) => {
    target = trg;
    callback = cb;
    observe();
  },
  disconnect,
  unobserve,
}));

// @ts-ignore
window.IntersectionObserver = mockIntersectionObserver;

type Event = {
  isIntersecting: boolean;
  target: any;
};

describe('useIntersection hook', () => {
  const triggerObserverCb = (isIntersecting: boolean) => {
    callback([{isIntersecting, target}]);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const InViewMock = (props: UseIntersection) => {
    const [setRef, isVisible] = useIntersection<HTMLDivElement>(props);
    return <div ref={setRef}> {isVisible.toString()} </div>;
  };

  it('should trigger when in view', () => {
    const {getByText, debug, rerender} = render(<InViewMock />);
    getByText('false');
    debug();

    triggerObserverCb(true);
    rerender(<InViewMock />);
    getByText('true');

    debug();
  });

  it('should use same instance', () => {
    render(
      <div>
        <InViewMock />
        <InViewMock />
      </div>,
    );
    expect(mockIntersectionObserver).toBeCalledTimes(1);
  });

  it('with disabled option', () => {
    render(<InViewMock disabled />);
    expect(observe).toBeCalledTimes(0);
  });
});

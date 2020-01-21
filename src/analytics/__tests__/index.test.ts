import * as analytics from '../index';
import {EventQueue} from '../event-queue';

jest.mock('../event-queue');
jest.useFakeTimers();

describe('Analytics Index', () => {
  test('flushes event queue when `window.utag` available', () => {
    (window as any).utag = {};
    analytics.waitForTealium();

    expect(EventQueue.flush).toHaveBeenCalled();
  });

  test('waitForTealium to be called on event queue init', () => {
    (window as any).utag = {};
    const spy = jest.spyOn(analytics, 'waitForTealium');
    analytics.eventQueueInit();

    expect(spy).toHaveBeenCalled();
  });

  test('waitForTealium to be called after 2000 ms if `window.utag` is not available', () => {
    (window as any).utag = undefined;
    analytics.waitForTealium();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(analytics.waitForTealium, 2000);
  });
});

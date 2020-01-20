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
});

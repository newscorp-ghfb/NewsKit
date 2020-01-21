/* global window */
import * as core from '../core';
import {EventQueue} from '../event-queue';
import {UTag} from '../types';

const wndow = window as Window & {utag?: UTag};

jest.mock('../event-queue');

describe('Analytics', () => {
  test('adds interaction events to the event queue when `window.utag` unavailable', () => {
    core.trackInteraction('interaction', 'click');

    expect(EventQueue.add).toHaveBeenCalledWith({
      type: 'link',
      data: {
        event_navigation_action: 'interaction',
        event_navigation_browsing_method: 'click',
      },
    });
  });

  test('adds page view events to the event queue when `window.utag` unavailable', () => {
    core.trackPageView('page url');
    expect(EventQueue.add).toHaveBeenCalledWith({
      type: 'view',
      data: {
        page_url: 'page url',
      },
    });
  });

  test('tracks an interaction', () => {
    const stub = jest.fn();
    (wndow.utag as any) = {link: stub};

    core.trackInteraction('foo bar event', 'click');

    expect(stub).toBeCalledWith({
      event_navigation_action: 'foo bar event',
      event_navigation_browsing_method: 'click',
    });
  });

  test('tracks a page view', () => {
    const stub = jest.fn();
    (wndow.utag as any) = {view: stub};

    core.trackPageView('foo bar page');
    expect(stub).toBeCalledWith({
      page_url: 'foo bar page',
    });
  });

  describe('sendEventToTealium', () => {
    test("doesn't trigger an event if the event type is not supported", () => {
      const event = core.sendEventToTealium({
        type: 'foo' as any,
        data: {
          page_url: 'page url',
        },
      });
      expect(event).toEqual(null);
    });
  });
});

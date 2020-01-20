import {ExtendedWindow} from './types';
import * as analytics from './core';
import {EventQueue} from './event-queue';

const extendedWindow: ExtendedWindow | null =
  typeof window !== 'undefined' ? ((window as Window) as ExtendedWindow) : null;

export const waitForTealium = () => {
  if (extendedWindow && extendedWindow.utag) {
    EventQueue.flush(analytics.sendEventToTealium);
    return;
  }
  setTimeout(waitForTealium, 2000);
};

export const eventQueueInit = () => {
  waitForTealium();
};

export const tracking = analytics;

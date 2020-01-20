import {AnalyticsEvent} from './types';

export const EventQueue = {
  queue: [] as AnalyticsEvent[],
  add(e: AnalyticsEvent) {
    EventQueue.queue.push(e);
  },
  flush(handler: (e: AnalyticsEvent) => void) {
    EventQueue.queue.forEach(e => handler(e));
    EventQueue.reset();
  },
  reset() {
    EventQueue.queue = [];
  },
};

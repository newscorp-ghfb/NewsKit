import {filterByOriginator, filterByTrigger} from '../filters';
import {EventTrigger} from '../../types';

describe('instrumentation event middleware - filters', () => {
  test('filters out events by originator', () => {
    const allowedEvent = (data?: any) => ({
      originator: 'only-this-event-originator',
      trigger: EventTrigger.Swipe,
      data,
    });

    const filter = filterByOriginator(allowedEvent().originator);
    const events = [
      {originator: 'not-this-event', trigger: EventTrigger.Click},
      allowedEvent(1),
      {originator: 'not-this-event', trigger: EventTrigger.Click},
      {originator: 'not-this-event', trigger: EventTrigger.Click},
      allowedEvent(2),
    ];

    expect(filter(events)).toEqual([allowedEvent(1), allowedEvent(2)]);
  });

  test('filters out events by trigger', () => {
    const allowedEvent = (data?: any) => ({
      originator: 'only-this-event-trigger',
      trigger: EventTrigger.Swipe,
      data,
    });

    const filter = filterByTrigger(allowedEvent().trigger);
    const events = [
      allowedEvent(1),
      {originator: 'not-this-event', trigger: EventTrigger.Click},
      allowedEvent(2),
      {originator: 'not-this-event', trigger: EventTrigger.Click},
      {originator: 'not-this-event', trigger: EventTrigger.Click},
    ];

    expect(filter(events)).toEqual([allowedEvent(1), allowedEvent(2)]);
  });
});

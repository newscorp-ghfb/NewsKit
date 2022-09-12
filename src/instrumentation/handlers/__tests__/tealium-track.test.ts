import {EventTrigger} from '../../types';
import createTealiumTrackHandler, {ExtendedWindow} from '../tealium-track';

const extendedWindow: ExtendedWindow = (window as Window) as ExtendedWindow;

describe('instrumentation event handler - tealium track', () => {
  const mockEvents = [
    {
      originator: 'link',
      trigger: EventTrigger.Click,
      context: {some: 'object 1', prop1: 'context'},
    },
    {
      originator: 'link',
      trigger: EventTrigger.Swipe,
      context: {context: 'object 2', prop1: 'context'},
    },
    {
      originator: 'link',
      trigger: EventTrigger.Load,
      context: {some: 'object 2', prop1: 'context'},
    },
  ];

  const events = [
    {
      originator: 'link',
      trigger: EventTrigger.Load,
      context: {context: 'object 2', prop1: 'context'},
    },
    {
      originator: 'link',
      trigger: EventTrigger.Click,
      context: {context: 'object 2', prop1: 'context'},
    },
  ];

  beforeEach(() => {
    (extendedWindow.tealiumTrack as any) = jest.fn();
  });

  test('triggers an event', () => {
    const handler = createTealiumTrackHandler();
    handler(events);

    expect(extendedWindow.tealiumTrack).toBeCalledWith(events[0]);
  });

  test('triggers each event', () => {
    const handler = createTealiumTrackHandler();
    handler(mockEvents);

    expect(extendedWindow.tealiumTrack).nthCalledWith(1, mockEvents[0]);
    expect(extendedWindow.tealiumTrack).nthCalledWith(2, mockEvents[1]);
    expect(extendedWindow.tealiumTrack).toBeCalledWith(mockEvents[2]);
  });
});

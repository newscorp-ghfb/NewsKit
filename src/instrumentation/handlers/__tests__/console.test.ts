/* eslint-disable no-console */
import {EventTrigger} from '../../types';
import createHandler from '../console';

describe('instrumentation event handler - console', () => {
  const mockEvents = [
    {
      originator: 'originator1',
      trigger: EventTrigger.Click,
      context: {some: 'object 1', prop1: 'context'},
    },
    {
      originator: 'originator2',
      trigger: EventTrigger.Click,
      context: {some: 'object 2', prop2: 'context'},
    },
    {
      originator: 'originator3',
      trigger: EventTrigger.Click,
      context: {some: 'object 3', prop3: 'context'},
    },
  ];

  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {
      /* no op */
    });
  });

  afterEach(() => {
    (console.log as jest.Mock).mockRestore();
  });

  describe('without prefix', () => {
    test('logs each event', () => {
      const handler = createHandler();
      handler(mockEvents);

      expect(console.log).toHaveBeenCalledTimes(3);
      expect(console.log).toHaveBeenNthCalledWith(1, mockEvents[0]);
      expect(console.log).toHaveBeenNthCalledWith(2, mockEvents[1]);
      expect(console.log).toHaveBeenNthCalledWith(3, mockEvents[2]);
    });
  });

  describe('with prefix', () => {
    test('logs each event', () => {
      const prefix = 'the-prefix';
      const handler = createHandler(prefix);
      handler(mockEvents);

      expect(console.log).toHaveBeenCalledTimes(3);
      expect(console.log).toHaveBeenNthCalledWith(1, prefix, mockEvents[0]);
      expect(console.log).toHaveBeenNthCalledWith(2, prefix, mockEvents[1]);
      expect(console.log).toHaveBeenNthCalledWith(3, prefix, mockEvents[2]);
    });
  });

  test('returns the events it is passed', () => {
    const handler = createHandler();
    const returnedEvents = handler(mockEvents);

    expect(returnedEvents).toEqual(mockEvents);
  });
});

import {EventQueue} from '../event-queue';

describe('EventQueue', () => {
  test('resets the queue', () => {
    const initialQueue = EventQueue.queue;

    EventQueue.reset();

    expect(EventQueue.queue).not.toBe(initialQueue);
  });

  test('adds events to the queue', () => {
    EventQueue.add('foo' as any);
    EventQueue.add('bar' as any);
    EventQueue.add('baz' as any);

    expect(EventQueue.queue).toEqual(['foo', 'bar', 'baz']);

    EventQueue.reset();
  });

  test('calls supplied handler with each event and flushes queue', () => {
    const handler = jest.fn();
    const spy = jest.spyOn(EventQueue, 'reset');

    EventQueue.add('foo' as any);
    EventQueue.add('bar' as any);
    EventQueue.add('baz' as any);

    EventQueue.flush(handler);

    expect(handler).toBeCalledWith('foo');
    expect(handler).toBeCalledWith('bar');
    expect(handler).toBeCalledWith('baz');

    expect(spy).toBeCalled();
  });
});

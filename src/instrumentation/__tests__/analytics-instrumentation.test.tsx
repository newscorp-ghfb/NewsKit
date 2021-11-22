import {createEventInstrumentation} from '../event-instrumentation';
import {
  InstrumentationEvent,
  EventHandler,
  EventInstrumentation,
  EventTrigger,
} from '../types';

describe('createEventInstrumentation', () => {
  [
    {
      description: 'with no context',
      initialContext: undefined,
      handlerEventContext: {},
    },
    {
      description: 'with an initial context',
      initialContext: {initial: 'context val'},
      handlerEventContext: {initial: 'context val'},
    },
    {
      description: 'with initial and event context',
      initialContext: {initial: 'context val', overrided: 'one one one'},
      eventContext: {event: 'context val 2', overrided: 'two two two'},
      handlerEventContext: {
        initial: 'context val',
        event: 'context val 2',
        overrided: 'two two two',
      },
    },
  ].forEach(
    ({description, initialContext, eventContext, handlerEventContext}) => {
      describe(description, () => {
        const mockEvent: InstrumentationEvent = {
          originator: 'mock-event',
          trigger: EventTrigger.Click,
          context: eventContext,
        };

        let eventHandlers: EventHandler[];
        let instrumentation: EventInstrumentation;

        beforeAll(() => {
          eventHandlers = [
            jest.fn() as EventHandler,
            jest.fn() as EventHandler,
          ];

          instrumentation = createEventInstrumentation(
            eventHandlers,
            initialContext,
          );
        });

        test('calls each handler when an event is fired', () => {
          instrumentation.fireEvent(mockEvent);

          const mockEventWithMergedContext = {
            ...mockEvent,
            context: handlerEventContext,
          };

          expect(eventHandlers[0]).toHaveBeenCalledWith([
            mockEventWithMergedContext,
          ]);
          expect(eventHandlers[1]).toHaveBeenCalledWith([
            mockEventWithMergedContext,
          ]);
        });
      });
    },
  );

  test('throws error when no handlers are provided - undefined', () => {
    expect(() =>
      (createEventInstrumentation as any)(),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Cannot read properties of undefined (reading 'length')"`,
    );
  });

  test('throws error when no handlers are provided - empty array', () => {
    expect(() =>
      createEventInstrumentation([]),
    ).toThrowErrorMatchingInlineSnapshot(
      `"createEventInstrumentation called with no event handlers"`,
    );
  });

  test('throws error when event has no originator', () => {
    const {fireEvent} = createEventInstrumentation([() => {}] as any);
    expect(() => {
      fireEvent({
        trigger: EventTrigger.Click,
      } as any);
    }).toThrowErrorMatchingInlineSnapshot(
      `"Event originator cannot be undefined."`,
    );
  });

  test('throws error when event has no trigger', () => {
    const {fireEvent} = createEventInstrumentation([() => {}] as any);
    expect(() => {
      fireEvent({
        originator: 'a component',
      } as any);
    }).toThrowErrorMatchingInlineSnapshot(
      `"Event trigger cannot be undefined."`,
    );
  });

  test('throws error when event trigger is not one of predefined list', () => {
    const {fireEvent} = createEventInstrumentation([() => {}] as any);
    expect(() => {
      fireEvent({
        originator: 'a component',
        trigger: 'my-naughty-custom-event-trigger',
      } as any);
    }).toThrowErrorMatchingInlineSnapshot(
      `"Event trigger \\"my-naughty-custom-event-trigger\\" is not allowed."`,
    );
  });
});

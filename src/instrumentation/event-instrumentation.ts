import {
  InstrumentationEvent,
  EventContext,
  EventHandler,
  EventInstrumentation,
  EventTrigger,
} from './types';

export const mergeContexts = (
  context: EventContext,
  event: InstrumentationEvent,
): InstrumentationEvent => ({
  ...event,
  context: {
    ...context,
    ...event.context,
  },
});

const allowedEventTriggers = Object.values(EventTrigger);
const assertEvent = (event: InstrumentationEvent) => {
  if (!event.originator) {
    throw new Error(`Event originator cannot be undefined.`);
  }
  if (!event.trigger) {
    throw new Error(`Event trigger cannot be undefined.`);
  }
  if (!allowedEventTriggers.includes(event.trigger)) {
    throw new Error(`Event trigger "${event.trigger}" is not allowed.`);
  }
};

export const createEventInstrumentation = (
  eventHandlers: EventHandler[],
  context: EventContext = {},
): EventInstrumentation => {
  if (!eventHandlers.length) {
    throw new Error('createEventInstrumentation called with no event handlers');
  }

  const handlers = [...eventHandlers];
  const fireEvent = (event: InstrumentationEvent) => {
    assertEvent(event);
    handlers.forEach(handler => {
      handler([mergeContexts(context, event)]);
    });
  };

  return {
    context,
    fireEvent,
  };
};

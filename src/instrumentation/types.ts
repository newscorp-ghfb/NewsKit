export type EventContext = object;

export enum EventTrigger {
  Click = 'click',
  Swipe = 'swipe',
  Load = 'load',
  Start = 'start',
  Stop = 'stop',
  End = 'end',
}

export interface InstrumentationEvent {
  originator: string;
  trigger: EventTrigger;
  data?: object;
  context?: EventContext;
}

export type EventHandler = (
  events: InstrumentationEvent[],
) => InstrumentationEvent[];

export interface EventInstrumentation {
  context: EventContext;
  fireEvent: (event: InstrumentationEvent) => void;
}

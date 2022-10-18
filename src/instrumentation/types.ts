export type EventContext = object;

export enum EventTrigger {
  Click = 'click',
  Swipe = 'swipe',
  Load = 'load',
  Start = 'start',
  Stop = 'stop',
  End = 'end',
  Pulse = 'pulse',
  Focus = 'focus',
  Change = 'change', // TODO: can we have change?
}

export interface InstrumentationEvent {
  originator: string;
  trigger: EventTrigger;
  context?: EventContext;
}

export type EventHandler = (
  events: InstrumentationEvent[],
) => InstrumentationEvent[];

export interface EventInstrumentation {
  children?: React.ReactNode;
  context: EventContext;
  fireEvent: (event: InstrumentationEvent) => void;
}

export interface EventData {
  eventContext?: EventContext;
  eventOriginator?: string;
}

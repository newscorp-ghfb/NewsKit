export type EventContext = object;

export enum EventTrigger {
  Click = 'click',
  Swipe = 'swipe',
  Load = 'load',
  Start = 'start',
  Stop = 'stop',
  End = 'end',
  Pulse = 'pulse',
}

export interface InstrumentationEvent {
  originator: string;
  trigger: EventTrigger;
  data?: object;
  context?: EventContext;
  media_player?: string;
  media_name?: string;
  media_type?: string;
  media_duration?: string;
  media_segment?: string;
  media_offset?: string;
}

export type EventHandler = (
  events: InstrumentationEvent[],
) => InstrumentationEvent[];

export interface EventInstrumentation {
  context: EventContext;
  fireEvent: (event: InstrumentationEvent) => void;
}

import React from 'react';

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
  context: EventContext;
  fireEvent: (event: InstrumentationEvent) => void;
}

export interface EventInstrumentationProviderProps
  extends EventInstrumentation {
  children: React.ReactNode;
}

export interface EventData {
  eventContext?: EventContext;
  eventOriginator?: string;
}

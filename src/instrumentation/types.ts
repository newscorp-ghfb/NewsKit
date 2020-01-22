export type EventContext = object;

export enum EventTrigger {
  Click = 'click',
  Swipe = 'swipe',
}

export enum TealiumEvents {
  Link = 'link',
  View = 'view',
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

export type UTag = {
  link(e: InstrumentationEvent): void;
  view(e: InstrumentationEvent): void;
};

export interface ExtendedWindow extends Window {
  utag: UTag;
}

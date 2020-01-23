import {EventHandler, InstrumentationEvent, EventTrigger} from '../types';

export interface ExtendedWindow extends Window {
  utag: UTag;
}

interface UTag {
  link(e: InstrumentationEvent): void;
  view(e: InstrumentationEvent): void;
}

const extendedWindow: ExtendedWindow | null =
  typeof window !== 'undefined' ? ((window as Window) as ExtendedWindow) : null;

export function sendEventToTealium(e: InstrumentationEvent) {
  switch (e.trigger) {
    case EventTrigger.Click:
      return extendedWindow && extendedWindow.utag.link(e);
    case EventTrigger.Load:
      return extendedWindow && extendedWindow.utag.view(e);
    default:
      return null;
  }
}

const createHandler = (): EventHandler => events =>
  events.map(event => {
    sendEventToTealium(event);
    return event;
  });

export default createHandler;

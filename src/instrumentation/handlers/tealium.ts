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
  if (extendedWindow && extendedWindow.utag) {
    return e.trigger === EventTrigger.Load
      ? extendedWindow.utag.view(e)
      : extendedWindow.utag.link(e);
  }
  return null;
}

const createHandler = (): EventHandler => events =>
  events.map(event => {
    sendEventToTealium(event);
    return event;
  });

export default createHandler;

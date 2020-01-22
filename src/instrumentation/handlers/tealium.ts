import {
  EventHandler,
  InstrumentationEvent,
  ExtendedWindow,
  TealiumEvents,
} from '../types';

const extendedWindow: ExtendedWindow | null =
  typeof window !== 'undefined' ? ((window as Window) as ExtendedWindow) : null;

export function sendEventToTealium(e: InstrumentationEvent) {
  switch (e.originator) {
    case TealiumEvents.Link:
      return extendedWindow && extendedWindow.utag.link(e);
    case TealiumEvents.View:
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

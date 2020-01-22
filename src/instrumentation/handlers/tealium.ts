import {
  EventHandler,
  InstrumentationEvent,
  ExtendedWindow,
  EventTrigger,
} from '../types';

const extendedWindow: ExtendedWindow | null =
  typeof window !== 'undefined' ? ((window as Window) as ExtendedWindow) : null;

export function sendEventToTealium(e: InstrumentationEvent) {
  switch (e.trigger) {
    case EventTrigger.Click:
      return extendedWindow && extendedWindow.utag.link(e);
    case EventTrigger.PageView:
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

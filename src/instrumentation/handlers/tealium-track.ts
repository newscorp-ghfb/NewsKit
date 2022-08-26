import {EventHandler, InstrumentationEvent} from '../types';

export interface ExtendedWindow extends Window {
  tealiumTrack(e: InstrumentationEvent): void;
}

const extendedWindow: ExtendedWindow | null =
  typeof window !== 'undefined' ? ((window as Window) as ExtendedWindow) : null;

export function sendEventTrackingToTealium(e: InstrumentationEvent) {
  if (extendedWindow) {
    return extendedWindow.tealiumTrack(e);
  }
  return null;
}

const createTealiumTrackHandler = (): EventHandler => events =>
  events.map(event => {
    sendEventTrackingToTealium(event);
    return event;
  });

export default createTealiumTrackHandler;

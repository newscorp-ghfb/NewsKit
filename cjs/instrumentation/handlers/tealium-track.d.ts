import { EventHandler, InstrumentationEvent } from '../types';
export interface ExtendedWindow extends Window {
    tealiumTrack(e: InstrumentationEvent): void;
}
export declare function sendEventTrackingToTealium(e: InstrumentationEvent): void | null;
declare const createTealiumTrackHandler: () => EventHandler;
export default createTealiumTrackHandler;
//# sourceMappingURL=tealium-track.d.ts.map
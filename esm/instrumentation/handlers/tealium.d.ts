import { EventHandler, InstrumentationEvent } from '../types';
export interface ExtendedWindow extends Window {
    utag: UTag;
}
interface UTag {
    link(e: InstrumentationEvent): void;
    view(e: InstrumentationEvent): void;
}
export declare function sendEventToTealium(e: InstrumentationEvent): void | null;
declare const createHandler: () => EventHandler;
export default createHandler;
//# sourceMappingURL=tealium.d.ts.map
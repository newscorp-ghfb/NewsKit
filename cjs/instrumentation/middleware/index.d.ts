import { EventHandler } from '../types';
export declare const composeInstrumentationMiddleware: (...middlewares: EventHandler[]) => EventHandler;
export declare const instrumentationMiddleware: {
    filterByOriginator: (value: string) => (events: import("../types").InstrumentationEvent[]) => import("../types").InstrumentationEvent[];
    filterByTrigger: (value: import("../types").EventTrigger) => (events: import("../types").InstrumentationEvent[]) => import("../types").InstrumentationEvent[];
};
//# sourceMappingURL=index.d.ts.map
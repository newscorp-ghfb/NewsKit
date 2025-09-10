import { InstrumentationEvent, EventContext, EventHandler, EventInstrumentation } from './types';
export declare const mergeContexts: (context: EventContext, event: InstrumentationEvent) => InstrumentationEvent;
export declare const createEventInstrumentation: (eventHandlers: EventHandler[], context?: EventContext) => EventInstrumentation;
//# sourceMappingURL=event-instrumentation.d.ts.map
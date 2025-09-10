import React from 'react';
import { EventInstrumentation, InstrumentationEvent } from './types';
export declare const InstrumentationProvider: React.FC<Partial<EventInstrumentation>>;
export declare const withInstrumentation: <P extends {}>(Component: React.ComponentType<P & {
    fireEvent: EventInstrumentation['fireEvent'];
}>) => {
    (props: P): React.JSX.Element;
    displayName: string | undefined;
};
export declare const useInstrumentation: () => {
    fireEvent: (event: InstrumentationEvent) => void;
};
//# sourceMappingURL=instrumentation-provider.d.ts.map
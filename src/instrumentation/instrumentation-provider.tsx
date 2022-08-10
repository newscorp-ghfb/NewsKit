import React, {useContext, useCallback} from 'react';
import {
  EventInstrumentation,
  EventInstrumentationProviderProps,
  InstrumentationEvent,
} from './types';
import {mergeContexts} from './event-instrumentation';

const InstrumentationContext = React.createContext<EventInstrumentation>({
  context: {},
  fireEvent: () => {},
});

export const InstrumentationProvider: React.FC<
  Partial<EventInstrumentationProviderProps>
> = ({context = {}, fireEvent, children}) => {
  const parent = useContext(InstrumentationContext);

  return (
    <InstrumentationContext.Provider
      value={{
        fireEvent:
          fireEvent ||
          (event => parent.fireEvent(mergeContexts(context, event))),
        context: {
          ...parent.context,
          ...context,
        },
      }}
    >
      {children}
    </InstrumentationContext.Provider>
  );
};

const useFireEvent = () => {
  // Don't expose the internal context object.
  const {fireEvent, context} = useContext(InstrumentationContext);
  return useCallback(
    (event: InstrumentationEvent) => fireEvent(mergeContexts(context, event)),
    [context, fireEvent],
  );
};

export const withInstrumentation = <P extends {}>(
  Component: React.ComponentType<
    P & {fireEvent: EventInstrumentation['fireEvent']}
  >,
) => {
  const ComponentWithInstrumentation = (props: P) => (
    <Component fireEvent={useFireEvent()} {...props} />
  );
  ComponentWithInstrumentation.displayName = Component.displayName;
  return ComponentWithInstrumentation;
};

export const useInstrumentation = () => ({
  fireEvent: useFireEvent(),
});

import React, {useContext, useCallback} from 'react';
import {EventInstrumentation, InstrumentationEvent} from './types';

const InstrumentationContext = React.createContext<EventInstrumentation>({
  context: {},
  fireEvent: () => {},
});

export const InstrumentationProvider: React.FC<
  Partial<EventInstrumentation>
> = ({context, fireEvent, children}) => {
  const parent = useContext(InstrumentationContext);
  return (
    <InstrumentationContext.Provider
      value={{
        fireEvent: fireEvent || parent.fireEvent,
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
    (event: InstrumentationEvent) => fireEvent({...event, context}),
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

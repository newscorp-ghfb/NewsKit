import React, {useContext} from 'react';
import {EventInstrumentation} from './types';

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

export const withInstrumentation = <P extends {}>(
  Component: React.ComponentType<
    P & {fireEvent: EventInstrumentation['fireEvent']}
  >,
) => {
  const ComponentWithInstrumentation = (props: P) => {
    const {fireEvent, context} = useContext(InstrumentationContext);
    return (
      <Component
        fireEvent={event => fireEvent({...event, context})}
        {...props}
      />
    );
  };
  ComponentWithInstrumentation.displayName = Component.displayName;
  return ComponentWithInstrumentation;
};

export const useInstrumentation = () => ({
  // Don't expose the internal context object.
  fireEvent: useContext(InstrumentationContext).fireEvent,
});

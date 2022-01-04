import React from 'react';
import {EventInstrumentation} from './types';

const InstrumentationContext = React.createContext<EventInstrumentation>({
  context: {},
  fireEvent: () => {},
});

export const InstrumentationProvider: React.FC<
  Partial<EventInstrumentation>
> = ({context, fireEvent, children}) => (
  <InstrumentationContext.Consumer>
    {parent => (
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
    )}
  </InstrumentationContext.Consumer>
);

export const withInstrumentation = <P extends {}>(
  Component: React.ComponentType<
    P & {fireEvent: EventInstrumentation['fireEvent']}
  >,
) => {
  const ComponentWithInstrumentation = (props: P) => (
    <InstrumentationContext.Consumer>
      {({context, fireEvent}) => (
        <Component
          fireEvent={event => fireEvent({...event, context})}
          {...props}
        />
      )}
    </InstrumentationContext.Consumer>
  );
  ComponentWithInstrumentation.displayName = Component.displayName;
  return ComponentWithInstrumentation;
};

export const useInstrumentation = () => ({
  // Don't expose the internal context object.
  fireEvent: React.useContext(InstrumentationContext).fireEvent,
});

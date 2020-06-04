import React from 'react';

import {
  InstrumentationProvider,
  instrumentationHandlers,
  createEventInstrumentation,
  ThemeProvider,
  newskitLightTheme,
  EventTrigger,
  useInstrumentation,
} from 'newskit';

const rootContext = {
  pageUrl: 'www.my-amazing-website.com',
};

const instrumentation = createEventInstrumentation(
  [instrumentationHandlers.createConsoleHandler()],
  rootContext,
);

const RailItem: React.FC<{itemId: number}> = ({itemId, ...props}) => {
  const {fireEvent} = useInstrumentation();
  return (
    <button
      {...props}
      onClick={() => {
        fireEvent({
          originator: 'button',
          trigger: EventTrigger.Click,
        });
      }}
    >
      {itemId}: A really great item!
    </button>
  );
};

const Rail: React.FC<{
  railName: string;
}> = ({railName}) => (
  <div>
    <InstrumentationProvider
      context={{
        pageArea: 'rail',
        railName,
      }}
    >
      <h3>{railName}</h3>
      <RailItem itemId={1} />
      <RailItem itemId={2} />
    </InstrumentationProvider>
  </div>
);

const App = () => (
  <ThemeProvider theme={newskitLightTheme}>
    <InstrumentationProvider {...instrumentation}>
      <Rail railName="Some great rail" />
    </InstrumentationProvider>
  </ThemeProvider>
);

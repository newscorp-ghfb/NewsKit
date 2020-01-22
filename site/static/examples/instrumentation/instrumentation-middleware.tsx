import {
  instrumentationHandlers,
  composeInstrumentationMiddleware,
  instrumentationMiddleware,
  EventTrigger,
  createEventInstrumentation,
} from 'newskit';

const consoleHandler1 = composeInstrumentationMiddleware(
  instrumentationHandlers.createConsoleHandler('Click event:'),
  instrumentationMiddleware.filterByTrigger(EventTrigger.Click),
);

const consoleHandler2 = composeInstrumentationMiddleware(
  instrumentationHandlers.createConsoleHandler('Swipe event:'),
  instrumentationMiddleware.filterByTrigger(EventTrigger.Swipe),
);

const consoleHandler3 = instrumentationHandlers.createConsoleHandler(
  'Some other event:',
);

const pageViewHandler = composeInstrumentationMiddleware(
  instrumentationHandlers.createTealiumHandler(),
  instrumentationMiddleware.filterByTrigger(EventTrigger.PageView),
)

const linkHandler = composeInstrumentationMiddleware(
  instrumentationHandlers.createTealiumHandler(),
  instrumentationMiddleware.filterByTrigger(EventTrigger.Click),
)

const handlers = [consoleHandler1, consoleHandler2, consoleHandler3, pageViewHandler, linkHandler];

const instrumentation = createEventInstrumentation(handlers, {
  url: 'www.my-amazing-website.com',
});

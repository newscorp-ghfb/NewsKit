import {
  instrumentationHandlers,
  createEventInstrumentation,
  InstrumentationProvider,
  Link,
} from 'newskit';

const handlers = [
  instrumentationHandlers.createConsoleHandler(),
  instrumentationHandlers.createTealiumHandler(),

];
const contextObject = {
  url: 'www.my-amazing-website.com',
}
const instrumentation = createEventInstrumentation(handlers, contextObject);

const MyPage = (
  <InstrumentationProvider {...instrumentation}>
    <Link href="example.com">My Amazing Link</Link>
  </InstrumentationProvider>
);

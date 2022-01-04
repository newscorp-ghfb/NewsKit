import {
  instrumentationHandlers,
  createEventInstrumentation,
  InstrumentationProvider,
  Link,
} from './node_modules/newskit';

const handlers = [instrumentationHandlers.createConsoleHandler()];
const contextObject = {
  url: 'www.my-amazing-website.com',
};
const instrumentation = createEventInstrumentation(handlers, contextObject);

const MyRailSection = ({railItems}) => (
  <InstrumentationProvider context={{showRailItems: railItems}}>
    {railItems.map(item => (
      <MyRailItem data={item} />
    ))}
  </InstrumentationProvider>
);

const MyPage = (
  <InstrumentationProvider {...instrumentation}>
    <Link href="example.com">My Amazing Link</Link>
    <MyRailSection railItems={railItems}/>
  </InstrumentationProvider>
);

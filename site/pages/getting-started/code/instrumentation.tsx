import React from 'react';
import {Block, P, InlineMessage, UnorderedList} from 'newskit';
import {Code} from '../../../components/code';
import {Link} from '../../../components/link';
import {InlineCode} from '../../../components/markdown-elements';
import {LayoutProps} from '../../../components/layout';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {Table} from '../../../components/table';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../../components/content-structure';

const customEventRows = [
  {
    key: 'Click',
    value: 'click',
  },
  {
    key: 'Swipe',
    value: 'swipe',
  },
  {
    key: 'Load',
    value: 'load',
  },
  {
    key: 'Start',
    value: 'start',
  },
  {
    key: 'Stop',
    value: 'stop',
  },
  {
    key: 'End',
    value: 'end',
  },
  {
    key: 'Pulse',
    value: 'pulse',
  },
  {
    key: 'Focus',
    value: 'focus',
  },
];

const contentOverrides = {
  typographyPreset: {
    xs: 'editorialParagraph020',
    md: 'editorialParagraph030',
  },
};

const InstrumentationSetup = (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Instrumentation setup',
      description:
        'This page describes how to setup instrumentation on NewsKit components',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Guides',
      name: 'Instrumentation setup',
      hero: {
        illustration: 'guides/instrumentation-setup-hero',
      },
      introduction: `This page describes how to setup instrumentation on NewsKit components`,
    }}
    featureCard={{
      title: 'Need help?',
      description: 'Can’t find what you’re looking for?',
      href: 'about/contact-us/',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description={
            <>
              NewsKit components are built to emit events &quot;out of the
              box&quot; via the provided NewsKit event instrumentation system.
              This system requires a small amount of setup in your project to
              allow the emitted events to reach your desired tag manager. Events
              fired via the provided instrumentation system can be forwarded to
              as many &quot;handlers&quot; as desired. NewsKit provides two
              handlers; a console handler that outputs the fired events to the
              browser console, and a Tealium handler that forwards the event
              onto the Tealium tag manager (Tealium must be present on the page
              for this handler to work). You can also create your own handlers,
              for example, if you require forwarding events to a different tag
              manager.
              <br />
              <br />
              As well as the above handlers, NewsKit also provides a middleware
              composition system to allow for operations on events before they
              reach a handler. For example, if you wanted to filter events to
              forward only a specific set to a tag manager, perform some event
              data transformations, or batch the events reaching a handler.
            </>
          }
          showSeparator
          childrenColSpan={ContentColSpan.TEXT}
        >
          <InlineMessage role="region" aria-label="Github">
            For more information, users with the relevant access can read the
            internal RFC which lead to this implementation. This can be found on{' '}
            <Link href="https://github.com/newsuk/nuk-rfcs" target="_blank">
              Github.
            </Link>
          </InlineMessage>
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="setup">
        <ContentPrimary
          id="setup"
          toc="Setup"
          headline="Setup"
          description={
            <>
              The event instrumentation system is part of NewsKit, so the same
              regular install you have for other components is sufficient. The
              first step is to create the event instrumentation by calling the
              function; <InlineCode>createEventInstrumentation</InlineCode>.
              This function takes two arguments;
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList
            markerAlign="start"
            overrides={{
              spaceStack: 'space050',
              marker: {
                spaceInline: 'space020',
              },
              content: contentOverrides,
            }}
          >
            <>
              an array of event handler functions; an event handler function
              simply takes an array of events and returns the same. There are
              two handlers provided by NewsKit, a console and Tealium handler
              (exported under <InlineCode>instrumentationHandlers</InlineCode>
              ), but you can also pass your own custom handlers.
            </>
            <>
              an event context object; this is an optional, but recommended,
              object of contextual data relevant to the page the events are
              being fired from. It might contain for example the page URL and a
              user identifier.
            </>
          </UnorderedList>
          <P overrides={contentOverrides}>
            This function will return an object containing the context passed to
            it and the <InlineCode>fireEvent</InlineCode> function. This is the
            function that is used internally by the NewsKit components to fire
            events to your handlers.
          </P>
        </ContentPrimary>

        <ContentSecondary
          headline="Instrumentation provider"
          description={
            <>
              Similar to the way you may use the{' '}
              <Link href="/theme/theming/using-a-theme/" target="_blank">
                ThemeProvider
              </Link>{' '}
              to set the components theme, NewsKit provides a React context
              component called <InlineCode>InstrumentationProvider</InlineCode>{' '}
              to wrap the React DOM of your project and provide the required
              event instrumentation down to NewsKit components. The props
              required for this component match the object output from the{' '}
              <InlineCode>createEventInstrumentation</InlineCode> function and
              as a result, the object can simply be destructured into the props
              of the provider.
            </>
          }
        >
          <InlineMessage overrides={{marginBlockEnd: 'space080'}}>
            Keep in mind that <InlineCode>NewsKitProvider</InlineCode> already
            contains <InlineCode>InstrumentationProvider</InlineCode> so use it
            only when want to create a new context for part of your application.
          </InlineMessage>
          <Code>
            {`import {
  instrumentationHandlers,
  createEventInstrumentation,
  InstrumentationProvider,
  Link,
} from 'newskit';

const handlers = [
  instrumentationHandlers.createConsoleHandler(),
  instrumentationHandlers.createTealiumHandler(),
  instrumentationHandlers.createTealiumTrackHandler(),
];

const contextObject = {
  pageUrl: 'www.my-amazing-website.com',
};

const instrumentation = createEventInstrumentation(handlers, contextObject);

const MyPage = (
  <InstrumentationProvider {...instrumentation}>
    <Link href="example.com">My Amazing Link</Link>
  </InstrumentationProvider>
);`}
          </Code>
        </ContentSecondary>
        <ContentSecondary description="In this example, the Link component, and any other NewsKit instrumentation enabled components would emit events to the browser's console. This could look something like this:">
          <Code>
            {`{
  "originator": "link",
  "trigger": "click",
  "context": {
    "url": "www.my-amazing-website.com"
  }
}`}
          </Code>
        </ContentSecondary>

        <ContentSecondary
          description="InstrumentationProvider components can be nested if you wish to extend the context object to add extra data. See the relevant section below for more information and examples."
          childrenColSpan={ContentColSpan.TEXT}
        />

        <ContentSecondary
          headline="Middleware"
          description={
            <>
              NewsKit also contains a middleware composition system to allow for
              operations on events before they reach a handler. For example, if
              you wanted to filter events to forward only a specific set to a
              tag manager, perform some event data transformations, or batch the
              events reaching a handler. Instrumentation middleware functions
              have the same signature as handlers; they take in an array of
              events and must return an array of events. The returned array can
              be a different length or even empty if necessary, though it is
              recommended that middleware functions are pure and do not mutate
              the array or events.
              <br />
              <br />
              In the example below, filter middleware is used to pass only
              specific events to specific handlers.
            </>
          }
        >
          <Code>
            {`import {
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

const tealiumHandler = composeInstrumentationMiddleware(
  instrumentationHandlers.createTealiumHandler(),
  instrumentationMiddleware.filterByTrigger(EventTrigger.Load),
)

const handlers = [consoleHandler1, consoleHandler2, consoleHandler3, tealiumHandler];

const instrumentation = createEventInstrumentation(handlers, {
  url: 'www.my-amazing-website.com',
});`}
          </Code>
        </ContentSecondary>

        <ContentSecondary
          headline="Custom Event Firing"
          description="You should not need to add any instrumentation event firing to NewsKit components as this is already provided, but there may be a case where you have pre-existing custom components and wish to utilise the single NewsKit event instrumentation. This can be done easily in two ways;"
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList
            markerAlign="start"
            overrides={{
              spaceStack: 'space050',
              marker: {
                spaceInline: 'space020',
              },
              content: contentOverrides,
            }}
          >
            <>
              using the NewsKit HOC <InlineCode>withInstrumentation</InlineCode>
              . This will wrap the component argument in the instrumentation
              context and a <InlineCode>fireEvent</InlineCode> prop will be
              passed to the component.
            </>
            <>
              using the NewsKit React hook{' '}
              <InlineCode>useInstrumentation</InlineCode>. This will return an
              object containing the <InlineCode>fireEvent</InlineCode> function.
            </>
          </UnorderedList>
          <P overrides={contentOverrides}>
            You can then call this function with your custom instrumentation
            event as necessary, so long as it meets event requirements. Event
            objects must contain an event <InlineCode>originator</InlineCode>{' '}
            (the name of the component firing the event) and an event
            <InlineCode>trigger</InlineCode> from the{' '}
            <InlineCode>EventTrigger</InlineCode> enum listed below (this can be
            used as a JS object or the direct string values in non-TS projects).
            Events can also contain a <InlineCode>context</InlineCode> object,
            which can be any JSON-serializable structure.
          </P>
        </ContentSecondary>
        <ContentSecondary>
          <Code>
            {`import {withInstrumentation, EventTrigger} from 'newskit';

export interface MySpecialCustomButtonProps {
  buttonText: string;
}

export const MySpecialCustomButton: React.FC<
  MySpecialCustomButtonProps
> = withInstrumentation(({fireEvent, buttonText}) => (
  <button
    onClick={() =>
      fireEvent({
        originator: 'my-special-custom-button',
        trigger: EventTrigger.Click,
        context: {
          buttonText,
        },
      })
    }
  >
    {buttonText}
  </button>
));`}
          </Code>
          <Block spaceStack="space080" />
          <Table columns={['Key', 'Value']} rows={customEventRows} />
        </ContentSecondary>

        <ContentSecondary
          headline="Nested Instrumentation Providers & Contexts"
          description={
            <>
              It is possible to build up and extend the context of an event by
              nesting instances of the{' '}
              <InlineCode>InstrumentationProvider</InlineCode>. Each provider
              can take a context object which will be shallow merged onto the
              parent when an event is fired.
              <br />
              <br />
              This can be useful to build up event information that is specific
              to a particular component instance, without that component needing
              to know anything outside its own scope. For example, a button can
              fire a click event, but the layers of context can provide the
              information on what the button is for and where it is on the page.
            </>
          }
        >
          <Code>
            {`import React from 'react';

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
  <NewsKitProvider theme={newskitLightTheme} instrumentation={instrumentation}>
    <Rail railName="Some great rail" />
  </NewsKitProvider>
);`}
          </Code>
        </ContentSecondary>
        <ContentSecondary
          description={
            <>
              In this example, we have a root{' '}
              <InlineCode>NewsKitProvider</InlineCode> providing the page URL.
              Inside the <InlineCode>Rail</InlineCode> component, we have{' '}
              <InlineCode>InstrumentationProvider</InlineCode>; this provides
              any child events with rail specifics, like the rail name. The{' '}
              <InlineCode>RailItem</InlineCode> then contains a button that
              fires a click event. The resulting click event would look like
              this:
            </>
          }
        >
          <Code>
            {`{
  "context": {
    "pageUrl": "www.my-amazing-website.com",
    "pageArea": "rail",
    "railName": "Some great rail"
  },
  "originator": "button",
  "trigger": "click"
}`}
          </Code>
        </ContentSecondary>
        <ContentSecondary
          description={
            <>
              It is important to remember that in the example above, the{' '}
              <InlineCode>fireEvent</InlineCode> function is scoped to the
              context of the parent provider (the one which wraps the{' '}
              <InlineCode>RailItem</InlineCode>). This means if we wanted to add
              more context to the event inside the{' '}
              <InlineCode>RailItem</InlineCode>, in the example above, doing the
              following would NOT work as expected. The{' '}
              <InlineCode>railItemId</InlineCode> we are adding to the context
              would NOT appear on the event context.
            </>
          }
        >
          <Code>
            {`const RailItem: React.FC<{itemId: number}> = ({itemId, ...props}) => {
const {fireEvent} = useInstrumentation();
return (
  <InstrumentationProvider
    context={{
      // THIS WON'T BE INCLUDED! The fireEvent above is outside the scope of this provider!
      railItemId: itemId,
    }}
  >
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
  </InstrumentationProvider>
 );
};`}
          </Code>
        </ContentSecondary>
        <ContentSecondary description="This would produce the following event (for rail item 1) as expected:">
          <Code>
            {`const RailItem: React.FC<{itemId: number}> = ({itemId, ...props}) => {
  const {fireEvent} = useInstrumentation();
  const eventContext = {
    railItemId: itemId,
  };
  return (
    <button
      {...props}
      onClick={() => {
        fireEvent({
          originator: 'button',
          trigger: EventTrigger.Click,
          context: eventContext,
        });
      }}
    >
      {itemId}: A really great item!
    </button>
  );
};`}
          </Code>
        </ContentSecondary>
        <ContentSecondary
          description={
            <>
              Instead, we can add context to the event directly (or we must put
              the button into a separate component and get the{' '}
              <InlineCode>fireEvent</InlineCode>
              function at that scope level). Passing context information via the
              fireEvent function is the simpler of the two options:
            </>
          }
          showSeparator
        >
          <Code>
            {`{
  "context": {
    "pageUrl": "www.my-amazing-website.com",
    "pageArea": "rail",
    "railName": "Some great rail",
    "railItemId": 1
  },
  "originator": "button",
  "trigger": "click"
}`}
          </Code>
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </GuidePageTemplate>
);

export default InstrumentationSetup;

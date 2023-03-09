import React from 'react';
import {InlineMessage, UnorderedList, P} from 'newskit';
import {Code} from '../../../components/code';
import {Link} from '../../../components/link';
import {MediaList} from '../../../components/media-list';
import {InlineCode} from '../../../components/markdown-elements';
import {LayoutProps} from '../../../components/layout';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../../components/content-structure';

const whatNextCards = [
  {
    media: getIllustrationComponent('theme/creating-a-theme/hero'),
    title: 'Creating a theme',
    description: 'Theme NewsKit components to match your brand.',
    href: '/theme/theming/creating-a-theme/',
  },
  {
    media: getIllustrationComponent('theme/using-a-theme/hero'),
    title: 'Using a theme',
    description: 'Render NewsKit components using an available theme.',
    href: '/theme/theming/using-a-theme/',
  },
];

const EngineeringQuickstart = (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Engineering quickstart',
      description: 'Start building digital products with NewsKit.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Guides',
      name: 'Engineering quickstart',
      hero: {
        illustration: 'guides/engineering-quickstart/hero',
      },
      introduction: `Start building digital products with NewsKit.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="Requirements">
        <ContentPrimary
          id="Requirements"
          toc="Requirements"
          headline="Requirements"
          description="To use NewsKit components in your project, you’ll need:"
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList
            markerAlign="start"
            overrides={{
              spaceStack: 'space060',
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marker: {
                spaceInline: 'space020',
              },
            }}
          >
            <>
              <Link href="https://nodejs.org/en/download/" target="_blank">
                Node.js
              </Link>{' '}
              v14 or newer.
            </>
            <>
              A project to install NewsKit into. If you need to create a new one
              try{' '}
              <Link
                href="https://nextjs.org/learn/basics/create-nextjs-app"
                target="_blank"
              >
                Next.js
              </Link>{' '}
              or{' '}
              <Link
                href="https://create-react-app.dev/docs/getting-started/"
                target="_blank"
              >
                Create React App
              </Link>
              .
            </>
          </UnorderedList>
        </ContentPrimary>

        <ContentSecondary childrenColSpan={ContentColSpan.TEXT} showSeparator>
          <InlineMessage>
            We recommend{' '}
            <Link href="https://www.typescriptlang.org/" target="_blank">
              typescript
            </Link>
            , but NewsKit works with vanilla javascript too.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="install the package">
        <ContentPrimary
          id="installthepackage"
          toc="Install the package"
          headline="Install the package"
          description={
            <>
              Install the NewsKit package using a package manager like{' '}
              <Link
                href="https://docs.npmjs.com/cli/v8/commands/npm"
                target="_blank"
              >
                npm
              </Link>{' '}
              or{' '}
              <Link href="https://classic.yarnpkg.com/lang/en/" target="_blank">
                yarn
              </Link>
              .
            </>
          }
          showSeparator
        >
          <Code>npm install newskit @emotion/react @emotion/styled</Code>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>or</P>
          <br />
          <Code>yarn add newskit @emotion/react @emotion/styled</Code>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            Please note that newskit is using{' '}
            <Link href="https://emotion.sh/docs/introduction" target="_blank">
              emotion
            </Link>{' '}
            as styling engine, that is why you also need to install
            <InlineCode>@emotion/react</InlineCode> and
            <InlineCode>@emotion/styled</InlineCode>.
          </P>
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="set up an app">
        <ContentPrimary
          id="setupanapp"
          toc="Set up an app"
          headline="Set up an app"
          description={
            <>
              NewsKit components can be used like any{' '}
              <Link
                href="https://reactjs.org/docs/components-and-props.html"
                target="_blank"
              >
                React components
              </Link>
              . They need to be descendants of a{' '}
              <InlineCode>NewsKitProvider</InlineCode> which provides a single
              wrapper to configure your application. It adds a{' '}
              <Link href="/theme/theming/using-a-theme/">ThemeProvider</Link>,{' '}
              <Link href="/components/utils/hooks/#usemediaqueryobject">
                MediaQueryProvider
              </Link>
              ,{' '}
              <Link href="/getting-started/code/instrumentation/">
                InstrumentationProvider
              </Link>{' '}
              and a LayerOrganizer to handle theming, media queries,
              instrumentation and stacking context in the application.
              <br />
              <br />
              Here&apos;s the &quot;Hello World!&quot; example of using a
              NewsKit <Link href="/components/tag/">Tag component</Link> with
              the NewsKitProvider.
            </>
          }
          showSeparator
        >
          <Code>
            {`import {NewsKitProvider, Tag, newskitLightTheme} from 'newskit';
import React from 'react';
export default class App extends React.Component {
  render() {
    return (
      <NewsKitProvider 
        theme={newskitLightTheme}
        instrumentation={'instrumentation provider props'}
        layer={'layer organizer props'}
        >
        <Tag
          href="http://example.com"
          size="medium">
            Tag Content
        </Tag>
      </NewsKitProvider>
    )
  }
}`}
          </Code>
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="what’s next?">
        <ContentPrimary
          id="whatsnext"
          toc="What’s next?"
          headline="What’s next?"
          description=""
          showSeparator
        >
          <MediaList
            cards={whatNextCards}
            gridProps={{xsRowGutter: 'space050'}}
          />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </GuidePageTemplate>
);

export default EngineeringQuickstart;

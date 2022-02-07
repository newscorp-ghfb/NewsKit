import React from 'react';
import {InlineMessage, UnorderedList, P} from 'newskit';
import {Code} from '../../../components/code';
import {Link} from '../../../components/link';
import {MediaList} from '../../../components/media-list';
import {InlineCode} from '../../../components/markdown-elements';
import {LayoutProps} from '../../../components/layout';
import {IconFilledCircle} from '../../../components/icons';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';

const whatNextCards = [
  {
    media: getIllustrationComponent('theme/creating-a-theme/hero'),
    title: 'Creating a theme',
    description:
      'Themes represent the brand’s identity, controlling the appearance of all NewsKit components.',
    href: '/theme/theming/creating-a-theme/',
  },
  {
    media: getIllustrationComponent('theme/using-a-theme/hero'),
    title: 'Using a theme',
    description:
      'To render NewsKit components you must have a theme available for them to utilise.',
    href: '/theme/theming/using-a-theme/',
  },
];

export default (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Engineering quickstart',
      description:
        'This page describes how to get started building a web application with NewsKit.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Guides',
      name: 'Engineering quickstart',
      hero: {
        illustration: 'guides/engineering-quickstart/hero',
      },
      introduction: `This page describes how to get started building a web application with NewsKit.`,
    }}
    featureCard={{
      title: 'Need help?',
      description: 'Can’t find what you’re looking for?',
      href: 'about/contact-us/',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="prerequisites">
        <ContentPrimary
          id="prerequisites"
          toc="Prerequisites"
          headline="Prerequisites"
          description="To start using NewsKit components in your projects you will need the following:"
        >
          <UnorderedList
            markerAlign="center"
            listItemMarker={IconFilledCircle}
            overrides={{
              marker: {
                spaceInline: 'space020',
              },
            }}
          >
            <P overrides={{typographyPreset: 'editorialParagraph030'}}>
              <Link href="https://nodejs.org/en/download/" target="_blank">
                Node.js
              </Link>{' '}
              with a minimum of node v14 installed.
            </P>
            <P overrides={{typographyPreset: 'editorialParagraph030'}}>
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
            </P>
          </UnorderedList>
        </ContentPrimary>

        <ContentSecondary showSeparator>
          <InlineMessage>
            It’s recommended to use{' '}
            <Link href="https://www.typescriptlang.org/" target="_blank">
              typescript
            </Link>
            , but NewsKit will work with vanilla javascript too.
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
              You can install NewsKit package using a package manager like{' '}
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
          <Code>npm install newskit</Code>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>or</P>
          <br />
          <Code>yarn add newskit</Code>
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="setting up an app">
        <ContentPrimary
          id="settingupanapp"
          toc="Setting up an app"
          headline="Setting up an app"
          description={
            <>
              NewsKit components can be used like any typical{' '}
              <Link
                href="https://reactjs.org/docs/components-and-props.html"
                target="_blank"
              >
                react components
              </Link>
              . One thing to bear in mind is that they will need to be
              descendants of a <InlineCode>ThemeProvider</InlineCode>, this can
              be thought of as the theme context, this theme will be applied to
              all of its descendants. The following example shows the
              &quot;Hello World!&quot; example of using a NewsKit{' '}
              <Link href="/components/tag/">Tag component</Link> with the{' '}
              <Link href="/theme/theming/using-a-theme/">Theme Provider</Link>.
            </>
          }
          showSeparator
        >
          <Code>
            {`import {ThemeProvider, Tag, TagSize, newskitLightTheme} from 'newskit';
import React from 'react';
export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={newskitLightTheme}>
        <Tag
          href="http://example.com"
          size={TagSize.Medium}>
            Tag Content
        </Tag>
      </ThemeProvider>
    )
  }
}`}
          </Code>
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="what’s next?">
        <ContentPrimary
          id="whatsnext"
          toc="what’s next?"
          headline="What’s next?"
          description="Want to use NewsKit for your next product? Follow the next steps belows to learn more:"
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

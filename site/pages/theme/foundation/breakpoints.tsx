import React from 'react';
import {newskitLightTheme, compileTheme} from 'newskit';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';
import {LayoutProps} from '../../../components/layout';
import {
  Illustration,
  getIllustrationComponent,
} from '../../../components/illustrations/illustration-loader';
import {Table} from '../../../components/table';
import {Code} from '../../../components/code';
import {Link} from '../../../components/link';
import {MediaList} from '../../../components/media-list';
import {InlineCode} from '../../../components/markdown-elements';

const compiledNewskitLightTheme = compileTheme(newskitLightTheme);

const RANGE_DESCRIPTION: {[key: string]: string} = {
  xs: '0-479',
  sm: '480-767',
  md: '768-1023',
  lg: '1024-1439',
  xl: '1440>',
};

const USAGE_DESCRIPTION: {[key: string]: string | JSX.Element} = {
  xs: 'Portrait - small handset >  large handset',
  sm: (
    <>
      Portrait - large handset &gt; small tablet
      <br />
      Landscape - small handset
    </>
  ),
  md: (
    <>
      Portrait - large tablet
      <br />
      Landscape - large handset &gt; small tablet
    </>
  ),
  lg: 'Landscape - large tablet > desktop',
  xl: 'Landscape - large tablet > desktop',
};

const bps = compiledNewskitLightTheme.breakpoints;

const breakpointsRows = Object.entries(bps).map(([tokenName, tokenValue]) => ({
  token: tokenName,
  breakpoint: tokenValue,
  range: RANGE_DESCRIPTION[tokenName] || '',
  usage: USAGE_DESCRIPTION[tokenName] || '',
}));

const Breakpoints = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Breakpoints',
      description:
        'Breakpoints set a visual point on a screen to adapt the design of content (responsive design), ensuring a consistent, optimised experience across different screen widths.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Breakpoints',
      hero: {
        illustration: 'theme/breakpoints/hero',
      },
      introduction: `Breakpoints set a visual point on a screen to adapt the design of content (responsive design), ensuring a consistent, optimised experience across different screen widths.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description="Choose from five different breakpoints. You can customise the breakpoint range, margins and gutters. The default values are:"
        >
          <Illustration
            viewBox="0 0 1490 600"
            path="theme/breakpoints/overview"
          />
        </ContentPrimary>

        <ContentSecondary>
          <Table
            columns={['Token', 'Breakpoint', 'Range', 'Usage']}
            rows={breakpointsRows}
          />
        </ContentSecondary>

        <ContentSecondary description="You can override default breakpoints in the theme:">
          <Code>
            {`import {createTheme} from 'newskit';

const theme = createTheme({
  name: 'theme-with-custom-breakpoints',
  overrides: {
      breakpoints: {
          xs: 0, // 0-359
          sm: 360,
          md: 540,
          lg: 720,
          xl: 1080,
      }
  },
});`}
          </Code>
        </ContentSecondary>

        <ContentSecondary description="All breakpoints are fluid until the maximum grid width of 1920px (default). At this point, the grid becomes fixed.">
          <MediaList
            cardsLayout={{
              xs: 'vertical',
              sm: 'vertical',
              md: 'horizontal',
              lg: 'horizontal',
              xl: 'horizontal',
            }}
            layout="1-span"
            cards={[
              {
                title: 'Fluid',
                description: `
                Fluid layouts are calculated to their relative size, and stretch as the screen (viewport) is resized. For example, if you set layout width to 100%, each column will only be calculated to its relative size, and will stretch as the browser is resized.
                  `,
                media: getIllustrationComponent('theme/breakpoints/fluid'),
              },
              {
                title: 'Fixed',
                description: `
                Fixed layouts don’t respond to the size of the viewport but remain at a fixed width at a specific numerical value (e.g. 1920px).
                `,
                media: getIllustrationComponent('theme/breakpoints/fixed'),
              },
            ]}
          />
        </ContentSecondary>

        <ContentSecondary
          description={
            <>
              You can override max-width defaults in the{' '}
              <Link
                href="/components/grid/"
                overrides={{typographyPreset: 'editorialParagraph030'}}
              >
                Grid & Cell component.
              </Link>
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="usage">
        <ContentPrimary
          id="usage"
          toc="Using breakpoints"
          headline="How to use breakpoints"
          description="You can change the appearance and behaviour of UI elements at different breakpoints."
        >
          <Illustration path="theme/breakpoints/usage" />
        </ContentPrimary>

        <ContentSecondary
          description={
            <>
              In the codebase, use the{' '}
              <Link href="/theme/theming/component-defaults/">
                component overrides and defaults system
              </Link>{' '}
              to override design tokens at specific breakpoints. For example,
              set different typography presets at different breakpoints to make
              text bigger on larger devices than on smaller devices.
              <br />
              <br />
              Properties that support this are specified in the Props sections
              of the component documentation as using the generic{' '}
              <InlineCode>MQ</InlineCode> type, i.e.{' '}
              <InlineCode>{`MQ<string>`}</InlineCode>.
              <br />
              <br />
              This works by passing either a single string token to be used
              across all breakpoints, or an object for a combination of multiple
              breakpoints - consisting of breakpoint keys and token values.
            </>
          }
        />

        <ContentSecondary
          showSeparator
          headline="Code example"
          description="Here’s an example of different typography presets at different breakpoints:"
        >
          <Code>{`
  typographyPreset: {
      xs: 'editorialHeadline010',
      md: 'editorialHeadline020',
      lg: 'editorialHeadline030',
    }
  `}</Code>
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Breakpoints;

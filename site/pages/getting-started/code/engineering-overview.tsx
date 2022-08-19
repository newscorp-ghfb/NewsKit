import React from 'react';
import {Button, Block} from 'newskit';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {
  Illustration,
  getIllustrationComponent,
} from '../../../components/illustrations/illustration-loader';
import {Link} from '../../../components/link';
import {MediaItem, MediaList} from '../../../components/media-list';
import {
  IconFilledNpm,
  IconFilledChrome,
  IconFilledFirefox,
  IconFilledSafari,
  IconFilledEdge,
} from '../../../components/icons';
import {Table} from '../../../components/table';
import {
  ContentSection,
  ContentPrimary,
} from '../../../components/content-structure';
import {IconFilledGitHub} from '../../../components/icons/icon-filled-github';

const featureCardoverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};
const {title, description} = featureCardoverrides;

const PRINCIPLE_CARDS = [
  {
    media: () => <Illustration path="guides/engineering-overview/accessible" />,
    title: 'Accessible',
    description: (
      <>
        NewsKit components folllow{' '}
        <Link
          overrides={{stylePreset: 'inkWhiteContrast'}}
          href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          target="_blank"
        >
          WCAG guidelines
        </Link>
        ,{' '}
        <Link
          overrides={{stylePreset: 'inkWhiteContrast'}}
          href="https://www.w3.org/WAI/standards-guidelines/aria/"
          target="_blank"
        >
          WAI Aria
        </Link>{' '}
        and
        <Link
          overrides={{stylePreset: 'inkWhiteContrast'}}
          href="https://www.w3.org/TR/wai-aria-practices/"
          target="_blank"
        >
          Aria-practices
        </Link>
        . Components are AA compliant with A11Y features built-in including
        props to extend their flexibility if required.
      </>
    ),
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: () => <Illustration path="guides/engineering-overview/adaptive" />,
    title: 'Adaptive',
    description: (
      <>
        NewsKit has an extensive
        <Link
          overrides={{stylePreset: 'inkWhiteContrast'}}
          href="/theme/overview/"
        >
          theming system
        </Link>{' '}
        that enables customization of style and layout. Additionally components
        support a range of properties to customise behaviour.
      </>
    ),
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: () => <Illustration path="guides/engineering-overview/productive" />,
    title: 'Productive',
    description:
      'Carefully crafted components ensure that teams using NewsKit can rapidly iterate on product requirements through re-use of common functionality. This promotes both consistency and common language across product development teams.',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
] as MediaItem[];

const COLUMNS_ICON = {
  chrome: <IconFilledChrome overrides={{size: 'iconSize040'}} />,
  firefox: <IconFilledFirefox overrides={{size: 'iconSize040'}} />,
  safari: <IconFilledSafari overrides={{size: 'iconSize040'}} />,
  edge: <IconFilledEdge overrides={{size: 'iconSize040'}} />,
};

const whatNextCards = [
  {
    media: getIllustrationComponent('guides/engineering-quickstart/hero'),
    title: 'Engineering Quickstart Guide',
    description:
      'To start engineering with NewsKit, follow the steps in the quickstart guide.',
    href: '/getting-started/code/engineering-quickstart/',
  },
  {
    media: getIllustrationComponent('guides/overview/instrumentation-setup'),
    title: 'Instrumentation Setup',
    description:
      'NewsKit components are built to emit events "out of the box".',
    href: '/getting-started/code/instrumentation/',
  },
];

const EngineeringOverview = (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Engineering overview',
      description:
        'The NewsKit design system provides an npm package that exports a library of reusable React components and utilities that can be used as building blocks to compose web applications.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Guides',
      name: 'Engineering overview',
      hero: {
        illustration: 'guides/engineering-overview/hero',
      },
      introduction: `The NewsKit design system provides an npm package that exports a library of reusable React components and utilities that can be used as building blocks to compose web applications.`,
    }}
    featureCard={{
      title: 'Need help?',
      description: 'Can’t find what you’re looking for?',
      href: 'about/contact-us/',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="why?">
        <ContentPrimary
          id="why"
          toc="Why?"
          headline="Why build products with NewsKit?"
          description="Systems thinking is at the core of digital product design. NewsKit improves design consistency and developer efficiency across teams with considered, reusable solutions, and shared best practices. The result is more robust products and more time for innovation."
          showSeparator
        >
          <MediaList
            layout="3-span"
            cardType="feature"
            cards={PRINCIPLE_CARDS}
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="What’s included?">
        <ContentPrimary
          id="whats-included"
          toc="What’s included?"
          headline="What’s included?"
          showSeparator
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'React web components',
                description: (
                  <>
                    A collection high quality React{' '}
                    <Link href="/components/overview/">web components</Link>{' '}
                    built using{' '}
                    <Link
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                    >
                      TypeScript
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="https://emotion.sh/docs/introduction"
                      target="_blank"
                    >
                      Emotion
                    </Link>
                    .
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/engineering-overview/react-web-components',
                ),
              },
              {
                title: 'Advanced theming system',
                description: (
                  <>
                    An advanced full-featured{' '}
                    <Link href="/theme/overview/">theming system</Link> with the
                    flexibility to meet the requirement of a single or
                    multi-brand requirement, including both business and
                    consumer products.
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/engineering-overview/advanced-theming-system',
                ),
              },
              {
                title: 'Utility functions',
                description: (
                  <>
                    A host of{' '}
                    <Link href="/getting-started/code/engineering-quickstart/">
                      utility functions
                    </Link>{' '}
                    for use in third-party or custom components.
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/engineering-overview/utility-functions',
                ),
              },
              {
                title: 'NewsKit Handoff guidance',
                description: (
                  <>
                    Guidance on how to find the information needed in designs
                    for engineers to build.
                    <Block spaceStack="space050" />
                    <Link
                      href="https://www.figma.com/proto/kXCrh9MHKAJ878KE2dQOz8/Handoff-Guides---for-engineers-%26-designers?page-id=74%3A13186&node-id=92%3A1434&viewport=332%2C48%2C0.11&scaling=min-zoom&starting-point-node-id=92%3A1434&hide-ui=1"
                      target="_blank"
                    >
                      View NewsKit Handoff guidance
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/handoff-guidance',
                ),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="source code">
        <ContentPrimary
          id="browsersupport"
          toc="Browser support"
          headline="Browser support"
          description="NewsKit supports the following modern browsers:"
          showSeparator
        >
          <Table
            columnsIcon={COLUMNS_ICON}
            columns={['Chrome', 'Safari', 'Firefox', 'Edge']}
            rows={[
              {
                chrome: 'last 2 versions',
                safari: 'last 2 versions',
                firefox: 'last 2 versions',
                edge: 'last 2 versions',
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="architecture">
        <ContentPrimary
          id="architecture"
          toc="Architecture"
          headline="Example architecture"
          description="Below is an example of a recommended architecture when using the NewsKit design system:"
          showSeparator
        >
          <Illustration path="guides/engineering-overview/example-architecture-engineering" />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="source code">
        <ContentPrimary
          id="sourcecode"
          toc="Source Code"
          headline="Source Code"
          description="Below are the links to the NewsKit source code:"
          showSeparator
        >
          <Button
            size="small"
            overrides={{
              typographyPreset: 'utilityButton010',
              stylePreset: 'buttonOutlinedSecondary',
            }}
            href="https://github.com/newscorp-ghfb/newskit"
            target="_blank"
          >
            <IconFilledGitHub /> View Github repo
          </Button>
          <Block as="span" spaceInline="space030" />
          <Button
            size="small"
            overrides={{
              typographyPreset: 'utilityButton010',
              stylePreset: 'buttonOutlinedSecondary',
            }}
            href="https://www.npmjs.com/package/newskit"
            target="_blank"
          >
            <IconFilledNpm /> View npm package
          </Button>
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="what’s next?">
        <ContentPrimary
          id="whatsnext"
          toc="What’s next?"
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

export default EngineeringOverview;

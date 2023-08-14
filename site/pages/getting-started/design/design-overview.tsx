import React from 'react';
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
  ContentSection,
  ContentPrimary,
} from '../../../components/content-structure';

const featureCardOverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};

const PRINCIPLE_CARDS = [
  {
    media: () => (
      <Illustration
        viewBox="0 0 1345 759"
        path="guides/design-overview/design-made-easy"
      />
    ),
    title: 'Simple',
    description:
      'NewsKit makes it simple to design responsive, accessible experiences that align to the components in code. You can concentrate on solving problems for your users.',
    stylePrefix: 'featureCard',
    overrides: featureCardOverrides,
  },
  {
    media: () => (
      <Illustration
        viewBox="0 0 1345 759"
        path="guides/design-overview/complete-flexibility"
      />
    ),
    title: 'Flexible',
    description: (
      <>
        NewsKit is fully customisable. Our powerful{' '}
        <Link
          overrides={{stylePreset: 'inkWhiteContrast'}}
          href="https://www.figma.com/file/oSjjLxC27fa6Jh6AHM7ja9/NK-NewsKit-Theme?node-id=1%3A393"
          target="_blank"
        >
          theming system
        </Link>
        that gives you the flexibility to apply a single brand or sub-brand and
        our Figma components are highly configurable.
      </>
    ),
    stylePrefix: 'featureCard',
    overrides: featureCardOverrides,
  },
] as MediaItem[];

const DesignOverview = (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Design overview | Newskit design system',
      description:
        'NewsKit has everything you need to build scalable digital products, including Figma component libraries, theme libraries, plugins and guidance.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Guides',
      name: 'Design overview',
      hero: {
        illustration: 'guides/design-overview/hero',
      },
      introduction: `NewsKit has everything you need to build scalable digital products.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="why?">
        <ContentPrimary
          id="why"
          toc="Why?"
          headline="Why design products with NewsKit?"
          description="NewsKit improves consistency and efficiency across teams with considered, reusable solutions and shared best practices - creating more robust and innovative products."
          showSeparator
        >
          <MediaList
            layout="2-span"
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
          description="NewsKit provides Figma libraries to speed up your product design process. Our component library and theme is open-sourced on the Figma community."
          showSeparator
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Theme library',
                description: (
                  <>
                    A powerful theming system containing brand styles that sync
                    across files, including palettes and colours, typography,
                    shadows and grids.
                    <br />
                    <Link
                      href="https://www.figma.com/file/3l0UDvk1l2vsXpbtWlYWoP/%F0%9F%9F%A2-NK-NewsKit-Theme"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      Theme library (internal)
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/theme-library',
                  {viewBox: '0 0 1344 759'},
                ),
              },
              {
                title: 'Web components library',
                description: (
                  <>
                    A collection of responsive components that you can theme to
                    your brand.
                    <Link
                      href="https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/NK-Web-Components?node-id=1%3A393"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      Web components library (internal)
                    </Link>
                    <Link
                      href="https://www.figma.com/community/file/1225806088244139801"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      Web components library and theme (Figma community)
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/web-components-library',
                  {viewBox: '0 0 1344 759'},
                ),
              },
              {
                title: 'Icon library',
                description: (
                  <>
                    A set of{' '}
                    <Link href="https://fonts.google.com/icons" target="_blank">
                      Material icons
                    </Link>
                    containing filled and outlined styles. You can customise or
                    add icons as required.
                    <br />
                    <Link
                      href="https://www.figma.com/file/jHs7EB68a57xVA3NKmMbgy/NK-Icons?node-id=1%3A12626"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      Icon library (internal)
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/icon-library',
                  {viewBox: '0 0 1344 759'},
                ),
              },
              {
                title: 'Utilities library',
                description: (
                  <>
                    Includes annotations, cursors, device mockups and
                    accessibility labels.
                    <br />
                    <Link
                      href="https://www.figma.com/file/Q3OTJ4RZWJGTCaWuS8sWsL/NK-Utilities?node-id=0%3A1"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      Utilities library (internal)
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/utilities-library',
                  {viewBox: '0 0 1344 759'},
                ),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>
      <ContentSection sectionName="architecture">
        <ContentPrimary
          id="architecture"
          toc="Architecture"
          headline="NewsKit Figma library architecture"
          description="Get the best out of NewsKit by theming your Figma libraries with Tokens Studio plugin:"
          showSeparator
        >
          <Illustration
            viewBox="0 0 5692 3674"
            path="guides/design-overview/example-architecture"
          />
        </ContentPrimary>
      </ContentSection>
      <ContentSection sectionName="plugins">
        <ContentPrimary
          id="plugins"
          toc="Plugins"
          headline="Figma plugin"
          description=""
          showSeparator
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Tokens Studio plugin',
                description: (
                  <>
                    NewsKit uses Tokens Studio plugin to create, manage and
                    theme components. Tokens Studio connects to GitHub to sync
                    to a repository within our publisher tool. This allows
                    GitHub to be in sync with the theme in Figma and allows
                    designers to have access to the latest theme from within the
                    plugin.
                    <Link
                      href="https://tokens.studio/"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      Tokens Studio plugin
                    </Link>
                    <Link
                      href="https://docs.tokens.studio/"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      Tokens Studio documentation
                    </Link>
                    <Link
                      href="https://www.figma.com/file/A8kKCGhZ5wFi78l3DOlPUQ/v5.0-%F0%9F%9F%A2-NewsKit-theme?node-id=574%3A7406&t=fMjmVd7ulhTXIsYO-1"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      Editing Newskit styles in Tokens Studio (internal)
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/tokens-studio-plugin',
                  {viewBox: '0 0 1344 759'},
                ),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>
      <ContentSection sectionName="guidance">
        <ContentPrimary
          id="guidance"
          toc="Guidance"
          headline="Guidance"
          description="Get the best out of NewsKit with comprehensive, easy-to-follow documentation
          and guidelines, including:"
          showSeparator
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Components guidance',
                description: (
                  <>
                    Guidance for all web components. Includes details on
                    anatomy, variants and usage.
                    <br />
                    <Link
                      href="https://www.newskit.co.uk/components/overview/"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      Components guidance{' '}
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/components-guidance',
                  {viewBox: '0 0 1344 759'},
                ),
              },
              {
                title: 'Patterns guidance',
                description: (
                  <>
                    Guidance for solving common problems, like onboarding users
                    to a product or feature.
                    <br />
                    <Link
                      href="https://www.newskit.co.uk/patterns/overview/"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      Patterns guidance
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/patterns',
                  {viewBox: '0 0 1344 759'},
                ),
              },
              {
                title: 'Accessibility guidance',
                description: 'Guidance for designing inclusive experiences.',
                media: getIllustrationComponent(
                  'guides/design-overview/accessibility-guidance',
                  {viewBox: '0 0 1344 759'},
                ),
              },
              {
                title: 'Handoff guidance',
                description: (
                  <>
                    Guidance on how to communicate a design to the product team
                    for engineers to build.
                    <br />
                    <Link
                      href="https://www.figma.com/proto/kXCrh9MHKAJ878KE2dQOz8/Handoff-Guides---for-engineers-%26-designers?page-id=1%3A544&node-id=275%3A21221&viewport=350%2C48%2C0.13&scaling=min-zoom&starting-point-node-id=275%3A21221&show-proto-sidebar=1&hide-ui=1"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      Handoff guidance (internal)
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/handoff-guidance',
                  {viewBox: '0 0 1344 759'},
                ),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </GuidePageTemplate>
);

export default DesignOverview;

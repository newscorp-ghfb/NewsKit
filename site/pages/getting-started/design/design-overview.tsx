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
    title: 'Easy',
    description:
      'NewsKit makes it simple to design beautiful, responsive, accessible experiences that align to the components in code - so you can concentrate on your users.',
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
        NewsKit is fully customisable, with a powerful{' '}
        <Link
          overrides={{stylePreset: 'inkWhiteContrast'}}
          href="https://www.figma.com/file/oSjjLxC27fa6Jh6AHM7ja9/NK-NewsKit-Theme?node-id=1%3A393"
          target="_blank"
        >
          theming system
        </Link>
        that gives you the flexibility to apply a single brand or sub-brand, and
        Figma components that have variants and layer options.
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
      introduction: `NewsKit has everything you need to build scalable digital products, including Figma component libraries, theme libraries, plugins and guidance.`,
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
          description="NewsKit provides shared Figma libraries to help your product design process, including:"
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
                    A powerful theming system containing brand styles that you
                    can use and sync across files, including palettes and
                    colours, typography, shadows and grids.
                    <br />
                    <Link
                      href="https://www.figma.com/file/3l0UDvk1l2vsXpbtWlYWoP/%F0%9F%9F%A2-NK-NewsKit-Theme"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      View theme library (internal only)
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
                      View web components library (internal only)
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
                    containing both filled and outlined styles, that you can
                    customise or add to as required.
                    <br />
                    <Link
                      href="https://www.figma.com/file/jHs7EB68a57xVA3NKmMbgy/NK-Icons?node-id=1%3A12626"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      View icon library (internal only)
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
                    A host of utility components to improve your workflow and
                    make delivery fast and consistent. Includes annotations,
                    cursors, device mockups and accessibility labels.
                    <br />
                    <Link
                      href="https://www.figma.com/file/Q3OTJ4RZWJGTCaWuS8sWsL/NK-Utilities?node-id=0%3A1"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      View utilities library (internal only)
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
          description="Receive updates, contribute to the community and get the best out of NewsKit
          by linking your Figma libraries like this:"
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
          headline="Custom Figma plugins"
          description="We've developed a range of custom Figma plugins to help improve your workflow, including:"
          showSeparator
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Theme swapper plugin',
                description: (
                  <>
                    Change themes across UI components and elements (e.g.
                    switching between light and dark themes, sub-themes or
                    different visual fidelities).
                    <Link
                      href="https://www.figma.com/community/plugin/968555028114672265/NK---Theme-Swapper"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      View theme swapper plugin (internal only)
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/theme-swapper-plugin',
                  {viewBox: '0 0 1344 759'},
                ),
              },
              {
                title: 'Text crop plugin',
                description: (
                  <>
                    Remove unwanted whitespace around text boxes.
                    <br />
                    <Link
                      href="https://www.figma.com/community/plugin/951930713294228024/Text-Crop"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      View text crop plugin
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/text-crop-plugin',
                  {viewBox: '0 0 1344 759'},
                ),
              },
              {
                title: 'Theme exporter plugin',
                description: (
                  <>
                    Export NewsKit design tokens in JSON format from Figma
                    styles to use with the NewsKit codebase.
                    <br />
                    <Link
                      href="https://www.figma.com/community/plugin/934126878505200119/NK---Theme-Exporter"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      View theme exporter plugin (internal only)
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/theme-exporter-plugin',
                  {viewBox: '0 0 1344 759'},
                ),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>
      <ContentSection sectionName="templates">
        <ContentPrimary
          id="templates"
          toc="Templates"
          headline="Project template files"
          description="Kickstart your design process, and develop a consistent workflow, with NewsKit's
          template Figma files:"
          showSeparator
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'UX project template file',
                description: (
                  <>
                    A template structure for UX-focussed projects. Includes
                    personas, user journeys and competitor analysis.
                    <br />
                    <Link
                      href="https://www.figma.com/file/uMSITiPijbFBVQl09zzVHm/%5BProduct%2FBrand-Name%5D-UX-project-template?node-id=0%3A1"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      View UX project template file (internal only)
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/ux-template',
                  {viewBox: '0 0 1344 759'},
                ),
              },
              {
                title: 'UI project template file',
                description: (
                  <>
                    A template structure for UI-focussed projects. Includes a
                    playground, prototype and handoff.
                    <br />
                    <Link
                      href="https://www.figma.com/file/BcPZjnYcouOOAdDVrt6H95/%5BProduct%2FBrand-Name%5D-UI-project-template?node-id=0%3A1"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      View UI project template file (internal only)
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/ui-template',
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
                      View components guidance{' '}
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
                    Guidance for solving common problems (e.g. onboarding users
                    to a product or feature).
                    <br />
                    <Link
                      href="https://www.newskit.co.uk/patterns/overview/"
                      target="_blank"
                      overrides={{marginBlockStart: 'space050'}}
                    >
                      View patterns guidance
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
                      View handoff guidance (internal only)
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

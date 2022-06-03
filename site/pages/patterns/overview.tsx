import React from 'react';
import {styled, getColorFromTheme} from 'newskit';
import {Link} from '../../components/link';
import {MediaItem, MediaList} from '../../components/media-list';
import {LayoutProps} from '../../components/layout';
import {PatternPageTemplate} from '../../templates/pattern-page-template/pattern-page-template';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';
import {Illustration} from '../../components/illustrations/illustration-loader';

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
      <Illustration path="guides/design-overview/design-made-easy" />
    ),
    title: 'Design made easy',
    description:
      'NewsKit makes it simple to design experiences that are not only aesthetically pleasing, but that are fully responsive, promote accessibility and align to the components in code. NewsKit allows designers to free up time to concentrate on the important stuff - like the end user experience!',
    stylePrefix: 'featureCard',
    overrides: featureCardOverrides,
  },
  {
    media: () => (
      <Illustration path="guides/design-overview/complete-flexibility" />
    ),
    title: 'Complete flexibility',
    description: (
      <>
        NewsKit is fully customisable, with the flexibility to apply a single
        brand, or sub-brands style, with an extensive{' '}
        <Link
          overrides={{stylePreset: 'inkInverse'}}
          href="https://www.figma.com/file/oSjjLxC27fa6Jh6AHM7ja9/NK-NewsKit-Theme?node-id=1%3A393"
          target="_blank"
        >
          theming system
        </Link>
        . Additionally the Figma components have a range of variants and layer
        options to allow for further cutomisation.
      </>
    ),
    stylePrefix: 'featureCard',
    overrides: featureCardOverrides,
  },
] as MediaItem[];

const StyledHeading = styled.span`
  color: ${getColorFromTheme('inkBrand010')};
`;

const Overview = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Forms overview',
      description: 'Forms are used to collect customer’s data.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Patterns',
      name: 'Forms overview',
      hero: {
        illustration: 'patterns/overview/hero',
      },
      introduction: `Forms are used to collect customer’s data.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="capture the moment">
        <ContentPrimary
          headline={
            <>
              Capture the moment <StyledHeading>(with data)</StyledHeading>
            </>
          }
          description={
            <>
              Using <Link href="/components/form/">Form</Link> components
              increases cohesion and avoids duplication of effort. Everyone
              benefits from shared best practice, research, and development.
              <br />
              <br />
              This guide outlines best practices to follow when creating a Form
              and highlights the relevant NewsKit components. Following shared
              best practices ensures the best possible experience for our
              customers.
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="why use the Forms pattern">
        <ContentPrimary
          id="why-use-forms-pattern"
          toc="Why use the Forms pattern"
          headline="Why use the Forms pattern?"
        >
          <MediaList
            layout="3-span"
            cardType="feature"
            cards={PRINCIPLE_CARDS}
          />
        </ContentPrimary>

        <ContentSecondary
          headline="When should forms be used?"
          description="Forms should be used to capture information from customers based on clear business requirements/benefits. The data captured in Forms allows us to serve the customer or user."
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="help improve this page">
        <ContentPrimary
          id="help-improve-this-page"
          toc="Help improve this page"
          headline={<StyledHeading>Help improve this page</StyledHeading>}
          description={
            <>
              To help make sure this page is as useful as it can be, relevant
              and kept up to date with industry best practices, please get in
              touch to share your research findings, and contribute to this
              page.
              <br />
              <br />
              <Link
                href="https://github.com/newscorp-ghfb/newskit/issues/new/choose"
                target="_blank"
              >
                Propose a change or contribution by suggesting a feature
                request.
              </Link>
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </PatternPageTemplate>
);

export default Overview;

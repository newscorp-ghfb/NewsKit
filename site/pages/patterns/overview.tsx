import React from 'react';
import {styled, getColorFromTheme} from 'newskit';
import {Link} from '../../components/link';
import {MediaList} from '../../components/media-list';
import {LayoutProps} from '../../components/layout';
import {PatternPageTemplate} from '../../templates/pattern-page-template/pattern-page-template';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';

const featureCardOverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};
const {title, description} = featureCardOverrides;

const PRINCIPLE_CARDS = [
  {
    media: {
      src: 'static/theming/foundations/purposeful-fonts.svg',
      alt: '',
    },
    title: 'Purposeful',
    description:
      'The choice of font families are appropriate for their use e.g. decorative or functional, bold or subtle.',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/legible.svg',
      alt: '',
    },
    title: 'Legible',
    description: `Font families are legible for screen use across multiple sizes.`,
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/balanced.svg',
      alt: '',
    },
    title: 'Balanced',
    description: `When using multiple font families, ensure they complement each other.`,
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
];

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

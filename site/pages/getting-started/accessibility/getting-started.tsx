import React from 'react';
import {LayoutProps} from '../../../components/layout';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';
import {Link} from '../../../components/link';
import {ComponentPageCell} from '../../../components/layout-cells';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {UnorderedList} from '../../../../src/unordered-list';
import {P} from '../../../../src/typography';
import {MediaList} from '../../../components/media-list';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';

const linkOverrides = {
  typographyPreset: 'editorialParagraph030',
};

const paragraphHeadlineOverrides = {
  typographyPreset: 'editorialHeadline020',
  stylePreset: 'inkContrast',
};

const whatNextCards = [
  {
    media: getIllustrationComponent('guides/accessibility-design/hero'),
    title: 'Design for accessibility',
    description: 'Design provides the foundations for accessibility.',
    href: '/getting-started/accessibility/design',
  },
  {
    media: getIllustrationComponent('guides/accessibility-code/hero'),
    title: 'Code for accessibility',
    description:
      'Building to WCAG standards maintains quality and supports assistive technologies.',
    href: '/getting-started/accessibility/code',
  },
];

const AccessibilityGettingStarted = (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Getting started with accessibility',
      description: 'Equal access for everyone.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Accessibility',
      name: 'Getting started with accessibility',
      hero: {
        illustration: 'guides/accessibility-getting-started/hero',
      },
      introduction: `Equal access for everyone.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="why?">
        <ContentPrimary
          id="why"
          toc=" What is accessibility?"
          headline="What is accessibility?"
          description={
            <>
              Accessibility is making sure that all our colleagues and customers
              have equal access to our digital products and services. This is
              achieved by designing and building to industry standards which
              maintains quality and supports assistive technologies. <br />{' '}
              <br /> This guide links out to resources to help you design,
              build, write and test for accessibility.
            </>
          }
        />
        <ContentSecondary
          headline="An introduction"
          description="If you're new to accessibility, check out these guides from W3C:"
          showSeparator
        >
          <UnorderedList
            markerAlign="center"
            overrides={{
              spaceStack: 'space040',
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marker: {
                spaceInline: 'space020',
              },
            }}
          >
            <Link href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">
              Introduction to web accessibility
            </Link>
            <Link href="https://www.w3.org/WAI/people-use-web/">
              How people with disabilities use the web
            </Link>
          </UnorderedList>
        </ContentSecondary>
        <ContentSecondary
          headline="Which standards do we follow?"
          showSeparator
        >
          <br />
          <P overrides={paragraphHeadlineOverrides}>
            Web Content Accessibility Guidelines (WCAG)
          </P>
          <br />

          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            WCAG is the international shared standard for web accessibility.
            Newskit core components are tested to a WCAG 2.1 Level AA standard.
          </P>
          <Link overrides={linkOverrides} href="https://www.w3.org/TR/WCAG21/">
            WCAG 2.1
          </Link>
          <br />
          <br />
          <br />
          <P overrides={paragraphHeadlineOverrides}>WAI ARIA</P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            ARIA is a set of attributes you can add to HTML elements to make web
            content accessible to users with disabilities who use assistive
            technologies.
          </P>
          <Link
            overrides={linkOverrides}
            href="https://www.w3.org/TR/wai-aria/"
          >
            WAI ARIA
          </Link>
          <br />
          <br />
          <br />
          <P overrides={paragraphHeadlineOverrides}>News UK Polices</P>
          <br />
          <Link
            overrides={linkOverrides}
            href="https://sites.google.com/news.co.uk/wearenewspoliciesandprocedures/home-page?authuser=0&pli=1"
            external={false}
          >
            Policies and guidelines (internal link)
          </Link>
        </ContentSecondary>
        <ContentSecondary
          headline="Which laws must we comply with?"
          showSeparator
        >
          <P overrides={paragraphHeadlineOverrides}>In the UK</P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            UK Equality Act protects people from discrimination in the workplace
            and in wider society. It covers the provision of digital services
            and therefore accessibility.
          </P>
          <br />
          <Link
            overrides={linkOverrides}
            href="https://www.legislation.gov.uk/ukpga/2010/15/section/29"
          >
            UK Equality Act on provision of services
          </Link>
          <br />
          <br />
          <br />
          <P overrides={paragraphHeadlineOverrides}>In the US</P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            The Americans with Disabilities Act (ADA) is a federal civil rights
            law that prohibits discrimination against people with disabilities
            in everyday activities.
          </P>
          <br />
          <Link
            overrides={linkOverrides}
            href="https://www.ada.gov/topics/intro-to-ada/"
          >
            The Americans with Disabilities Act
          </Link>
        </ContentSecondary>
      </ContentSection>
      <ContentSection sectionName="what’s next?">
        <ContentPrimary
          id="whatsnext"
          toc="What’s next?"
          headline="What’s next?"
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

export default AccessibilityGettingStarted;

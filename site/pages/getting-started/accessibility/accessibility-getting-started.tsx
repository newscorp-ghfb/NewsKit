import React from 'react';
import {LayoutProps} from '../../../components/layout';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';
import {ComponentPageCell} from '../../../components/layout-cells';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {UnorderedList} from '../../../../src/unordered-list';
import {LinkStandalone} from '../../../../src/link';
import {P} from '../../../../src/typography';
import {MediaList} from '../../../components/media-list';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';

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
      type: 'Guides',
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
          toc="Why?"
          headline="Why build products with NewsKit?"
          description="Systems thinking is at the core of digital product design. NewsKit improves design consistency and developer efficiency across teams with considered, reusable solutions, and shared best practices. The result is more robust products and more time for innovation."
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
            <LinkStandalone href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">
              Introduction to web accessibility
            </LinkStandalone>
            <LinkStandalone href="https://www.w3.org/WAI/people-use-web/">
              How people with disabilities use the web
            </LinkStandalone>
          </UnorderedList>
        </ContentSecondary>
        <ContentSecondary
          headline="Which standards do we follow?"
          showSeparator
        >
          <P
            overrides={{
              typographyPreset: 'editorialHeadline020',
              stylePreset: 'inkContrast',
            }}
          >
            Web Content Accessibility Guidelines (WCAG)
          </P>
          <br />

          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            WCAG is the international shared standard for web accessibility.
            Newskit core components are tested to a WCAG 2.1 Level AA standard.
          </P>
          <LinkStandalone
            overrides={{typographyPreset: 'editorialParagraph030'}}
            href="https://www.w3.org/TR/WCAG21/"
            external={false}
          >
            WCAG 2.1
          </LinkStandalone>
          <br />
          <br />
          <br />
          <P
            overrides={{
              typographyPreset: 'editorialHeadline020',
              stylePreset: 'inkContrast',
            }}
          >
            WAI ARIA
          </P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            ARIA is a set of attributes you can add to HTML elements to make web
            content accessible to users with disabilities who use assistive
            technologies. WAI ARIA.
          </P>
          <LinkStandalone
            overrides={{typographyPreset: 'editorialParagraph030'}}
            href="https://www.w3.org/TR/wai-aria/"
            external={false}
          >
            WAI ARIA
          </LinkStandalone>
          <br />
          <br />
          <br />
          <P
            overrides={{
              typographyPreset: 'editorialHeadline020',
              stylePreset: 'inkContrast',
            }}
          >
            News UK Polices
          </P>
          <br />
          <LinkStandalone
            overrides={{typographyPreset: 'editorialParagraph030'}}
            href="https://sites.google.com/news.co.uk/wearenewspoliciesandprocedures/home-page?authuser=0&pli=1"
            external={false}
          >
            Policies and guidelines (internal link)
          </LinkStandalone>
        </ContentSecondary>
        <ContentSecondary
          headline="Which laws must we comply with?"
          showSeparator
        >
          <P
            overrides={{
              typographyPreset: 'editorialHeadline020',
              stylePreset: 'inkContrast',
            }}
          >
            In the UK
          </P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            UK Equality Act protects people from discrimination in the workplace
            and in wider society. It covers the provision of digital services
            and therefore accessibility.
          </P>
          <br />
          <LinkStandalone
            overrides={{typographyPreset: 'editorialParagraph030'}}
            href="https://www.legislation.gov.uk/ukpga/2010/15/section/29"
            external={false}
          >
            UK Equality Act on provision of services
          </LinkStandalone>
          <br />
          <br />
          <br />
          <P
            overrides={{
              typographyPreset: 'editorialHeadline020',
              stylePreset: 'inkContrast',
            }}
          >
            In the US
          </P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            The Americans with Disabilities Act (ADA) is a federal civil rights
            law that prohibits discrimination against people with disabilities
            in everyday activities.
          </P>
          <br />
          <LinkStandalone
            overrides={{typographyPreset: 'editorialParagraph030'}}
            href="https://www.ada.gov/topics/intro-to-ada/"
            external={false}
          >
            The Americans with Disabilities Act
          </LinkStandalone>
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

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
import {Link} from '../../../components/link';
import {P} from '../../../../src/typography';
import {MediaList} from '../../../components/media-list';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';

const listData = [
  `Does mark-up convey meaning and structure?`,
  `Are all interactive elements keyboard accessible?`,
  `Do images have //alt// tags?`,
  `Is there clear feedback after submitting a form?`,
  `Do videos have captions?`,
  `Can animations/transitions be turned off?`,
  `Can audio levels be modified, or audio muted on page load?`,
  `Does it render across different devices?`,
];

const whatNextCards = [
  {
    media: getIllustrationComponent('guides/accessibility-write/hero'),
    title: 'Write for accessibility',
    description: 'Clear copy in plain language benefits everyone.',
    href: '/getting-started/accessibility/write',
  },
  {
    media: getIllustrationComponent('guides/accessibility-test/hero'),
    title: 'Test for accessibility',
    description:
      'Tools and checkers to help you test against accessibilty guidelines.',
    href: '/getting-started/accessibility/test',
  },
];

const AccessibilityCode = (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Code for accessibility',
      description:
        'Building to WCAG standards maintains quality and supports assistive technologies.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Accessibility',
      name: 'Code for accessibility',
      hero: {
        illustration: '/guides/accessibility-code/hero',
      },
      introduction: `Building to WCAG standards maintains quality and supports assistive technologies.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="design accessible websites">
        <ContentPrimary
          showSeparator
          id="design-accessible-websites"
          toc="design accessible websites"
          headline="Build accessible code"
          description={
            <>
              When building for the web, consider:
              <br />
              <br />
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
                {listData}
              </UnorderedList>
              <br />
              <P overrides={{typographyPreset: 'editorialParagraph030'}}>
                Considerations will vary depending on what you are building.
                <br />
                See the{' '}
                <Link
                  href="https://www.a11yproject.com/checklist/"
                  external={false}
                >
                  a11y project checklist
                </Link>{' '}
                for a complete list of code considerations.
              </P>
            </>
          }
        />

        <ContentSecondary headline="Need answers fast?">
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="https://www.w3.org/WAI/tips/designing/"
              overrides={{typographyPreset: 'editorialParagraph030'}}
              external={false}
            >
              Developing for web accessibility
            </Link>{' '}
            - the top 10 things to consider with examples and links to WCAG
            guidelines.
          </P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="https://www.w3.org/WAI/WCAG21/quickref/"
              overrides={{typographyPreset: 'editorialParagraph030'}}
              external={false}
            >
              How to meet WCAG(quick reference)
            </Link>{' '}
            - search and filter WCAG criteria.
          </P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="https://w3c.github.io/aria-practices/examples/landmarks/index.html"
              overrides={{typographyPreset: 'editorialParagraph030'}}
              external={false}
            >
              ARIA landmarks examples
            </Link>{' '}
            - show and hide landmark examples.
          </P>
        </ContentSecondary>
        <ContentSecondary headline="Have time?" showSeparator>
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="https://www.w3.org/WAI/WCAG21/Understanding/"
              overrides={{typographyPreset: 'editorialParagraph030'}}
              external={false}
            >
              Understanding WCAG 2.1
            </Link>{' '}
            - understanding WCAG criteria with visual examples.
          </P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="https://www.w3.org/WAI/ARIA/apg/"
              overrides={{typographyPreset: 'editorialParagraph030'}}
              external={false}
            >
              ARIA authoring practices guide
            </Link>{' '}
            - how to use the accessibility semantics defined by ARIA.
          </P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="https://www.w3.org/WAI/media/av/"
              overrides={{typographyPreset: 'editorialParagraph030'}}
              external={false}
            >
              Making audio and video accessible
            </Link>{' '}
            -how to make media accessible.
          </P>
          <br />
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility"
              overrides={{typographyPreset: 'editorialParagraph030'}}
              external={false}
            >
              MDN web docs accessibility guide
            </Link>{' '}
            -learning modules and resources from Mozilla.
          </P>
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

export default AccessibilityCode;

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
  `Is copy clear, concise and in plain language?`,
  `Does copy follow a logical order?`,
  `Do headings convey meaning and structure?`,
  `Do images have meaningful alt text?`,
  `Are page titles and links unique and informative?`,
  `Do videos have captions?`,
  `Do forms have error messages that clearly describe what went wrong and how to fix the problem?`,
];

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

const AccessibilityWrite = (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Write for accessibility',
      description: 'Clear copy in plain language benefits everyone.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Accessibility',
      name: 'Write for accessibility',
      hero: {
        illustration: 'guides/accessibility-write/hero',
      },
      introduction: `Clear copy in plain language benefits everyone.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="write accessible content">
        <ContentPrimary
          showSeparator
          id="write-accessible-content"
          toc="Write accessible content"
          headline="Write accessible content"
          description={
            <>
              When writing for the web, consider:
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
                Considerations will vary depending on what you are writing.
                <br />
                See the{' '}
                <Link href="https://www.a11yproject.com/checklist/">
                  a11y project checklist
                </Link>{' '}
                for a complete list of content considerations.
              </P>
            </>
          }
        />

        <ContentSecondary headline="Need answers fast?">
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="https://www.w3.org/WAI/tips/writing/"
              overrides={{typographyPreset: 'editorialParagraph030'}}
            >
              Writing clear and understandable content
            </Link>{' '}
            - the top 7 things to consider with examples and links to WCAG
            guidelines.
          </P>
        </ContentSecondary>
        <ContentSecondary headline="Have time?" showSeparator>
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="https://www.w3.org/WAI/WCAG2/supplemental/objectives/o3-clear-content/"
              overrides={{typographyPreset: 'editorialParagraph030'}}
            >
              Writing for web accessibility
            </Link>{' '}
            - W3C example patterns and user personas.
          </P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="https://www.gov.uk/guidance/guidance-and-tools-for-digital-accessibility#designing-accessible-content"
              overrides={{typographyPreset: 'editorialParagraph030'}}
            >
              Designing accessible content
            </Link>{' '}
            - from the Government Digital Service.
          </P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="http://www.plainenglish.co.uk/free-guides.html"
              overrides={{typographyPreset: 'editorialParagraph030'}}
            >
              How to write in plain English
            </Link>{' '}
            - from the Plain English Campaign.
          </P>
          <br />

          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="https://sites.google.com/news.co.uk/d-and-i/inclusive-terminology?authuser=0"
              overrides={{typographyPreset: 'editorialParagraph030'}}
              external={false}
            >
              The common sense guide to inclusion terminology
            </Link>{' '}
            (internal)
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

export default AccessibilityWrite;

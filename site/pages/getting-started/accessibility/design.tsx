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
import {P} from '../../../../src/typography';
import {Link} from '../../../components/link';
import {MediaList} from '../../../components/media-list';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';

const listData = [
  `Do all elements meet colour contrast to an AA standard?`,
  `Does content have a clear order and hierarchy?`,
  `Are interactive elements easy to identify?`,
  `Are navigation options clear and consistent?`,
  `Are layouts responsive to different viewports?`,
];

const whatNextCards = [
  {
    media: getIllustrationComponent('guides/accessibility-code/hero'),
    title: 'Code for accessibility',
    description:
      'Building to WCAG standards maintains quality and supports assistive technologies.',
    href: '/getting-started/accessibility/code',
  },
  {
    media: getIllustrationComponent('guides/accessibility-write/hero'),
    title: 'Write for accessibility',
    description: 'Clear copy in plain language benefits everyone.',
    href: '/getting-started/accessibility/write',
  },
];

const AccessibilityDesign = (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Design for accessibility',
      description: 'Design provides the foundations for accessibility.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Accessibility',
      name: 'Design for accessibility',
      hero: {
        illustration: 'guides/accessibility-design/hero',
      },
      introduction: `Design provides the foundations for accessibility.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="Design accessible websites">
        <ContentPrimary
          showSeparator
          id="design-accessible-websites"
          toc="Design accessible websites"
          headline="Design accessible websites"
          description={
            <>
              When designing for the web, consider:
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
                Considerations will vary depending on what you are designing.
                <br />
                See the{' '}
                <Link
                  href="https://www.a11yproject.com/checklist/"
                  type="inline"
                >
                  a11y project checklist
                </Link>{' '}
                for a complete list of design considerations.
              </P>
            </>
          }
        />

        <ContentSecondary headline="Need answers fast?">
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link href="https://www.w3.org/WAI/tips/designing/" type="inline">
              Designing for web accessibility
            </Link>{' '}
            - the top 10 things to consider with examples and links to WCAG
            guidelines.
          </P>
        </ContentSecondary>
        <ContentSecondary headline="Have time?" showSeparator>
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link href="https://www.accessibility.uxdesign.cc/" type="inline">
              Giving a damn about accessibility
            </Link>{' '}
            - a comprehensive handbook on designing for accessibility and
            dealing with stakeholders.
          </P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link
              href="https://www.w3.org/WAI/WCAG21/Understanding/"
              type="inline"
            >
              Understanding WCAG 2.1
            </Link>{' '}
            - understanding WCAG criteria with visual examples.
          </P>
          <br />
          <P overrides={{typographyPreset: 'editorialParagraph030'}}>
            <Link href="https://www.w3.org/WAI/ARIA/apg/" type="inline">
              ARIA authoring practices guides
            </Link>{' '}
            - how to use the accessibility semantics defined by ARIA.
          </P>
          <br />
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

export default AccessibilityDesign;

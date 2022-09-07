import React from 'react';
import {UnorderedList} from 'newskit';
import {LayoutProps} from '../../../components/layout';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {
  ContentSection,
  ContentSecondary,
  ContentTertiary,
  ContentColSpan,
} from '../../../components/content-structure';

const GridLayoutGuide = (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Grid Layout step-by-step',
      description:
        'The grid layout component is a wrapper around CSS grid that maps all CSS grid properties to react props. ',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Guides',
      name: 'Grid Layout step-by-step',
      hero: {
        illustration: 'guides/grid-layout-guide/hero',
      },
      introduction: `The grid layout component is a wrapper around CSS grid that maps all CSS grid properties to react props. `,
    }}
    featureCard={{
      title: 'Need help?',
      description: 'Can’t find what you’re looking for?',
      href: 'about/contact-us/',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="guide">
        <ContentSecondary
          description="Out of the box, all react props support media query objects as values so that you can easily create responsive layouts."
          childrenColSpan={ContentColSpan.TEXT}
        />
        <ContentTertiary headline="Key benefits:" showSeparator>
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
            <>Support media query objects</>
            <>Allows usage for sizing and spacing tokens</>
            <>Allows composition when using naming areas</>
          </UnorderedList>
        </ContentTertiary>
      </ContentSection>
    </ComponentPageCell>
  </GuidePageTemplate>
);

export default GridLayoutGuide;

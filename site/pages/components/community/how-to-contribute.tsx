import React from 'react';
import {AboutPageTemplate} from '../../../templates/about-page-template';
import {LayoutProps} from '../../../components/layout';
import {ComponentPageCell} from '../../../components/layout-cells';
import {UnorderedList} from '../../../../src/unordered-list';
import {
  ContentSection,
  ContentPrimary,
} from '../../../components/content-structure';

import {Link} from '../../../components/link';
// TODO: Remove table of contents?
const CommunityHowToContribute = (layoutProps: LayoutProps) => (
  <AboutPageTemplate
    headTags={{
      title: 'How to contribute',
      description:
        'NewsKit is open source and anyone can contribute to the community index.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Community',
      name: 'How to contribute',
      hero: {
        illustration: 'components/community/community-index',
      },
      introduction:
        'NewsKit is open source and anyone can contribute to the community index.',
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="how-to-contribute">
        <ContentPrimary
          id="newskit-welcomes-contributions"
          toc="Considerations"
          headline="NewsKit welcomes contributions"
          description={
            <>
              We encourage contributions of code, design and guidance. To lower
              the barrier to contribution we don’t have contribution criteria.
              But before submitting a component we’d ask you to consider:
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
                <>
                  Adaptability: could this component be useful to other
                  products?
                </>
                <>
                  Consistency: is built for reuse using NewsKit tokens and base
                  components?
                </>
                <>
                  Accessibility: does it meet WCAG 2.1 AA accessibility
                  standards?
                </>
              </UnorderedList>
            </>
          }
        >
          <></>
        </ContentPrimary>
        <ContentPrimary
          id="how-to-contribute"
          headline="How to contribute to the community index"
          toc="How to contribute"
          description={
            <>
              Complete this{' '}
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfWRmUgUEuj0rufLVZ2QFvUF3MKJc7Hcc0Ll0H39Xsoc0bLhQ/viewform"
              >
                Google Form.
              </Link>{' '}
              We need you to provide:
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
                <>Component name</>
                <>Description </>
                <>
                  Link to GitHub, Storybook, Confluence or wherever the
                  contribution is stored
                </>
                <>Your details so we can get in touch</>
              </UnorderedList>
              <br />
              <br />
              We will review and add the component to the{' '}
              <Link href="community-index">community listing page</Link> so
              everyone can access it.
            </>
          }
        >
          <></>
        </ContentPrimary>
        <ContentPrimary
          id="ongoing-maintenance"
          toc="Ongoing maintenance"
          headline="Ongoing maintenance"
          description={
            <>
              You are responsible for the ongoing maintenance of your
              contribution. If it proves useful to other teams we might consider
              upgrading it to the core library.
            </>
          }
        >
          <></>
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </AboutPageTemplate>
);

export default CommunityHowToContribute;

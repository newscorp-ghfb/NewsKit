import React from 'react';
import {LayoutProps} from '../../../components/layout';
import {PatternPageTemplate} from '../../../templates/pattern-page-template/pattern-page-template';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';
import {ComponentPageCell} from '../../../components/layout-cells';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';
import {MediaList} from '../../../components/media-list';

const BestPractice = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'NewsKit Help Hub',
      description: 'Connecting users with the right help.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Solutions',
      name: 'NewsKit Help Hub',
      hero: {
        illustration: 'patterns/solutions/help-hub/01-hero',
      },
      introduction: `Connecting users with the right help.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="help hub solution">
        <ContentPrimary
          id="help-hub-solution"
          toc="Help Hub Solution"
          headline="Help Hub Solution"
          description={
            <>
              NewsKit Help Hub is a themable help solution that allows customers
              that surface information through an intuitive search.
              <br />
              <br />
              This Solution is built to reduce user churn and reliance on
              customer service agents. A centralised search bar acts as front
              line customer support, while Frequently Asked Questions are pinned
              below. Our integration with Algolia’s search engine means related
              results instantly appear as users type.
            </>
          }
        >
          <ContentSecondary headline="Features">
            <MediaList
              layout="1-span"
              cardsLayout="horizontal"
              cards={[
                {
                  title: 'Most read articles',
                  description:
                    'Display frequently read or recommended articles on the landing page.',
                  media: getIllustrationComponent(
                    'patterns/solutions/help-hub/02-most-read',
                  ),
                },
                {
                  title: 'Search analytics',
                  description:
                    'Optimise the user experience with tracking to find the most common search terms. Get user feedback on how useful customers find each article.',
                  media: getIllustrationComponent(
                    'patterns/solutions/help-hub/03-search',
                  ),
                },
                {
                  title: 'Apply your branding',
                  description:
                    'Use your existing NewsKit theme to align Help Hub to your brand.',
                  media: getIllustrationComponent(
                    'patterns/solutions/help-hub/04-branding',
                  ),
                },
                {
                  title: 'Powered by Algolia search',
                  description:
                    'Full-text, numerical, and faceted search using Algolia search-as-you-type.',
                  media: getIllustrationComponent(
                    'patterns/solutions/help-hub/05-algolia',
                  ),
                },
              ]}
            />
          </ContentSecondary>
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </PatternPageTemplate>
);

export default BestPractice;

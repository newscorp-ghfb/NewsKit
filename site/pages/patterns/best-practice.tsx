import React from 'react';
import {styled, getColorFromTheme} from 'newskit';
import {LayoutProps} from '../../components/layout';
import {MediaList} from '../../components/media-list';
import {PatternPageTemplate} from '../../templates/pattern-page-template/pattern-page-template';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const StyledHeading = styled.span`
  color: ${getColorFromTheme('inkBrand010')};
`;

const BestPractice = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Best practice',
      description:
        'Help users to fill in forms quickly and accurately by following these industry best practices.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Forms',
      name: 'Best practice',
      hero: {
        illustration: 'patterns/overview/hero',
      },
      introduction: `Help users to fill in forms quickly and accurately by following these industry best practices.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="introduction">
        <ContentPrimary
          headline="Introduction"
          description="Following best practices ensures that the user understands what data is being collected and why, is not overwhelmed by the information we are requesting, and knows the data they have entered is valid."
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="structure-layout">
        <ContentPrimary
          id="structure-layout"
          toc="Structure & Layout"
          headline={<StyledHeading>Structure & Layout</StyledHeading>}
          description="Consider if your form should be displayed in a single step or split into multi-steps. Some short forms can be displayed on one page, meaning that the user can see all the information that needs to be entered."
        />
        <ContentSecondary
          headline="Single step vs multi step"
          description={
            <>
              If you have a lot of information to collect, it’s worth
              considering breaking the form into sensible steps e.g. personal
              details, billing etc. This may reduce cognitive load for users so
              they can focus on one type of data at a time. This also allows for
              customer data, such as email addresses, to be captured early in
              the process, meaning they can contact users who drop out of the
              registration process.
              <br />
              <br />
              It’s always advisable to test each layout with your users and,
              ideally, run experiments to understand which structure has the
              best conversion.
              <br />
              <br />
              More information and insight on single step vs multi step can be
              found here.
            </>
          }
          showSeparator
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Tip',
                description:
                  'If your form is split into several steps, there should  be an easy way for the user to go back to the previous step. Data should be autosaved when they go backwards/forwards through the steps.',
                media: getIllustrationComponent('theme/fonts/cap-height'),
              },
            ]}
          />
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </PatternPageTemplate>
);

export default BestPractice;

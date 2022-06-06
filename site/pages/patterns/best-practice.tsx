import React from 'react';
import {
  styled,
  getColorFromTheme,
  IconFilledInfo,
  InlineMessage,
  Block,
  P,
  UnorderedList,
} from 'newskit';
import {Link} from '../../components/link';
import {MediaList} from '../../components/media-list';
import {LayoutProps} from '../../components/layout';
import {PatternPageTemplate} from '../../templates/pattern-page-template/pattern-page-template';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentTertiary,
} from '../../components/content-structure';
import {IconFilledCircle} from '../../components/icons';
import {ComponentPageCell} from '../../components/layout-cells';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const StyledHeading = styled.span`
  color: ${getColorFromTheme('inkBrand010')};
`;

const StyledDoHeading = styled.span`
  color: ${getColorFromTheme('inkPositive')};
`;

const StyledDontHeading = styled.span`
  color: ${getColorFromTheme('inkNegative')};
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
        <ContentSecondary
          headline="Keep the number of fields to a minimum "
          description="The more personal data you ask for, the more likely users will drop out of the funnel. Therefore, you should only ask for information that is genuinely required."
        >
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="minimum fields"
          >
            <Link href="https://www.wsj.com/" target="_blank">
              WSJ
            </Link>{' '}
            saw a 1.8% conversion lift for each field that was reduced, so
            keeping fields to a minimum is likely to have a positive impact.
          </InlineMessage>
        </ContentSecondary>
        <ContentSecondary headline="Layout" />
        <ContentTertiary
          headline={<StyledDoHeading>Do</StyledDoHeading>}
          description={
            <>
              <Block spaceStack="space030" />
              <UnorderedList
                listItemMarker={IconFilledCircle}
                markerAlign="start"
                overrides={{spaceStack: 'space040'}}
              >
                <P overrides={{typographyPreset: 'editorialParagraph030'}}>
                  <Link href="/components/form/">Forms</Link> should be
                  displayed in a single column layout. This means the user’s
                  focus is on one data input type at a time and there is less
                  cognitive load searching the page for what data to enter.
                </P>
              </UnorderedList>
            </>
          }
        />
        <ContentSecondary headline="Text field width" />
        <ContentTertiary
          headline={<StyledDoHeading>Do</StyledDoHeading>}
          description={
            <>
              <Block spaceStack="space030" />
              <UnorderedList
                listItemMarker={IconFilledCircle}
                markerAlign="start"
                overrides={{spaceStack: 'space040'}}
              >
                <P overrides={{typographyPreset: 'editorialParagraph030'}}>
                  Most <Link href="/components/text-field/">Text fields</Link>{' '}
                  should be proportional to the expected user input - no longer
                  than a single line, such as their name or phone number.
                </P>
                <P overrides={{typographyPreset: 'editorialParagraph030'}}>
                  For example, Text Fields that have a set short number of
                  characters should have a proportional width i.e year of birth
                  or postcode.
                </P>
              </UnorderedList>
            </>
          }
        />
        <ContentTertiary
          headline={<StyledDontHeading>Don’t</StyledDontHeading>}
          description={
            <>
              You should avoid using the Text Field if you need to let users
              enter longer answers that might span multiple lines. Consider
              using an alternative, such as Text Area.
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </PatternPageTemplate>
);

export default BestPractice;

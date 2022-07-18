import React from 'react';
import {UnorderedList} from 'newskit';
import {Link} from '../../../components/link';
import {MediaList} from '../../../components/media-list';
import {LayoutProps} from '../../../components/layout';
import {ComponentPageCell} from '../../../components/layout-cells';
import {PatternPageTemplate} from '../../../templates/pattern-page-template/pattern-page-template';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentTertiary,
  ContentColSpan,
} from '../../../components/content-structure';
import {
  StyledHeading,
  StyledDoHeading,
  StyledDontHeading,
} from '../../../utils/styled';

const unorderedListOverrides = {
  spaceStack: 'space040',
  content: {
    typographyPreset: 'editorialParagraph020',
  },
};

const DatePicker = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Date picker',
      description: `Use this data entry type when capturing a date that is in the future such as a delivery date or booking date.`,
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Forms',
      name: 'Date picker',
      hero: {
        illustration: 'patterns/forms/date-picker/hero',
      },
      introduction: `Use this data entry type when capturing a date that is in the future such as a delivery date or booking date.`,
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="How to use">
        <ContentPrimary
          id="how-to-use"
          toc="How to use"
          headline="How to use the date picker"
          description="Date picker should not be used for date of birth as navigating back through years can be cumbersome and lead to mistakes."
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Short term',
                description:
                  'If the user is required to select a date in the near future such as 1-2 months, the date picker should display fortnightly. This reduces cognitive load and allows the user to click/tap through each fortnight easily.',
                media: getIllustrationComponent(
                  'patterns/forms/date-picker/how-to-use/short-term',
                ),
              },
              {
                title: 'Longer term',
                description: (
                  <>
                    If the user is selecting a date more than 2 months in
                    advance, the date picker should display per month so the
                    user can click through each month. Including a year dropdown
                    within the date picker should be avoided as it becomes
                    cumbersome and awkward. It is also unlikely that the user
                    would need to select a date in the distant future.{' '}
                    <Link
                      href="https://material.io/components/date-pickers"
                      target="_blank"
                    >
                      (See Google example)
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/date-picker/how-to-use/long-term',
                ),
              },
              {
                title: 'Mobile devices',
                description:
                  'On mobile, users should be able to scroll or swipe through months as this is an easier interaction than tapping a small CTA.',
                media: getIllustrationComponent(
                  'patterns/forms/date-picker/how-to-use/mobile',
                ),
              },
            ]}
          />
        </ContentPrimary>
        <ContentTertiary
          headline={<StyledDoHeading>Do</StyledDoHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>Clearly show a selected date via UI.</>
            <>Use an appropriate date picker for relevant timescales.</>
            <>
              Make it easy for users to change their mind after selecting a
              date.
            </>
            <>Make navigating between months easy.</>
            <>Consider the device the user is on.</>
            <>
              Make it clear if a date is available unavailable/disabled via the
              UI.
            </>
          </UnorderedList>
        </ContentTertiary>
        <ContentTertiary
          headline={<StyledDontHeading>Don’t</StyledDontHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>Use a date picker for date of birth.</>
            <>Use a drop down for selecting the year.</>
          </UnorderedList>
        </ContentTertiary>
        <ContentSecondary
          headline="Date range"
          description={
            <>
              Although less commonly used in our industry, there may be
              occasions where a date range needs to be selected by the user. E.g
              holiday payments.
              <br />
              <br />
              These are displayed similarly to a date picker but need to allow
              for the following:
            </>
          }
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Show today’s date by highlighting the date in the calendar via UI.
            </>
            <>Allow the user to easily browse through months.</>
            <>First date selected should be the start date.</>
            <>
              Second date selected should be the end date. (Users should not be
              allowed to select a date in the past).
            </>
            <>
              The start and end date should be clearly highlighted in the
              calendar and visually highlight the days/dates in between the
              start and end date.
            </>
          </UnorderedList>
        </ContentSecondary>
        <ContentSecondary>
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Tip',
                description:
                  'Users should be able to change their date range by selecting a new date which becomes the new start date.',
                media: getIllustrationComponent(
                  'patterns/forms/date-picker/tip',
                ),
              },
            ]}
          />
        </ContentSecondary>
        <ContentSecondary
          headline="Date range labelling"
          description="Use ‘to’ instead of a dash or slash in date ranges. ‘To’ is quicker to read than a dash, and it’s easier for screen readers."
          showSeparator
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Error state variants',
                description: (
                  <>
                    Please select a date (If left empty)
                    <br />
                    <br />
                    Please select a date range (If left empty)
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/date-picker/error-state',
                ),
              },
            ]}
          />
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="help improve this page">
        <ContentPrimary
          id="help-improve-this-page"
          toc="Help improve this page"
          headline={<StyledHeading>Help improve this page</StyledHeading>}
          description={
            <>
              To help make sure this page is as useful as it can be, relevant
              and kept up to date with industry best practices, please get in
              touch to share your research findings, and contribute to this
              page.
              <br />
              <br />
              <Link
                href="https://github.com/newscorp-ghfb/newskit/issues/new/choose"
                target="_blank"
              >
                Propose a change or contribution by suggesting a feature
                request.
              </Link>
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </PatternPageTemplate>
);

export default DatePicker;

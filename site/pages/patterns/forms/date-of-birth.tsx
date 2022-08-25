import React from 'react';
import {Block, UnorderedList} from 'newskit';
import {Link} from '../../../components/link';
import {MediaList} from '../../../components/media-list';
import {LayoutProps} from '../../../components/layout';
import {ComponentPageCell} from '../../../components/layout-cells';
import {PatternPageTemplate} from '../../../templates/pattern-page-template/pattern-page-template';
import {
  Illustration,
  getIllustrationComponent,
} from '../../../components/illustrations/illustration-loader';
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

const DateOfBirth = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Date of birth',
      description: `Ask for a user’s date of birth when we need to validate the user’s age. This should not be collected unless you have a need for it to validate a user’s age or benefit them in some way.`,
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Forms',
      name: 'Date of birth',
      hero: {
        illustration: 'patterns/forms/date-of-birth/hero',
      },
      introduction: `Ask for a user’s date of birth when we need to validate the user’s age. This should not be collected unless you have a need for it to validate a user’s age or benefit them in some way.`,
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="How to ask">
        <ContentPrimary
          id="how-to-ask"
          toc="How to ask"
          headline="How to ask for a user’s date of birth"
          description="Date of birth is sensitive information and should only be collected when there is a business need."
        >
          <Block stylePreset="blockRoundedMedium">
            <Illustration path="patterns/forms/date-of-birth/how-to-ask" />
          </Block>
        </ContentPrimary>
        <ContentSecondary
          headline="Labelling"
          description={
            <>
              Date of birth should be labelled as ‘Date of birth’, not
              abbreviated to ‘D.O.B’ as this could lead to confusion.
              <br />
              <br />
              You should clearly state why you are collecting this information
              as it is not always a requirement so you will need to have a
              specific reason.
            </>
          }
        />
        <ContentSecondary
          headline="Data entry format"
          description={
            <>
              The preferred format for date of birth is a text entry field per
              date type i.e day/month/year. This is simpler than scrolling
              through a drop down and minimises users selecting a random date
              from the drop down. - See research on{' '}
              <Link
                href="https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/"
                target="_blank"
              >
                GOV.UK
              </Link>
              <br />
              <br />
              Date format should be day/month/year i.e 12 - 05 - 1983 as this is
              the most common format.
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        />
        <ContentSecondary
          headline="Auto-tab"
          description="As there are 3 fields to fill out for date of birth, the field should auto-tab to the next field once the relevant number of digits have been entered. This saves users time and effort selecting each field individually."
        />
        <ContentTertiary
          headline={<StyledDoHeading>Do</StyledDoHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Default to the numeric keyboard when on mobile. (Use using the
              &apos;type=&quot;number&quot;&apos; attribute).
            </>
            <>
              Split out each date field, not rely on users entering a forward
              slash or hyphen.
            </>
            <>
              Collect 4 digits for the year as year of birth now crosses between
              1900’s/2000’s.
            </>
            <>
              Allow autofill so the user can easily fill out this form based on
              saved personal data on their device.
            </>
            <>
              Show hint text so the user understands the date format they need
              to enter.
            </>
          </UnorderedList>
        </ContentTertiary>
        <ContentTertiary
          headline={<StyledDontHeading>Don’t</StyledDontHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>Use a date picker for date of birth.</>
            <>Use a drop down for year of birth.</>
            <>Mix text input and drop downs.</>
          </UnorderedList>
        </ContentTertiary>
        <ContentTertiary showSeparator>
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Error state variants',
                description: (
                  <>
                    Please enter your date of birth (If left empty)
                    <br />
                    <br />
                    Please enter your full date of birth (If some fields are
                    left empty)
                    <br />
                    <br />
                    Please enter a valid date of birth (If non-numeric
                    characters are entered on desktop or a date of birth is
                    entered outside of a set criteria)
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/date-of-birth/error-state',
                ),
              },
            ]}
          />
        </ContentTertiary>
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

export default DateOfBirth;

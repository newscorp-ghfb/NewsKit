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

const Names = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Names',
      description: `Ask for a user’s name when it is needed to provide a service.`,
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Forms',
      name: 'Names',
      hero: {
        illustration: 'patterns/forms/names/hero',
      },
      introduction: `Ask for a user’s name when it is needed to provide a service.`,
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="When to ask">
        <ContentPrimary
          id="when-to-ask"
          toc="When to ask"
          headline="When to ask for a user’s name"
          description="Only ask for the user’s name when it is part of business requirements."
        />
        <ContentSecondary headline="How to ask for a user’s name">
          <Block stylePreset="blockRoundedMedium">
            <Illustration path="patterns/forms/names/how-to-ask" />
          </Block>
        </ContentSecondary>
        <ContentSecondary
          headline="Labelling"
          description={
            <>
              ‘First name’ and ‘Last name’ should be split out as this
              information is collected separately, and stored in a database.
              Asking for ‘Full name’ should be avoided as each data point should
              be split out individually (this is the way we do this currently at
              NewsCorp).
              <br />
              <br />
              ‘Last name’ should be used instead of ‘Surname’ as it is a clearer
              description of the information we require and is commonplace
              across other products and internationally.
            </>
          }
        />
        <ContentTertiary
          headline={<StyledDoHeading>Do</StyledDoHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>Split out ‘First name and ‘Last name’.</>
            <>
              Fields must be long enough to accommodate the names of your users.
              You should use population data or data about your existing users
              to do this.
            </>
            <>
              Support all the characters users may need to enter, including
              numbers and symbols.
            </>
            <>
              Allow autofill so the user can easily fill out this form based on
              saved personal data on their device.
            </>
            <>
              Stack first name and last name on top of each other rather than
              side by side so each piece of information is dealt with
              individually.
            </>
            <>
              Only ask for a middle name/s if it is a clear business
              requirement, most of the time it is not needed and is additional
              information that the user has to enter.
            </>
          </UnorderedList>
        </ContentTertiary>
        <ContentTertiary
          headline={<StyledDontHeading>Don’t</StyledDontHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Ask for a middle name - it’s additional information that the user
              has to enter, that the business doesn’t need.
            </>
            <>
              Include hint text - this is straightforward information to
              collect.
            </>
            <>Spellcheck user’s name.</>
            <>
              Ask for title - it’s not useful information for the business and
              it may reveal a user&apos;s gender when they don’t want to provide
              it.
            </>
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
                    <UnorderedList
                      markerAlign="start"
                      overrides={unorderedListOverrides}
                    >
                      <>Please enter your first name (If empty)</>
                      <>Please enter your last name (If empty)</>
                      <>
                        You cannot use special characters in your name. (If
                        special character used).
                      </>
                    </UnorderedList>
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/names/error-state',
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

export default Names;

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

const TelephoneNumber = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Telephone number',
      description: `Ask for a user’s telephone number when there is a clear business requirement.`,
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Forms',
      name: 'Telephone number',
      hero: {
        illustration: 'patterns/forms/telephone-number/hero',
      },
      introduction: `Ask for a user’s telephone number when there is a clear business requirement.`,
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="How to ask">
        <ContentPrimary
          id="how-to-ask"
          toc="How to ask"
          headline="How to ask for a user’s telephone number"
          description="Telephone numbers are sensitive information. Be clear about why it is being collected."
        >
          <Block stylePreset="blockRoundedMedium">
            <Illustration path="patterns/forms/telephone-number/how-to-ask" />
          </Block>
        </ContentPrimary>
        <ContentSecondary
          headline="Labelling"
          description={
            <>
              This should be labelled as ‘Contact telephone number’ and you
              should only ask for it once. Some users will not have a home phone
              number so you should not ask for this separately unless there is a
              business requirement to do so.
              <br />
              <br />
              Similarly, not all users will have a mobile number so you should
              not be specific about the type of telephone number you require
              unless there is a business need for one type over the other i.e
              needing to be able to text customers.
            </>
          }
        />
        <ContentSecondary
          headline="International numbers"
          description={
            <>
              You will need to allow for international telephone numbers. The
              simplest way to do this is to allow users to select their country
              code from a select list.
              <br />
              <br />
              The select list should:
              <br />
              <br />
              <UnorderedList
                markerAlign="start"
                overrides={unorderedListOverrides}
              >
                <>
                  Default on the relevant country your business/customers are
                  based.
                </>
                <>
                  Display the relevant country code in the text field i.e +44.
                </>
                <>
                  Display the most likely selected countries to the top of the
                  select list. (If relevant)
                </>
              </UnorderedList>
              <br />
              Although displaying the country code negates the need for the user
              to enter a ‘0’ at the start of their phone number, you should
              still accept telephone numbers where the ‘0’ is added to reduce
              customer error and the need for confusing error messaging.
            </>
          }
        />
        <ContentTertiary
          headline={<StyledDoHeading>Do</StyledDoHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Be clear as to why we are collecting the user&apos;s telephone
              number.
            </>
            <>
              Allow users to include spaces and hyphens in their telephone
              number.
            </>
            <>
              Allow autofill so the user can easily fill out this form based on
              saved personal data on their device.
            </>
            <>
              Validate telephone numbers so you can let users know if they have
              entered one incorrectly.{' '}
              <Link
                href="https://github.com/google/libphonenumber"
                target="_blank"
              >
                Google’s libphonenumber library
              </Link>{' '}
              can validate telephone numbers from most countries.
            </>
            <>Default on number entry for mobile devices.</>
            <>
              Default country code on the relevant country your business/users
              are based.
            </>
          </UnorderedList>
        </ContentTertiary>
        <ContentTertiary
          headline={<StyledDontHeading>Don’t</StyledDontHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Make the user scroll unnecessarily through the country dropdown.
              Country code drop downs can be fiddly and involve a lot of list
              items to scroll through.
            </>
            <>
              Display telephone numbers as links on devices that cannot make
              calls.
            </>
          </UnorderedList>
        </ContentTertiary>
        <ContentTertiary showSeparator>
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Error states',
                description: (
                  <>
                    Please enter your telephone number (If left empty).
                    <br />
                    <br />
                    Please enter a valid telephone number (If too long).
                    <br />
                    <br />
                    Please enter a telephone number in the correct format (If in
                    incorrect format).
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/telephone-number/error-state',
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

export default TelephoneNumber;

import React from 'react';
import {Block, TextBlock, UnorderedList} from 'newskit';
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

export const unorderedListOverrides = {
  spaceStack: 'space040',
  content: {
    typographyPreset: 'editorialParagraph020',
  },
};

const Address = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Address',
      description: `Use this type of data entry when there are clear business requirements to collect a user's address. Ask for a user’s physical address for delivery or as part of a billing service.`,
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Forms',
      name: 'Address',
      hero: {
        illustration: 'patterns/forms/address/hero',
      },
      introduction: `Use this type of data entry when there are clear business requirements to collect a user's address. Ask for a user’s physical address for delivery or as part of a billing service.`,
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="How to ask">
        <ContentPrimary
          id="how-to-ask"
          toc="How to ask"
          headline="How to ask for a user’s address"
          description={
            <>
              An address lookup is the preferred form of address capture. This
              allows the user to enter their postcode and then look up their
              address via a drop down (Combo box).
              <br />
              <br />
              In some cases it is possible for the user to just start typing
              their full address but this is less common and needs to be made
              clear to the user if this is the case.
              <br />
              <br />
              <Link
                href="https://drive.google.com/file/d/1YIOt_NqRAP69h8D7hVVqQ5NtLYBwjHJk/view"
                target="_blank"
              >
                Address look up on type video.
              </Link>
            </>
          }
        >
          <Block stylePreset="blockRoundedMedium">
            <Illustration path="patterns/forms/address/how-to-ask" />
          </Block>
        </ContentPrimary>
        <ContentSecondary
          headline="Labelling"
          description={
            <>
              You should state the type of address you require from the user in
              the labelling, for example ‘Home address’ or ‘Billing address’.
              <br />
              <br />
              If it is not clear in the address label, you should clearly state
              to the user why you are collecting their address as this is
              sensitive information.
            </>
          }
        />
        <ContentSecondary
          headline="Input fields"
          description={
            <>
              <Block spaceStack="space050">
                The Post office recommends four line items when capturing an
                address which are highlighted below:
              </Block>
              <UnorderedList
                markerAlign="start"
                overrides={unorderedListOverrides}
              >
                <>House number and street name</>
                <>Locality name (If needed)</>
                <>Town/City</>
                <>Postcode</>
                <>Country (if needed)</>
              </UnorderedList>
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        >
          <Block spaceStack="space050">
            <TextBlock
              typographyPreset="editorialParagraph020"
              stylePreset="inkBase"
            >
              It makes sense to follow this structure when capturing a users
              address and should be labeled as follows:
            </TextBlock>
          </Block>
          <Block spaceStack="space080">
            <UnorderedList
              markerAlign="start"
              overrides={unorderedListOverrides}
            >
              <>Address line 1</>
              <>Address line 2</>
              <>Town/City</>
              <>County (Optional)</>
              <>Postcode</>
            </UnorderedList>
          </Block>
          <TextBlock
            typographyPreset="editorialParagraph020"
            stylePreset="inkBase"
          >
            If county is displayed it should be optional as not all addresses
            have a county e.g London.
          </TextBlock>
        </ContentSecondary>
        <ContentSecondary
          headline="Country input"
          description="Country should only be shown if there is a business requirement to capture it or the product/brand is international. If collecting the user's country, it should be collected up front so the address entry fields can be displayed appropriately i.e Postcode isn’t relevant in the US (ZIP Code)."
        />
        <ContentSecondary headline="How to display this data entry">
          <Block stylePreset="blockRoundedMedium">
            <Illustration path="patterns/forms/address/how-to-display" />
          </Block>
        </ContentSecondary>
        <ContentTertiary
          headline={<StyledDoHeading>Do</StyledDoHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>Give users the option to enter their address manually.</>
            <>
              Once an address is selected from the address look up you should
              display the full address in text fields so the user can edit their
              address as they see fit.
            </>
            <>
              Allow autofill so the user can easily fill out the form based on
              saved personal data on their device.
            </>
            <>Clearly label each type of address data that is required.</>
            <>
              Allow users to look up another address if they’ve made a mistake.
            </>
            <>
              Stack each address field on top of each other rather than side by
              side so each piece of information is dealt with individually.
            </>
          </UnorderedList>
        </ContentTertiary>
        <ContentTertiary
          headline={<StyledDontHeading>Don’t</StyledDontHeading>}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Display unnecessary address Text Fields that you do not require.
            </>
          </UnorderedList>
        </ContentTertiary>
        <ContentTertiary
          headline="Further guidance on address"
          description={
            <>
              You can find guidance on address capture on the{' '}
              <Link
                href="https://design-system.service.gov.uk/patterns/addresses/"
                target="_blank"
              >
                YouGov website.
              </Link>
            </>
          }
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
                    Please enter your postcode (If left empty)
                    <br />
                    <br />
                    We are unable to find an address with that postcode (If
                    invalid)
                    <br />
                    <br />
                    Please enter a valid postcode (If wrong format entered)
                    <br />
                    <br />
                    Please enter the first line of your address (If left empty)
                    <br />
                    <br />
                    Please enter a city or town (If left empty)
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/address/error-state',
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

export default Address;

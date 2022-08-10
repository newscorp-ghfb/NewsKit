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
import {StyledHeading} from '../../../utils/styled';

const unorderedListOverrides = {
  spaceStack: 'space040',
  content: {
    typographyPreset: 'editorialParagraph020',
  },
};

const InputComponents = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Input components',
      description: `Use the right component for the type of data you’re collecting.`,
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Forms',
      name: 'Input components',
      hero: {
        illustration: 'patterns/forms/input-components/hero',
      },
      introduction: `Use the right component for the type of data you’re collecting.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="introduction">
        <ContentPrimary
          headline="Introduction"
          description="Forms can be split out into data entry types, each will have their own patterns and best practice that is outlined below. You should use an appropriate input type for the data you collect. Providing the right type of input field for requested data will help users enter information in the right format and avoid mistakes, making the process as easy and efficient as possible. Eg. use a Password Input Field for users to input their password."
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="text field">
        <ContentPrimary
          id="text-field"
          toc="Text Field"
          headline={<StyledHeading>Text Field</StyledHeading>}
          description="Text Fields are the simplest and most common form of data entry, allowing users to enter freeform text. This format should be used when the data that is required is open and not something the user can select from a predefined list."
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Considerations',
                description: (
                  <>
                    The vast majority of the time, text input will be single
                    line input, however you should consider allowing multiple
                    line entry if the data needed requires it.
                    <br />
                    <br />
                    The width of the Text Field should be consistent with other
                    Text Fields on the page, unless the data required is a set
                    short number of characters such as postcode (See best
                    practice above).
                    <br />
                    <br />
                    In some cases the format of the field can be restricted i.e
                    numbers or email address. But this should be considered in
                    error messaging.
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/input-components/text-field/considerations',
                ),
              },
            ]}
          />
        </ContentPrimary>
        <ContentTertiary
          headline="Text Field usage examples"
          description={
            <UnorderedList
              markerAlign="start"
              overrides={unorderedListOverrides}
            >
              <>Name</>
              <>Email address</>
              <>Password</>
              <>Date of birth</>
              <>Telephone number</>
              <>Address</>
            </UnorderedList>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="radio group single selection">
        <ContentPrimary
          id="radio-group"
          toc="Radio Group - Single selection"
          headline={
            <StyledHeading>Radio Group - Single selection</StyledHeading>
          }
          description={
            <>
              A <Link href="/components/radio-button/">Radio Group</Link> should
              be used when there is a predefined list of options for a user to
              choose from. These should always be a single selection option and
              should be used for a lower number of options so as not to take up
              too much space on the page i.e between 2 and 10.
            </>
          }
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Considerations',
                description: (
                  <>
                    Options should be stacked on top of each other.
                    <br />
                    <br />
                    You should offer a default selection for Radio Buttons.
                    Radio Buttons always have one option selected so should
                    therefore not be displayed without a default selection.
                    <br />
                    <br />
                    There may need to be an ‘Other’ option where the user enters
                    an answer that isn’t displayed e.g gender.
                    <br />
                    <br />
                    If there are a higher number of radio options required it
                    may be necessary to split out the relevant question onto its
                    own page to reduce cognitive load and keep focus on the
                    question.{' '}
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/input-components/radio-group/considerations',
                ),
              },
            ]}
          />
        </ContentPrimary>
        <ContentTertiary
          headline="Radio Button usage examples"
          description={
            <UnorderedList
              markerAlign="start"
              overrides={unorderedListOverrides}
            >
              <>Gender</>
              <>Payment type</>
              <>Poll</>
            </UnorderedList>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="checkbox multiple selection">
        <ContentPrimary
          id="checkbox"
          toc="Checkbox - Multiple selection"
          headline={
            <StyledHeading>Checkbox - Multiple selection</StyledHeading>
          }
          description={
            <>
              If there is a requirement to allow users to select multiple
              options from a shorter list, then a{' '}
              <Link href="/components/checkbox/">Checkbox</Link> can be used.
              There should still be a limit to the number of options listed so
              that the page isn’t dominated with options. Similar to Radio
              Buttons, if there are more than a certain number of options, a{' '}
              <Link href="/components/select/">Select</Link> should be used i.e
              more than 10.
            </>
          }
        >
          <Block stylePreset="blockRoundedMedium">
            <Illustration path="patterns/forms/input-components/checkbox/checkbox" />
          </Block>
        </ContentPrimary>
        <ContentSecondary
          headline="Considerations"
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Checkboxes should only be displayed vertically, stacked for
              consistent alignment and positioning across different breakpoints.
            </>
            <>You should not pre-select an option for the user</>
            <>
              There may need to be an ‘Other’ option where the user enters an
              answer that isn’t displayed e.g interests.
            </>
            <>
              If there are a higher number of Checkbox options required it may
              be necessary to split out the relevant question onto its own page
              to reduce cognitive load and keep focus on the question.
            </>
            <>
              If there is a maximum/minimum number of responses required, this
              should be made clear to the user upfront.
            </>
            <>
              Avoid placing Labels to the left (start) of Checkboxes when there
              are multiple Checkboxes grouped together to avoid layout
              misalignment. Instead place Labels to the right (end) so that when
              used together in forms, Checkbox inputs align vertically, which
              makes them easier to find, especially for users of screen
              magnifiers.
            </>
            <>
              Avoid using Checkboxes in a horizontal orientation to avoid issues
              with alignment and legibility when there are multiple Checkboxes
              grouped together.
            </>
          </UnorderedList>
        </ContentSecondary>
        <ContentSecondary
          headline="Checkbox usage example"
          description={
            <UnorderedList
              markerAlign="start"
              overrides={unorderedListOverrides}
            >
              <>Customer survey</>
            </UnorderedList>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="select single or multiple selection">
        <ContentPrimary
          id="select"
          toc="Select - Single or multiple selection"
          headline={
            <StyledHeading>Select - Single or multiple selection</StyledHeading>
          }
          description={
            <>
              A ‘Select’ should be used for a larger number of options than a
              Radio Group or Checkbox as the options can then be displayed in
              their own scrollable panel, with focus, rather than on page.
              <br />
              <br />A ‘Select’ can be used for selecting one or multiple options
              from a predefined list.
            </>
          }
        >
          <Block stylePreset="blockRoundedMedium">
            <Illustration path="patterns/forms/input-components/select/select" />
          </Block>
        </ContentPrimary>
        <ContentSecondary
          headline="Considerations"
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Consider if a Select is necessary or if a Text Field can be used.
              Selects can be cumbersome if there are a lot of options for users
              to scroll through.
            </>
            <>You should not pre-select an option for the user.</>
            <>
              In general all valid options should be displayed within the Select
              so an ‘Other’ option isn’t needed.
            </>
            <>
              If there is a more likely/default option, this should be displayed
              at the top of the drop down to save most users scrolling through
              every option e.g United Kingdom.
            </>
            <>
              Options should be displayed in alphabetical order so they are
              easier to scan/find.
            </>
          </UnorderedList>
        </ContentSecondary>
        <ContentSecondary headline="Select usage example" showSeparator>
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>Country code (If not using text input).</>
          </UnorderedList>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="combo box">
        <ContentPrimary
          id="combo-box"
          toc="Combo box"
          headline={<StyledHeading>Combo box</StyledHeading>}
          description="A Combo Box is a combination of a Text Input and a Select. A Combo Box should be used for looking up and selecting an option based on the user's entry to the Text Input. i.e Address lookup."
        >
          <Block stylePreset="blockRoundedMedium">
            <Illustration path="patterns/forms/input-components/combo-box/combo-box" />
          </Block>
        </ContentPrimary>
        <ContentSecondary
          headline="Considerations"
          childrenColSpan={ContentColSpan.TEXT}
          showSeparator
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Consider giving the user the option to add their entry manually.
              Sometimes lookup doesn’t give the required answer so manually
              typing the response is easier.
            </>
            <>
              Give clear instructions as to what the user has to type into the
              text input and what they then have to do i.e ‘Enter your postcode
              and select your address from the list provided’.
            </>
            <>
              Allow users to change their entry if a mistake has been made or
              they decide on a different entry i.e different postcode.
            </>
            <>
              Select results should be displayed as the user types their text
              entry rather than waiting for users to select a CTA to submit as
              this reduces time and effort for the user. There should still
              however be an option to tap/type the return key on a keyboard or
              select a CTA to submit.
            </>
          </UnorderedList>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="newsKit input component links">
        <ContentPrimary
          id="newsKit-input-component"
          toc="NewsKit input component links"
          headline={
            <StyledHeading>NewsKit input component links</StyledHeading>
          }
          showSeparator
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Text Field',
                description: (
                  <>
                    Text Fields allow users to enter and edit text content into
                    a UI. They typically appear in Forms.
                    <br />
                    <br />
                    <Link href="/components/text-field/">
                      View the Text Field component
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/input-components/newskit-component/text-field',
                ),
              },
              {
                title: 'Radio Button',
                description: (
                  <>
                    Radio Buttons are selection controls that are typically used
                    in forms. They are used for exclusive selection - allowing
                    users to select one of multiple options in a Radio Group.
                    <br />
                    <br />
                    <Link href="/components/radio-button/">
                      View the Radio Button component
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/input-components/newskit-component/radio-button',
                ),
              },
              {
                title: 'Checkbox',
                description: (
                  <>
                    Checkboxes are selection controls that allow users to select
                    one or multiple items From a group of options. They
                    typically appear in forms.
                    <br />
                    <br />
                    <Link href="/components/checkbox/">
                      View the Checkbox component
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/input-components/newskit-component/checkbox',
                ),
              },
              {
                title: 'Select',
                description: (
                  <>
                    Select components allow users to select one option from a
                    list. They typically appear in Forms.
                    <br />
                    <br />
                    <Link href="/components/select/">
                      View the Select component
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/input-components/newskit-component/select',
                ),
              },
            ]}
          />
        </ContentPrimary>
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

export default InputComponents;

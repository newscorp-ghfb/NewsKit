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
  StyledEmailText,
} from '../../../utils/styled';

const unorderedListOverrides = {
  spaceStack: 'space040',
  content: {
    typographyPreset: 'editorialParagraph020',
  },
};

const EmailAddress = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Email address',
      description: `Ask for a user’s email address to provide a service, to contact them directly, or as a unique way of identifying them.`,
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Forms',
      name: 'Email address',
      hero: {
        illustration: 'patterns/forms/email-address/hero',
      },
      introduction: `Ask for a user’s email address to provide a service, to contact them directly, or as a unique way of identifying them.`,
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="How to use">
        <ContentPrimary
          id="how-to-use"
          toc="How to use"
          headline="How to ask for a user’s email address"
          description="Collect a user's email address when it is needed to provide a service to the user or business, where you need a unique way of identifying the user or you need a way of contacting them directly based on their permissions."
        >
          <Block stylePreset="blockRoundedMedium">
            <Illustration path="patterns/forms/email-address/how-to-ask" />
          </Block>
        </ContentPrimary>
        <ContentSecondary
          headline="Labelling"
          description="‘Email address’ should be used as the field label but you should also inform the user as to why you are collecting this piece of information so you are transparent."
        />
        <ContentTertiary
          headline={<StyledDoHeading>Do</StyledDoHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <Block spaceStack="space060">
            <UnorderedList
              markerAlign="start"
              overrides={unorderedListOverrides}
            >
              <>Check users have used the correct format.</>
              <>Inform users why you are collecting this data.</>
              <>
                Consider email verification if the business needs to check that
                users have access to the email address they give you.
              </>
              <>
                Allow autofill so the user can easily fill out this form based
                on saved personal data on their device i.e set autocomplete
                attribute to ‘email’.
              </>
              <>
                Give plenty of room in the{' '}
                <Link href="/components/text-input/">Text Field</Link> for
                (Most) users to fit their whole email address.
              </>
            </UnorderedList>
          </Block>
          <Block spaceStack="space060">
            <TextBlock
              typographyPreset="editorialParagraph020"
              stylePreset="inkBase"
            >
              Help users to enter a valid email address by:
            </TextBlock>
          </Block>
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>Checking they have entered the correct format.</>
            <>Allowing users to paste the email address.</>
            <>
              Setting the type attribute to email so that devices display the
              correct keyboard.
            </>
            <>
              Setting the spellcheck attribute to false so that browsers do not
              spell check the email address.
            </>
            <>
              Allowing keyboard shortcuts such as ‘@@’ to enter email address on
              iOS devices.
            </>
          </UnorderedList>
        </ContentTertiary>
        <ContentTertiary
          headline={<StyledDontHeading>Don’t</StyledDontHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Ask for ‘Email address’ twice, it’s an extra action and may lead
              to more errors when filling out the form.
            </>
            <>
              Show example/hint placeholder text, entering an email address is
              very common.
            </>
            <>
              Check if email is valid whilst the user types, this should be done
              when they tab out of the field (On blur).
            </>
          </UnorderedList>
        </ContentTertiary>
        <ContentSecondary showSeparator>
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Error state variants',
                description: (
                  <>
                    Please enter your email address (If empty on tab out or
                    selection of ‘Submit’)
                    <br />
                    <br />
                    Please enter a valid email address e.g{' '}
                    <StyledEmailText>name@example.co.uk</StyledEmailText>
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/email-address/error-state',
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

export default EmailAddress;

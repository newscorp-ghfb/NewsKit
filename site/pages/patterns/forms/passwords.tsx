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
import {StyledHeading, StyledDontHeading} from '../../../utils/styled';

const unorderedListOverrides = {
  spaceStack: 'space040',
  content: {
    typographyPreset: 'editorialParagraph020',
  },
};

const Passwords = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Passwords',
      description: `Use a password entry field when asking users to create an account or log in.`,
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Forms',
      name: 'Passwords',
      hero: {
        illustration: 'patterns/forms/passwords/hero',
      },
      introduction: `Use a password entry field when asking users to create an account or log in.`,
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="How to ask">
        <ContentPrimary
          id="how-to-ask"
          toc="How to ask"
          headline="How to ask users to enter a password"
        >
          <Block stylePreset="blockRoundedMedium">
            <Illustration path="patterns/forms/passwords/how-to-ask" />
          </Block>
        </ContentPrimary>
        <ContentSecondary
          headline="Labelling"
          description="This should be labelled as ‘Password’ and we should clearly outline password constraints so users know the constraints before they enter a password and not just when an error occurs."
        />
        <ContentTertiary
          headline="Forgotten passwords"
          description={
            <>
              You should help users who have forgotten their password, due to
              stricter password constraints, passwords that are hard to guess
              can also be hard to remember.
              <br />
              <br />
              When helping users who’ve forgotten their password, you should:
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>Send them a link or code to trigger a password reset.</>
            <>Avoid password reset questions.</>
            <>Avoid password reminders.</>
          </UnorderedList>
        </ContentTertiary>
        <ContentTertiary
          headline={<StyledDontHeading>Don’t</StyledDontHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Have too complex password constraints, users may forget their
              password if it’s too complicated.
            </>
            <>
              Disable paste on password fields. People may have very good
              reasons why they want to paste their password, for example if
              they’re using a password manager.
            </>
            <>Set a maximum password length.</>
            <>Allow commonly used passwords.</>
            <>Have password reset questions.</>
            <>Have password reminders.</>
          </UnorderedList>
        </ContentTertiary>
        <ContentSecondary>
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Error states',
                description: (
                  <>
                    Example of error state
                    <br />
                    <br />
                    Please enter a password (If left empty)
                    <br />
                    <br />
                    Please enter a valid password (If password does not meet
                    requirements)
                  </>
                ),
                media: getIllustrationComponent(
                  'patterns/forms/passwords/error-state',
                ),
              },
            ]}
          />
        </ContentSecondary>
        <ContentSecondary
          headline="Further detail"
          description={
            <>
              There is a more detailed breakdown of best practice for password
              entry on the{' '}
              <Link
                href="https://design-system.service.gov.uk/patterns/passwords/"
                target="_blank"
              >
                Gov.uk Design System website here.
              </Link>
              <br />
              <br />
              There is also further information on the{' '}
              <Link
                href="https://www.ncsc.gov.uk/collection/passwords"
                target="_blank"
              >
                UK&apos;s National Cyber Security Centre here.
              </Link>
            </>
          }
          showSeparator
        />
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

export default Passwords;

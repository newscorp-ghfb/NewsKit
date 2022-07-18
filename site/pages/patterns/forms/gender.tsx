import React from 'react';
import {UnorderedList} from 'newskit';
import {Link} from '../../../components/link';
import {LayoutProps} from '../../../components/layout';
import {ComponentPageCell} from '../../../components/layout-cells';
import {PatternPageTemplate} from '../../../templates/pattern-page-template/pattern-page-template';
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

const Gender = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Gender/Sex/Title',
      description: `Use this component to collect a user’s gender.`,
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Forms',
      name: 'Gender/Sex/Title',
      hero: {
        illustration: 'patterns/forms/gender/hero',
      },
      introduction: `Use this component to collect a user’s gender.`,
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="How to ask">
        <ContentPrimary
          id="how-to-ask"
          toc="How to ask"
          headline="How to ask users for their gender"
          description="Gender is sensitive information. Only ask for a user’s gender if it is vital to collect as part of a business requirement. If gender is collected you should make it clear to the user why we are asking for this data."
        />
        <ContentSecondary
          headline="Labelling"
          description={
            <>
              When collecting this data you should use the term ‘Gender’ rather
              than ‘Sex’ or ‘Title’. ‘Sex’ should only be used for biological or
              medical services so isn’t appropriate for News Corp.
              <br />
              <br />
              If users select ‘Other’ a text entry field should be displayed as
              a separate component in NewsKit.
            </>
          }
        />
        <ContentTertiary
          headline={<StyledDoHeading>Do</StyledDoHeading>}
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>Give users the option of ‘I’d prefer not to say’.</>
            <>Display genders in alphabetical order.</>
            <>Display as a radio button list.</>
            <>Make sure you actually need to ask for this data.</>
          </UnorderedList>
        </ContentTertiary>
        <ContentTertiary
          headline={<StyledDontHeading>Don’t</StyledDontHeading>}
          childrenColSpan={ContentColSpan.TEXT}
          showSeparator
        >
          <UnorderedList markerAlign="start" overrides={unorderedListOverrides}>
            <>
              Assume gender by asking for ‘Title’ - A Dr can be both male or
              female.
            </>
            <>Use the term ‘Sex’.</>
          </UnorderedList>
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

export default Gender;

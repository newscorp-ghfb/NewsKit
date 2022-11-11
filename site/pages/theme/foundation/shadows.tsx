import React from 'react';
import {newskitLightTheme} from 'newskit';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {Table} from '../../../components/table';
import {ComponentPageCell} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {getTokenType} from '../../../utils/get-token-type';
import {Link} from '../../../components/link';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';

const TOKENS_DESCRIPTION: {[key: string]: string | JSX.Element} = {
  shadow010: (
    <>
      <Link href="/components/card">Card</Link>
      <br />
      <Link href="/components/button">Button (active state)</Link>
    </>
  ),
  shadow020: 'Notification badges',
  shadow030: 'Navigation Menu Bar',
  shadow040: (
    <>
      <Link href="/components/card">Card (hover state)</Link>
      <br />
      <Link href="/components/button">Button (hover state)</Link>
    </>
  ),
  shadow050: (
    <>
      Pickers
      <br />
      Popover
    </>
  ),
  shadow060: (
    <>
      Modals
      <br />
      Dialogs
    </>
  ),
};

const shadowRows = getTokenType(newskitLightTheme.shadows, 'shadow').map(
  ({tokenName, tokenValue}) => ({
    shadow: tokenValue as string,
    token: tokenName,
    exampleUsage: TOKENS_DESCRIPTION[tokenName] || '-',
  }),
);

const Shadows = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Shadows',
      description:
        'Shadows provide visual cues about the distance between layers.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Shadows',
      hero: {
        illustration: 'components/hero-shadows-illustration',
      },
      introduction: `Shadows provide visual cues about the distance between layers.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description={
            <>
              Choose from a range of shadow depths.
              <br />
              <br />
              Shadows can improve overall aesthetic, add depth and realism to
              the user’s visual experience and improve the visual hierarchy.
              This helps users discover and interact with UI elements.
              <br />
              <br />
              Shadow options are mapped to common components to ensure they work
              together.
            </>
          }
        >
          <Table
            columns={['Shadow', 'Token', 'Example usage']}
            rows={shadowRows}
          />
        </ContentPrimary>

        <ContentSecondary
          description={
            <>
              Apply shadows to a UI element using the boxShadow attribute on a{' '}
              <Link href="/theme/presets/style-presets/">style preset.</Link>
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Shadows;

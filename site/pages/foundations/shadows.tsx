import React from 'react';
import {newskitLightTheme} from 'newskit';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {Table} from '../../components/table';
import {ComponentPageCell} from '../../components/layout-cells';
import {LayoutProps} from '../../components/layout';
import {getTokenType} from '../../utils/get-token-type';
import {Link} from '../../components/link';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../components/content-structure';

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

export default (layoutProps: LayoutProps) => (
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
          description="The NewsKit design system offers a series of depths of shadows. They improve the overall aesthetics, add levels of depth and realism to the user’s visual experience and improve the UI visual hierarchy. This helps users discover and interact with UI elements. These have been mapped to commonly used components to ensure they work together in harmony."
        >
          <Table
            columns={['Shadow', 'Token', 'Example usage']}
            rows={shadowRows}
          />
        </ContentPrimary>

        <ContentSecondary
          description={
            <>
              Shadows can be applied to a UI element using the boxShadow
              attribute on a{' '}
              <Link href="/foundations/presets/style-presets/">
                Style Preset.
              </Link>
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

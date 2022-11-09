import React from 'react';
import {newskitLightTheme} from 'newskit';
import {Link} from '../../../components/link';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';
import {UsageKind} from '../../../components/usage-card';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {LayoutProps} from '../../../components/layout';
import {MediaList} from '../../../components/media-list';
import {
  ContentPrimary,
  ContentSection,
} from '../../../components/content-structure';
import {ComponentPageCell} from '../../../components/layout-cells';
import {getTokenType} from '../../../utils/get-token-type';
import {TableRow} from '../../../components/table';
import {TabsWithTable} from '../../../components/tabs-with-table';

const usageString = 'Creative use case';
const TOKENS_DESCRIPTION: {[key: string]: string | JSX.Element} = {
  overlayTintBase010: usageString,
  overlayTintBase020: usageString,
  overlayTintBase030: usageString,
  overlayTintBase040: (
    <>
      Internal overlay component that sits behind the panels (used by{' '}
      <Link href="/components/modal">modals</Link> and{' '}
      <Link href="/components/drawer">drawers</Link>)
    </>
  ),
};
const inverserOverlayRows = getTokenType(
  newskitLightTheme.overlays,
  'overlayTintInverse',
).map(({tokenName, tokenValue}) => ({
  value: tokenValue,
  tint: tokenName as string,
  token: tokenName,
  commonUsage: usageString,
})) as TableRow[];

const overlayRows = getTokenType(
  newskitLightTheme.overlays,
  'overlayTintBase',
).map(({tokenName, tokenValue}) => ({
  value: tokenValue,
  tint: tokenName as string,
  token: tokenName,
  commonUsage: TOKENS_DESCRIPTION[tokenName] || '-',
})) as TableRow[];

const COLUMN_HEADER = ['Tint', 'Token', 'Value', 'Common usage'];

const overlayTable = [
  {
    title: 'Tint',
    summary: (
      <>
        Tints make colours in a UI more or less intense. You can make text
        easier to read by increasing the contrast between foreground and
        background elements.
        <br />
        <br />
        &apos;Base&apos; tint tokens darken a background or element.
        <br />
        <br />
        &apos;Inverse&apos; tint tokens lighten a background or element.
      </>
    ),

    tabs: [
      {
        header: 'Base',
        columnHeader: COLUMN_HEADER,
        rows: overlayRows,
      },
      {
        header: 'Inverse',
        columnHeader: COLUMN_HEADER,
        rows: inverserOverlayRows,
      },
    ],
  },
];

const DO_AND_DONT = [
  {
    description: (
      <>
        Overlay contrasts should be distinct and clear. You can use them to
        obscure page content and emphasise an element for greater legibility
        (e.g. <Link href="/components/modal">modal</Link>).
      </>
    ),

    kind: UsageKind.DO,
    media: getIllustrationComponent('theme/overlays/do'),
  },
  {
    description:
      'Overlays shouldn’t obscure the legibility of important UI elements, like text and icons.',
    kind: UsageKind.DONT,
    media: getIllustrationComponent('theme/overlays/dont'),
  },
];

const Overlays = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Overlays',
      description:
        'Overlays style UI elements. They can be decorative, but often have a functional use like communicating state on images or increasing background contrast when a component is layered above the interface (e.g. modal).',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Overlays',
      hero: {
        illustration: 'theme/overlays/hero',
      },
      introduction:
        'Overlays style UI elements. They can be decorative, but often have a functional use like communicating state on images or increasing background contrast when a component is layered above the interface (e.g. modal).',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="Overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description="Overlay foundations consist of tints in ‘base’ (these are dark when used in a light theme) and ‘inverse’ (light when used in a dark theme) styles."
          showSeparator
        />

        <TabsWithTable components={overlayTable} showSeparator />

        <ContentSection sectionName="usage">
          <ContentPrimary
            toc="Usage"
            id="usage"
            headline="How to use overlays"
            description="The following guidance describes how and when to appropriately use overlays."
            showSeparator
          >
            <MediaList
              gridProps={{xsRowGutter: 'space050'}}
              cardType="usage"
              layout="2-span"
              cards={DO_AND_DONT}
            />
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="a11y">
          <ContentPrimary
            id="ally"
            toc="Accessibility"
            headline="Accessibility considerations"
            description="When using overlays, ensure important UI elements like text
and icons are legible without compromising the aesthetic."
            showSeparator
          />
        </ContentSection>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Overlays;

import React from 'react';
import {newskitLightTheme, Tab, Tabs} from 'newskit';
import {Link} from '../../components/link';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {LayoutProps} from '../../components/layout';
import {MediaList} from '../../components/media-list';
import {
  ContentPrimary,
  ContentSection,
} from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';
import {getTokenType} from '../../utils/get-token-type';
import {Table, TableRow} from '../../components/table';

const DO_AND_DONT = [
  {
    description: (
      <>
        Overlay contrasts should be distinct and clear. They can be used to
        obscure page content and emphasise an element for greater legibility,
        I.e. the <Link href="/components/modal">Modal.</Link>
      </>
    ),

    kind: UsageKind.DO,
    media: getIllustrationComponent('theme/overlays/do'),
  },
  {
    description:
      'Ensure overlays used do not obscure the legibility of important UI elements like text and icons, and contrasts are distinct and clear.',
    kind: UsageKind.DONT,
    media: getIllustrationComponent('theme/overlays/dont'),
  },
];

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

const overlayRows = getTokenType(
  newskitLightTheme.overlays,
  'overlayTintBase',
).map(({tokenName, tokenValue}) => ({
  value: tokenValue,
  tint: tokenName as string,
  token: tokenName,
  commonUsage: TOKENS_DESCRIPTION[tokenName] || '-',
})) as TableRow[];

const inverserOverlayRows = getTokenType(
  newskitLightTheme.overlays,
  'overlayTintInverse',
).map(({tokenName, tokenValue}) => ({
  value: tokenValue,
  tint: tokenName as string,
  token: tokenName,
  commonUsage: usageString,
})) as TableRow[];

const Overlays = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Overlays',
      description:
        'Overlays are used for styling UI elements. They can be decorative, but often have a functional use like communicating state on images or increasing the background contrast when a component is layered above the interface, e.g. a Modal',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Overlays',
      hero: {
        illustration: 'theme/overlays/hero',
      },
      introduction:
        'Overlays are used for styling UI elements. They can be decorative, but often have a functional use like communicating state on images or increasing the background contrast when a component is layered above the interface, e.g. a Modal.',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="Overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description="Overlay foundations consist of tints in both ‘base’ styles
          (these are dark when used in a light theme) and ‘inverse’
          styles (these are light when used in a dark theme)."
          showSeparator
        />

        <ContentSection sectionName="Tints">
          <ContentPrimary
            id="tints"
            toc="Tints"
            headline="Tints"
            description={
              <>
                Tints make colors in a UI more or less intense by aiding
                legibility contrast between the foreground and background
                elements.
                <br />
                <br />
                `Base` tint tokens are used to darken a background or element.
                <br />
                <br />
                `Inverse` tint tokens are used to lighten a background or
                element.
              </>
            }
            showSeparator
          >
            <Tabs size="medium">
              <Tab label="Base">
                <Table
                  columns={['Tint', 'Token', 'Value', 'Common usage']}
                  rows={overlayRows}
                />
              </Tab>
              <Tab label="Inverse">
                <Table
                  columns={['Tint', 'Token', 'Value', 'Common usage']}
                  rows={inverserOverlayRows}
                />
              </Tab>
            </Tabs>
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="usage">
          <ContentPrimary
            toc="Usage"
            id="usage"
            headline="Usage"
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

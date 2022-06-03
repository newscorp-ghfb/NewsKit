import React from 'react';
import {newskitLightTheme} from 'newskit';
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
    description:
      'Overlay contrasts should be distinct and clear. They can be used to obscure page content and emphasise an element for greater legibility. I.e. the Modal.',
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

const overlayRows = getTokenType(
  newskitLightTheme.overlays,
  'overlayTintBase',
).map(({tokenName, tokenValue}) => ({
  value: tokenValue,
  overlay: tokenValue as string,
  token: tokenName,
  exampleUsage: '',
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
      <ContentSection sectionName="overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description="Tints make colours in a UI more or less intense by aiding legibility contrast between the foreground and background elements. "
        >
          <Table
            columns={['Overlay', 'Token', 'Value', 'Example usage']}
            rows={overlayRows}
          />
        </ContentPrimary>

        {/* <ContentSecondary
          description={
            <>
              Shadows can be applied to a UI element using the boxShadow
              attribute on a{' '}
              <Link href="/theme/presets/style-presets/">Style Preset.</Link>
            </>
          }
          showSeparator
        /> */}
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
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Overlays;

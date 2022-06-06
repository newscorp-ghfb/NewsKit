import React from 'react';
import {getTokenType} from '../../utils/get-token-type';
import {
  ContentPrimary,
  ContentSection,
} from '../../components/content-structure';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {LayoutProps} from '../../components/layout';
import {ComponentPageCell} from '../../components/layout-cells';
import {Tab, Tabs} from '../../../src/tabs';
import {Table, TableRow} from '../../components/table';
import {newskitLightTheme} from '../../../src/theme';

const baseGradientRows = getTokenType(
  newskitLightTheme.overlays,
  'overlayGradientBase',
).map(({tokenName, tokenValue}) => ({
  value: tokenValue,
  gradient: tokenName as string,
  token: tokenName,
})) as TableRow[];

const Gradients = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Gradients',
      description:
        'Gradient foundations consist of both ‘base’ styles (these are dark when used in a light theme) and ‘inverse’ styles (these are light when used in a dark theme).',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Gradients',
      hero: {
        illustration: 'theme/gradients/hero',
      },
      introduction:
        "Gradients Base gradient tokens are used to fade elements into the interface background. 'Inverse' gradient tokens are used to fade elements into a dark background in a light theme.",
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="Overview">
        <ContentPrimary
          id="Overview"
          toc="Overview"
          headline="Overview"
          description={`Gradient foundations consist of both ‘base’ styles
(these are dark when used in a light theme and inverse)
styles (these are light when used in a dark theme)`}
        >
          <Tabs size="medium">
            <Tab label="Base">
              <Table
                columns={['Gradient', 'Token', 'Value']}
                rows={baseGradientRows}
              />
            </Tab>
            <Tab label="Inverse">
              <Table
                columns={['Gradient', 'Token', 'Value']}
                rows={baseGradientRows}
              />
            </Tab>
          </Tabs>
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Gradients;

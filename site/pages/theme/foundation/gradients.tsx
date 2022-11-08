import React from 'react';
import {getTokenType} from '../../../utils/get-token-type';
import {
  ContentPrimary,
  ContentSecondary,
  ContentSection,
} from '../../../components/content-structure';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {LayoutProps} from '../../../components/layout';
import {ComponentPageCell} from '../../../components/layout-cells';
import {TableRow} from '../../../components/table';
import {newskitLightTheme} from '../../../../src/theme';
import {TabsWithTable} from '../../../components/tabs-with-table';
import {UnorderedList} from '../../../../src/unordered-list';
import {IconFilledCircle} from '../../../../src/icons';

const themeGradientRows = (tokenTypes: string[]) => {
  const tokens = getTokenType(newskitLightTheme.overlays, '');

  const rows = tokens.reduce((result, current) => {
    const {tokenName, tokenValue} = current;
    if (tokenTypes.includes(tokenName)) {
      const gradient = {
        gradient: tokenName,
        token: tokenName,
        value: tokenValue as string,
      };
      return [...result, gradient];
    }
    return result;
  }, [] as TableRow[]);
  return rows;
};

const inverserGradientRows = getTokenType(
  newskitLightTheme.overlays,
  'overlayGradientInverse',
).map(({tokenName, tokenValue}) => ({
  value: tokenValue,
  gradient: tokenName as string,
  token: tokenName,
})) as TableRow[];

const COLUMN_HEADER = ['Gradient', 'Token', 'Value'];

const gradientsTable = [
  {
    tabs: [
      {
        header: 'Base',
        columnHeader: COLUMN_HEADER,
        rows: themeGradientRows([
          'overlayGradientBaseVertical',
          'overlayGradientBaseHorizontal',
          'overlayGradientFromBottom',
          'overlayGradientFromBottomLeft',
          'overlayGradientFromBottomRight',
          'overlayGradientFromLeft',
          'overlayGradientFromRight',
          'overlayGradientFromTop',
          'overlayGradientFromTopLeft',
          'overlayGradientFromTopRight',
        ]),
      },
      {
        header: 'Inverse',
        columnHeader: COLUMN_HEADER,
        rows: inverserGradientRows,
      },
    ],
  },
];

const Gradients = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Gradients',
      description:
        'Gradients are used to create the illusion of content fading into an interface or image.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Gradients',
      hero: {
        illustration: 'theme/gradients/hero',
      },
      introduction:
        'Gradients, also known as colour transitions, are often used to provide realism, increase colour contrast, or to create the illusion of content fading into an interface or image.',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="Overview">
        <ContentPrimary
          id="Overview"
          toc="Overview"
          headline="Overview"
          description={
            <>Gradient foundations consist of ‘base’ and ‘inverse’ styles.</>
          }
        />

        <ContentSecondary headline="Base">
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              spaceStack: 'space040',
              content: {
                typographyPreset: {
                  xs: 'editorialParagraph020',
                  md: 'editorialParagraph030',
                },
              },
            }}
          >
            <>Dark when used in a light theme</>
            <>
              &apos;Base&apos; gradient tokens fade elements into the interface
              background
            </>
          </UnorderedList>
        </ContentSecondary>

        <ContentSecondary headline="Inverse">
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              spaceStack: 'space040',
              content: {
                typographyPreset: {
                  xs: 'editorialParagraph020',
                  md: 'editorialParagraph030',
                },
              },
            }}
          >
            <>Light when used in a dark theme </>
            <>
              &apos;Inverse&apos; gradient tokens fade elements into a dark
              background in a light theme
            </>
          </UnorderedList>
        </ContentSecondary>
      </ContentSection>

      <TabsWithTable components={gradientsTable} showSeparator />
      <ContentSection sectionName="a11y">
        <ContentPrimary
          id="a11y"
          toc="Accessibility"
          headline="Accessibility considerations"
          description="When using gradients, ensure important UI elements like text and icons are legible without compromising the aesthetic."
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Gradients;

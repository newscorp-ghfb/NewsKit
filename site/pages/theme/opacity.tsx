import React from 'react';
import {newskitLightTheme} from 'newskit';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {LayoutProps} from '../../components/layout';
import {
  ContentPrimary,
  ContentSection,
} from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';
import {getTokenType} from '../../utils/get-token-type';
import {Table, TableRow} from '../../components/table';
import {Link} from '../../components/link';

const opacity000Token =
  'Applied to the background of the feedback element applied to the multiple interactive elements, such as the Checkbox, or Radio Button on hover.';
const creativeUseCase = ' Creative use case';
const opacityRows = getTokenType(newskitLightTheme.overlays, 'opacity').map(
  ({tokenName, tokenValue}) => ({
    value: tokenValue,
    opacity: tokenName as string,
    token: tokenName,
    commonUsage: tokenName === 'opacity000' ? opacity000Token : creativeUseCase,
  }),
) as TableRow[];

const Opacity = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Opacity',
      description:
        'Opacity is used to create translucent interface elements. These can be combined into different visual effects using the Block component.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Opacity',
      hero: {
        illustration: 'theme/opacity/hero',
      },
      introduction:
        'Opacity is used to create translucent interface elements. These can be combined into different visual effects using the Block component.',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="Overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description="Opacity foundations consist of a scale of styles that can make interface elements appear more translucent. In some cases, a component will have an opacity applied
to a background."
          showSeparator
        />
        <ContentSection sectionName="Opacity">
          <ContentPrimary
            id="Opacity"
            toc="Opacity"
            headline="Opacity"
            description={
              <>
                Opacity is used in a UI to make interface elements more or less
                translucent that can be applied to a{' '}
                <Link href="/components/block">Block.</Link>
                <br />
              </>
            }
            showSeparator
          >
            <Table
              columns={['Opacity', 'Token', 'Value', 'Common usage']}
              rows={opacityRows}
            />
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="a11y">
          <ContentPrimary
            id="a11y"
            toc="Accessibility"
            headline="Accessibility considerations"
            description="When using opacity, ensure important UI elements like text and icons are legible without compromising the aesthetic."
            showSeparator
          />
        </ContentSection>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Opacity;

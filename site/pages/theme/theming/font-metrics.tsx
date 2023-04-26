import React from 'react';
import {AppStateProvider} from '../../../components/text-crop-calculator/app-state-context';
import TextCropCalculator from '../../../components/text-crop-calculator/text-crop-calculator';
import {LayoutProps} from '../../../components/layout';
import {ComponentPageCell} from '../../../components/layout-cells';
import {ContentSection} from '../../../components/content-structure';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';

const FontMetrics = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Font metrics',
      description: 'Use this page to calculate font metrics for your theme',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Creating and using themes',
      name: 'Font metrics',
      hero: {
        illustration: 'components/hero-component-defaults-illustration',
      },
      introduction: `Font metrics are specific dimensions of your fonts. Knowing them allows us to make the sizing and layout of text as predictable as every other element on the screen. We use the capsizecss library to achieve this.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="overview">
        <AppStateProvider>
          <TextCropCalculator />
        </AppStateProvider>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default FontMetrics;

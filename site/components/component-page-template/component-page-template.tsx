import React from 'react';
import {Cell, Grid, getSizingFromTheme, styled} from 'newskit';
import Layout from '../layout';
import {TableOfContents} from '../table-of-contents';
import {ComponentPageTemplateProps} from './types';
import {
  AccessibilitySection,
  AnatomySection,
  BehaviorsSection,
  ComplianceSection,
  ComponentAPISection,
  InteractiveDemoSection,
  IntroductionSection,
  OnwardJourneySection,
  OptionsSection,
  RelatedComponentsSection,
  SEOSection,
  StatesSection,
  UsageSection,
} from './sections';

const WrapperWithPadding = styled.div`
  padding-top: ${getSizingFromTheme('sizing060')};
  padding-bottom: ${getSizingFromTheme('sizing080')};
`;

export const ComponentPageTemplate: React.FC<ComponentPageTemplateProps> = ({
  layoutProps,
  pageIntroduction,
  meta,
  interactiveDemo,
  anatomy,
  options,
  states,
  behaviors,
  usage,
  accessibility,
  seo,
  componentAPI,
  compliance,
  related,
}: ComponentPageTemplateProps) => (
  <Layout {...layoutProps} newPage>
    <WrapperWithPadding>
      <Grid lgMargin="sizing000" xsRowGutter="sizing000">
        <IntroductionSection pageIntroduction={pageIntroduction} meta={meta} />
        {interactiveDemo && <InteractiveDemoSection {...interactiveDemo} />}
        {anatomy && <AnatomySection {...anatomy} />}
        {options && <OptionsSection {...options} />}
        {states && <StatesSection {...states} />}
        {behaviors && <BehaviorsSection {...behaviors} />}
        {usage && <UsageSection {...usage} />}
        {accessibility && <AccessibilitySection {...accessibility} />}
        {seo && <SEOSection {...seo} />}
        {componentAPI && <ComponentAPISection {...componentAPI} />}
        {compliance && <ComplianceSection {...compliance} />}
        {related && <RelatedComponentsSection {...related} />}
        <OnwardJourneySection />
        <Cell xsHidden smHidden mdHidden lgHidden xlOffset={10} xl={2}>
          <TableOfContents />
        </Cell>
      </Grid>
    </WrapperWithPadding>
  </Layout>
);

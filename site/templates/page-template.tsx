import React from 'react';
import {Cell, Grid, getSizingFromTheme, styled} from 'newskit';

import {TableOfContents} from '../components/table-of-contents';
import {IntroductionSection, OnwardJourneySection} from './template-sections';
import {TemplateProps} from './types';
import {HeadNextSeo} from '../components/head-next-seo';

const WrapperWithPadding = styled.div`
  /*
  padding-top: ${getSizingFromTheme('sizing090')};
  padding-bottom: ${getSizingFromTheme('sizing090')};
  */
`;

export const PageTemplate: React.FC<TemplateProps> = ({
  children,
  headTags,
  pageIntroduction,
  meta,
  featureCard,
}) => (
  <>
    <HeadNextSeo
      title={headTags.title}
      description={headTags.description}
      image={{
        url: headTags.imageUrl!,
        alt: headTags.alt,
      }}
    />
    <WrapperWithPadding>
      <Grid xsRowGutter="space000">
        <IntroductionSection pageIntroduction={pageIntroduction} meta={meta} />
        {children}
        {featureCard && <OnwardJourneySection {...featureCard} />}
        <Cell xsHidden smHidden mdHidden lgHidden xlOffset={10} xl={2}>
          <TableOfContents />
        </Cell>
      </Grid>
    </WrapperWithPadding>
  </>
);

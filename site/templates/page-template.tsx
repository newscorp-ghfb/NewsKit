import React from 'react';
import {Cell, Grid, getSpacingCssFromTheme, styled} from 'newskit';

import {TableOfContents} from '../components/table-of-contents';
import {IntroductionSection, OnwardJourneySection} from './template-sections';
import {TemplateProps} from './types';
import {HeadNextSeo} from '../components/head-next-seo';

const WrapperWithPadding = styled.div`
  ${getSpacingCssFromTheme('--main-el-container-block-spacing', {
    xs: 'space050',
    lg: 'space100',
  })};

  ${getSpacingCssFromTheme('--main-el-block-spacing', {
    xs: 'space060',
    lg: 'space030',
  })};

  --parent-spacing: calc(
    var(--main-el-block-spacing) + var(--main-el-container-block-spacing)
  );

  ${getSpacingCssFromTheme('--header-size', {
    xs: 'space080',
    lg: 'space100',
  })};

  ${getSpacingCssFromTheme('--page-content-padding', {
    xs: 'space080',
    md: 'space090',
    lg: 'space100',
  })};

  padding-top: calc(var(--page-content-padding) + var(--header-size));

  ${getSpacingCssFromTheme('padding-bottom', {
    xs: 'space080',
    md: 'space090',
    lg: 'space100',
  })};

  margin-top: calc(-1 * (var(--parent-spacing)));
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

import React from 'react';
import {Meta} from '../../meta';
import {PageIntroduction} from '../../page-introduction';
import {IntroductionSectionProps} from './types';
import {ComponentPageCell} from '../../layout-cells';

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  pageIntroduction,
  meta,
}) => (
  <>
    {/* TODO: add styled section and "Intro" to TOC */}
    <PageIntroduction {...pageIntroduction} />
    <ComponentPageCell>
      <Meta {...meta} />
    </ComponentPageCell>
  </>
);

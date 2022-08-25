import React from 'react';
import {SectionIntroductionProps} from '../../components/section-introduction';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';

export type SEOSectionProps = Omit<SectionIntroductionProps, 'children'> &
  IntroductionText;

export const SEOSection: React.FC<SEOSectionProps> = ({
  introduction,
  ...seo
}) => (
  <CommonSection
    title={seo.title}
    id="seo"
    toc="SEO"
    introduction={introduction}
    lastItem
  />
);

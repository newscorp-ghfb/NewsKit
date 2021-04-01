import {SectionIntroductionProps} from '../section-introduction';
import {AccessibilityTablesProps} from '../accessibility-tables';
import {ComponentAPIProps} from '../component-api';
import {MetaProps} from '../meta/types';
import {LayoutProps} from '../layout';
import {ComplianceProps} from '../compliance';
import {UsageProps} from '../usage';
import {PlaygroundProps} from '../playground/types';
import {AnatomyProps} from '../anatomy';
import {MediaListProps} from '../media-list';
import {PageIntroductionProps} from '../page-introduction';
import {FeatureCardProps} from '../feature-card';

export interface ComponentPageTemplateProps {
  layoutProps: LayoutProps;
  componentDefaultsKey: string;
  pageIntroduction: PageIntroductionProps;
  meta: MetaProps;
  interactiveDemo?: {
    introduction: string;
    playground: PlaygroundProps;
  };
  anatomy?: AnatomyProps & {introduction: string};
  options?: MediaListProps & {introduction: string};
  states?: MediaListProps & {introduction: string};
  behaviors?: MediaListProps & {introduction: string};
  usage?: UsageProps & {introduction: string};
  accessibility?: AccessibilityTablesProps & {introduction: string};
  componentAPI?: ComponentAPIProps & {introduction: string};
  seo?: SectionIntroductionProps & {introduction: string};
  compliance?: ComplianceProps;
  related?: MediaListProps & {introduction: string};
  featureCard?: FeatureCardProps;
}

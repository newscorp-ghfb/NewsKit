import {SectionIntroductionProps} from '../section-introduction';
import {AccessibilityTablesProps} from '../accessibility-tables';
import {MetaProps} from '../meta/types';
import {LayoutProps} from '../layout';
import {ComplianceProps} from '../compliance';
import {UsageProps} from '../usage';
import {PlaygroundProps} from '../playground/types';
import {AnatomyProps} from '../anatomy';
import {MediaListProps} from '../media-list';
import {PageIntroductionProps} from '../page-introduction';
import {FeatureCardProps} from '../feature-card';

export type PropTableProps = {
  name: string;
  type: string;
  description: string | JSX.Element;
  default?: string;
  required?: boolean;
};

export interface PropsProps {
  summary: React.ReactNode;
  columns: string[];
  rows: PropTableProps[];
}

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
  variations?: MediaListProps & {introduction: string};
  behaviors?: MediaListProps & {introduction: string};
  usage?: UsageProps & {introduction: string};
  accessibility?: AccessibilityTablesProps & {introduction: string};
  seo?: SectionIntroductionProps & {introduction: string};
  props?: PropsProps;
  overrides?: PropsProps;
  compliance?: ComplianceProps;
  related?: MediaListProps & {introduction: string};
  featureCard?: FeatureCardProps;
}

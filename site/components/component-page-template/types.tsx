import {AccessibilityTablesProps} from '../accessibility-tables/types';
import {MetaProps} from '../meta/types';
import {LayoutProps} from '../layout';
import {ComplianceProps} from '../compliance/types';
import {UsageProps} from '../usage';
import {PlaygroundProps} from '../playground/types';
import {AnatomyProps} from '../anatomy';
import {MediaListProps} from '../media-list';
import {PageIntroductionProps} from '../page-introduction';

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
  props: PropTableProps[];
}

export interface ComponentPageTemplateProps {
  layoutProps: LayoutProps;
  componentDefaultsKey: string;
  pageIntroduction: PageIntroductionProps;
  meta: MetaProps;
  compliance: ComplianceProps;
  usage: UsageProps & {introduction: string};
  props: PropsProps;
  overrides: PropsProps;
  interactiveDemo: {
    introduction: string;
    playground: PlaygroundProps;
  };
  anatomy: AnatomyProps & {introduction: string};
  variations: MediaListProps & {introduction: string};
  behaviours: MediaListProps & {introduction: string};
  related: MediaListProps & {introduction: string};
  accessibility?: AccessibilityTablesProps & {introduction: string};
}

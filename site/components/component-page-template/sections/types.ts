import {SectionIntroductionProps} from '../../section-introduction';
import {ComponentAPIProps} from '../../component-api';
import {MetaProps} from '../../meta/types';
import {ComplianceProps} from '../../compliance';
import {PlaygroundProps} from '../../playground/types';
import {AnatomyProps} from '../../anatomy';
import {MediaListProps} from '../../media-list';
import {PageIntroductionProps} from '../../page-introduction';
import {FeatureCardProps} from '../../feature-card';

type IntroductionText = {introduction: string};

export interface IntroductionSectionProps {
  pageIntroduction: PageIntroductionProps;
  meta: MetaProps;
}
export interface InteractiveDemoSectionProps {
  introduction: string;
  playground: PlaygroundProps;
}

export interface AccessibilityTablesProps {
  focusOrder?: {
    title: string;
    description: string;
    table: {
      columns: string[];
      rows: {
        order: string[];
        element: string | JSX.Element;
        role?: string;
      }[];
    };
  };
  aria?: {
    title: string;
    description: string;
    table: {
      columns: string[];
      rows: {
        category: string;
        attribute: string;
        value: string;
        description: string | JSX.Element;
      }[];
    };
  };
  interaction?: {
    title: string;
    description: string;
    table: {
      columns: string[];
      rows: {
        command: string[];
        description: string | JSX.Element;
      }[];
    };
  };
}

export type AnatomySectionProps = AnatomyProps & IntroductionText;
export type OptionsSectionProps = MediaListProps & IntroductionText;
export type StatesSectionProps = MediaListProps & IntroductionText;
export type BehaviorsSectionProps = MediaListProps & IntroductionText;
export type UsageSectionProps = MediaListProps & IntroductionText;
export type AccessibilitySectionProps = AccessibilityTablesProps &
  IntroductionText;
export type SEOSectionProps = Omit<SectionIntroductionProps, 'children'> &
  IntroductionText;
export type ComponentAPISectionProps = ComponentAPIProps & IntroductionText;
export type ComplianceSectionProps = ComplianceProps;
export type RelatedComponentsSectionProps = MediaListProps & IntroductionText;
export type OnwardJourneySectionProps = FeatureCardProps;

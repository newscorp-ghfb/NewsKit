import {LayoutProps} from '../../components/layout';
import {TemplateProps} from '../types';
import {
  InteractiveDemoSectionProps,
  AnatomySectionProps,
  TutorialSectionProps,
  OptionsSectionProps,
  StatesSectionProps,
  BehaviorsSectionProps,
  CodeExamplesSectionProps,
  UsageSectionProps,
  AccessibilitySectionProps,
  SEOSectionProps,
  ComponentAPISectionProps,
  ComplianceSectionProps,
  RelatedComponentsSectionProps,
  OnwardJourneySectionProps,
  CommonSectionProps,
} from '../template-sections';

export interface ComponentPageTemplateProps
  extends Omit<TemplateProps, 'featureCard'> {
  layoutProps: LayoutProps;
  componentDefaultsKey: string;
  interactiveDemo?: InteractiveDemoSectionProps;
  anatomy?: AnatomySectionProps;
  tutorial?: TutorialSectionProps;
  options?: OptionsSectionProps;
  states?: StatesSectionProps;
  behaviors?: BehaviorsSectionProps;
  codeExamples?: CodeExamplesSectionProps;
  usage?: UsageSectionProps;
  accessibility?: AccessibilitySectionProps;
  seo?: SEOSectionProps;
  componentAPI?: ComponentAPISectionProps;
  compliance?: ComplianceSectionProps;
  related?: RelatedComponentsSectionProps;
  featureCard?: Partial<OnwardJourneySectionProps>;
  children?: React.ReactNode;
  commonSection?: CommonSectionProps;
}

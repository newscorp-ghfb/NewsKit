import {LayoutProps} from '../../components/layout';
import {TemplateProps} from '../types';
import {
  InteractiveDemoSectionProps,
  AnatomySectionProps,
  LayoutExamplesSectionProps,
  OptionsSectionProps,
  StatesSectionProps,
  BehaviorsSectionProps,
  CodeExamplesSectionProps,
  UsageSectionProps,
  TutorialsSectionProps,
  AccessibilitySectionProps,
  SEOSectionProps,
  ComponentAPISectionProps,
  ComplianceSectionProps,
  RelatedComponentsSectionProps,
  OnwardJourneySectionProps,
  CommonSectionProps,
} from '../template-sections';
import {MetaProps} from '../../components/meta';
import {GenericComponent} from '../../components/playground/types';

export interface ComponentPageTemplateProps<T extends GenericComponent>
  extends Omit<TemplateProps, 'featureCard' | 'children' | 'meta'> {
  layoutProps: LayoutProps;
  componentDefaultsKey: string;
  interactiveDemo?: InteractiveDemoSectionProps<T>;
  anatomy?: AnatomySectionProps;
  layoutExamples?: LayoutExamplesSectionProps;
  options?: OptionsSectionProps;
  states?: StatesSectionProps;
  behaviors?: BehaviorsSectionProps;
  codeExamples?: CodeExamplesSectionProps;
  usage?: UsageSectionProps;
  tutorials?: TutorialsSectionProps;
  accessibility?: AccessibilitySectionProps;
  seo?: SEOSectionProps;
  componentAPI?: ComponentAPISectionProps;
  compliance?: ComplianceSectionProps;
  related?: RelatedComponentsSectionProps;
  featureCard?: Partial<OnwardJourneySectionProps>;
  children?: React.ReactNode;
  commonSection?: CommonSectionProps;
  meta: MetaProps;
}

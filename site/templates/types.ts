import {
  IntroductionSectionProps,
  OnwardJourneySectionProps,
} from './template-sections';

export interface TemplateProps extends IntroductionSectionProps {
  headTags: {
    title: string;
    description: string;
  };
  featureCard?: OnwardJourneySectionProps;
}

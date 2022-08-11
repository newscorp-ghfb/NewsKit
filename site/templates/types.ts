import {
  IntroductionSectionProps,
  OnwardJourneySectionProps,
} from './template-sections';

export interface TemplateProps extends IntroductionSectionProps {
  headTags: {
    title: string;
    description: string;
    imageUrl?: string;
    alt?: string;
    width?: string;
    height?: string;
  };
  featureCard?: OnwardJourneySectionProps;
  children?: React.ReactNode;
}

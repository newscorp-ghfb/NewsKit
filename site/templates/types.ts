import {
  IntroductionSectionProps,
  OnwardJourneySectionProps,
} from './template-sections';

export interface TemplateProps extends IntroductionSectionProps {
  children: React.ReactNode;
  headTags: {
    title: string;
    description: string;
    narrationUrl?: string;
    imageUrl?: string;
    alt?: string;
    width?: string;
    height?: string;
  };
  featureCard?: OnwardJourneySectionProps;
}

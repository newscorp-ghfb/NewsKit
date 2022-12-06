import {TemplateProps} from '../types';
import {LayoutProps} from '../../components/layout';
import {OnwardJourneySectionProps} from '../template-sections';

export interface AboutPageTemplateProps
  extends Omit<TemplateProps, 'featureCard'> {
  layoutProps: LayoutProps;
  featureCard?: Partial<OnwardJourneySectionProps>;
}

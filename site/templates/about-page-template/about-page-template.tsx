import React from 'react';

import Layout from '../../components/layout';
import {PageTemplate} from '../page-template';
import {OnwardJourneySectionProps} from '../template-sections';
import {AboutPageTemplateProps} from './types';

export const defaultFeatureCard: Partial<OnwardJourneySectionProps> = {
  title: 'Need Help?',
  description: 'Cant find what you are looking for?',
  buttonLabel: 'Get in touch',
  stylePrefix: 'needHelpCard',
  layout: 'horizontal',
  href: '/about/contact-us/',
};

export const AboutPageTemplate: React.FC<AboutPageTemplateProps> = ({
  children,
  featureCard,
  layoutProps,
  headTags,
  ...rest
}) => (
  <Layout {...layoutProps} newPage>
    <PageTemplate
      {...rest}
      headTags={{
        imageUrl: 'social/about.png',
        alt: 'About',
        title: headTags.title,
        description: headTags.description,
      }}
      featureCard={
        featureCard &&
        ({
          ...defaultFeatureCard,
          ...featureCard,
        } as OnwardJourneySectionProps)
      }
    >
      {children}
    </PageTemplate>
  </Layout>
);

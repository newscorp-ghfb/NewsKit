import React from 'react';

import Layout from '../../components/layout';
import {PageTemplate} from '../page-template';
import {OnwardJourneySectionProps} from '../template-sections';
import {ComponentPageTemplateProps} from './types';
import {GenericComponent} from '../../components/playground/types';

const defaultFeatureCard: OnwardJourneySectionProps = {
  title: 'Need Help?',
  description: 'Cant find what you are looking for?',
  buttonLabel: 'Get In Touch',
  stylePrefix: 'needHelpCard',
  layout: 'horizontal',
  href: '/about/contact-us/',
};

// Please only use ComponentPageBasicTemplate if there are bespoke/custom sections on your documentation page.
// ComponentPageTemplate is the standard template to be used if there are no custom sections.
export const ComponentPageBasicTemplate = <T extends GenericComponent>({
  children,
  layoutProps,
  featureCard,
  ...rest
}: ComponentPageTemplateProps<T>) => (
  <Layout {...layoutProps} newPage>
    <PageTemplate
      {...rest}
      featureCard={
        {
          ...defaultFeatureCard,
          ...featureCard,
        } as OnwardJourneySectionProps
      }
    >
      {children}
    </PageTemplate>
  </Layout>
);

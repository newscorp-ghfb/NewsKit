import React from 'react';
import {ThemeProvider} from 'newskit';

import Layout from '../../components/layout';
import {PageTemplate} from '../page-template';
import {guidesThemeLight, guidesThemeDark} from '../../theme/doc-theme';
import {OnwardJourneySectionProps} from '../template-sections';
import {GuidePageTemplateProps} from './types';

export const defaultFeatureCard: Partial<OnwardJourneySectionProps> = {
  buttonLabel: 'Get in touch',
  stylePrefix: 'foundationFeatureCard',
  layout: 'horizontal',
  href: 'components/overview',
};

export const GuidePageTemplate: React.FC<GuidePageTemplateProps> = ({
  children,
  layoutProps,
  featureCard,
  ...rest
}) => (
  <Layout {...layoutProps} newPage>
    {({themeMode}) => (
      <>
        <ThemeProvider
          theme={themeMode === 'light' ? guidesThemeLight : guidesThemeDark}
        >
          <PageTemplate
            {...rest}
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
        </ThemeProvider>
      </>
    )}
  </Layout>
);

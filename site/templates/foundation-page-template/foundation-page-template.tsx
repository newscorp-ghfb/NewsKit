import React from 'react';
import {ThemeProvider} from 'newskit';
import Layout from '../../components/layout';
import {PageTemplate} from '../page-template';
import {
  foundationsThemeLight,
  foundationsThemeDark,
} from '../../theme/doc-theme';
import {OnwardJourneySectionProps} from '../template-sections';
import {FoundationPageTemplateProps} from './types';
import {GetFeatureCard} from '../../utils/get-feature-card';

export const defaultFeatureCard: Partial<OnwardJourneySectionProps> = {
  buttonLabel: 'Read more',
  stylePrefix: 'foundationFeatureCard',
  layout: 'horizontal',
  href: 'components/overview',
};

export const FoundationPageTemplate: React.FC<FoundationPageTemplateProps> = ({
  children,
  layoutProps,
  ...rest
}) => {
  const featureCard = GetFeatureCard(layoutProps.path);
  return (
    <Layout {...layoutProps} newPage>
      {({themeMode}) => (
        <>
          <ThemeProvider
            theme={
              themeMode === 'light'
                ? foundationsThemeLight
                : foundationsThemeDark
            }
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
};

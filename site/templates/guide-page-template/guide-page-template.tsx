import React from 'react';
import {ThemeProvider} from 'newskit';
import Layout from '../../components/layout';
import {PageTemplate} from '../page-template';
import {guidesThemeLight, guidesThemeDark} from '../../theme/doc-theme';
import {OnwardJourneySectionProps} from '../template-sections';
import {GuidePageTemplateProps} from './types';

export const defaultFeatureCard: Partial<OnwardJourneySectionProps> = {
  buttonLabel: 'Get in touch',
  stylePrefix: 'needHelpCard',
  layout: 'horizontal',
  href: 'components/overview',
};

export const GuidePageTemplate: React.FC<GuidePageTemplateProps> = ({
  children,
  layoutProps,
  featureCard,
  headTags,
  ...rest
}) => (
  <Layout {...layoutProps} newPage>
    {({themeMode}) => (
      <>
        <ThemeProvider
          exposeCSSVariables
          theme={themeMode === 'light' ? guidesThemeLight : guidesThemeDark}
        >
          <PageTemplate
            {...rest}
            headTags={{
              imageUrl: 'social/guides.png',
              alt: 'Guides',
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
        </ThemeProvider>
      </>
    )}
  </Layout>
);

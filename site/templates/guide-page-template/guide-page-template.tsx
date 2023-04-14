import React from 'react';
import {ThemeProvider} from 'newskit';
import Layout from '../../components/layout';
import {PageTemplate} from '../page-template';
import {docsThemeLight, docsThemeDark} from '../../theme/doc-theme';
import {OnwardJourneySectionProps} from '../template-sections';
import {GuidePageTemplateProps} from './types';

export const defaultFeatureCard: Partial<OnwardJourneySectionProps> = {
  title: 'Need Help?',
  description: 'Can’t find what you’re looking for?',
  buttonLabel: 'Get in touch',
  stylePrefix: 'needHelpCard',
  layout: 'horizontal',
  href: '/about/contact-us/',
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
          exposeCssVariables
          theme={themeMode === 'light' ? docsThemeLight : docsThemeDark}
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
              {
                ...defaultFeatureCard,
                ...featureCard,
              } as OnwardJourneySectionProps
            }
          >
            {children}
          </PageTemplate>
        </ThemeProvider>
      </>
    )}
  </Layout>
);

import React from 'react';
import {ThemeProvider} from 'newskit';

import Layout from '../../components/layout';
import {PatternPageTemplateProps} from './types';
import {PageTemplate} from '../page-template';
import {patternsThemeDark, patternsThemeLight} from '../../theme/doc-theme';
import {OnwardJourneySectionProps} from '../template-sections';

const defaultFeatureCard: Partial<OnwardJourneySectionProps> = {
  buttonLabel: 'Read more',
  stylePrefix: 'patternFeatureCard',
  layout: 'horizontal',
  href: 'readMore',
};

export const PatternPageTemplate: React.FC<PatternPageTemplateProps> = ({
  children,
  layoutProps,
  featureCard,
  ...rest
}) => (
  <Layout {...layoutProps} newPage>
    {({themeMode}) => (
      <>
        <ThemeProvider
          theme={themeMode === 'light' ? patternsThemeLight : patternsThemeDark}
        >
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
        </ThemeProvider>
      </>
    )}
  </Layout>
);

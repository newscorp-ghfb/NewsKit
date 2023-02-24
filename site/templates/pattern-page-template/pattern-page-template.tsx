import React from 'react';
import {ThemeProvider} from 'newskit';
import Layout from '../../components/layout';
import {PatternPageTemplateProps} from './types';
import {PageTemplate} from '../page-template';
import {patternsThemeDark, patternsThemeLight} from '../../theme/doc-theme';
import {OnwardJourneySectionProps} from '../template-sections';
import {useGetFeatureCard} from '../../utils/get-feature-card';

const defaultFeatureCard: Partial<OnwardJourneySectionProps> = {
  buttonLabel: 'Read more',
  stylePrefix: 'patternFeatureCard',
  layout: 'horizontal',
  href: 'patterns/overview',
};

export const PatternPageTemplate: React.FC<PatternPageTemplateProps> = ({
  children,
  layoutProps,
  headTags,
  ...rest
}) => {
  const featureCard = useGetFeatureCard();
  return (
    <Layout {...layoutProps} newPage>
      {({themeMode}) => (
        <>
          <ThemeProvider
            exposeCssVariables
            theme={
              themeMode === 'light' ? patternsThemeLight : patternsThemeDark
            }
          >
            <PageTemplate
              {...rest}
              headTags={{
                imageUrl: 'social/pattern.png',
                alt: 'Pattern',
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
};

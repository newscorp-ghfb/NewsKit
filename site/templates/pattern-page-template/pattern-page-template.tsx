import React from 'react';
import Layout from '../../components/layout';
import {PatternPageTemplateProps} from './types';
import {PageTemplate} from '../page-template';
import {patternsThemeDark, patternsThemeLight} from '../../theme/doc-theme';
import {OnwardJourneySectionProps} from '../template-sections';
import {useGetFeatureCard} from '../../utils/get-feature-card';
import {ThemeProviderSite} from '../../components/theme-provider-site';

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
          <ThemeProviderSite
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
          </ThemeProviderSite>
        </>
      )}
    </Layout>
  );
};

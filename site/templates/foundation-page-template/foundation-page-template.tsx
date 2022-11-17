import React from 'react';
import Layout from '../../components/layout';
import {PageTemplate} from '../page-template';
import {
  foundationsThemeLight,
  foundationsThemeDark,
} from '../../theme/doc-theme';
import {OnwardJourneySectionProps} from '../template-sections';
import {FoundationPageTemplateProps} from './types';
import {useGetFeatureCard} from '../../utils/get-feature-card';
import {ThemeProviderSite} from '../../components/theme-provider-site';

export const defaultFeatureCard: Partial<OnwardJourneySectionProps> = {
  buttonLabel: 'Read more',
  stylePrefix: 'foundationFeatureCard',
  layout: 'horizontal',
  href: 'components/overview',
};

export const FoundationPageTemplate: React.FC<FoundationPageTemplateProps> = ({
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
              themeMode === 'light'
                ? foundationsThemeLight
                : foundationsThemeDark
            }
          >
            <PageTemplate
              {...rest}
              headTags={{
                imageUrl: 'social/theme.png',
                alt: 'Themes',
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

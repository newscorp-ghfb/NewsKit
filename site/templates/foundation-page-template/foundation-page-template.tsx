import React from 'react';
import {ThemeProvider} from 'newskit';
import {useRouter} from 'next/router';
import routes from '../../routes';
import Layout from '../../components/layout';
import {PageTemplate} from '../page-template';
import {
  foundationsThemeLight,
  foundationsThemeDark,
} from '../../theme/doc-theme';
import {OnwardJourneySectionProps} from '../template-sections';
import {FoundationPageTemplateProps} from './types';

export const defaultFeatureCard: Partial<OnwardJourneySectionProps> = {
  buttonLabel: 'Read more',
  stylePrefix: 'foundationFeatureCard',
  layout: 'horizontal',
  href: 'components/overview',
};

interface SubRoute {
  title: string;
  id: string;
  description?: string;
  illustration?: string;
  page?: boolean;
}

type SubNav = SubRoute & {
  subNav?: SubRoute[];
};

interface Route {
  title: string;
  id: string;
  subNav?: SubNav[];
}

export const FoundationPageTemplate: React.FC<FoundationPageTemplateProps> = ({
  children,
  layoutProps,
  ...rest
}) => {
  const path = useRouter().pathname;
  const currentRoute = path.match(/\/[A-z\d-]*/g);
  const routesData: Route[] = routes;
  let initialRoute: Route | null | undefined;

  const findIndex = (
    route: Route[] | null | undefined,
    elementIndex: number,
  ): {
    currentIndex: number | null | undefined;
    matchedRoute: Route | null | undefined;
  } => {
    const matchedRoute =
      currentRoute &&
      route &&
      route.find(e => e.id.includes(currentRoute[elementIndex]));
    const currentSubNav = matchedRoute && matchedRoute.subNav;
    if (!initialRoute) {
      initialRoute = currentSubNav && currentSubNav[1];
    }
    const currentIndex =
      currentSubNav && currentSubNav.findIndex(e => e.id === path);
    if (currentIndex === -1) {
      return findIndex(currentSubNav, elementIndex + 1);
    }
    return {currentIndex, matchedRoute};
  };

  const findFeature = (route: Route[], index: number) => {
    const {currentIndex, matchedRoute} = findIndex(route, index);
    let feature =
      currentIndex !== -1 &&
      matchedRoute &&
      matchedRoute.subNav &&
      matchedRoute.subNav[currentIndex ? currentIndex + 1 : 1];
    if (feature && feature.subNav) {
      feature = feature && feature.subNav[0];
    }
    return feature;
  };

  const feature = findFeature(routesData, 0) || initialRoute;

  const featureCard = {
    ...feature,
    href: feature && feature.id,
  };

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

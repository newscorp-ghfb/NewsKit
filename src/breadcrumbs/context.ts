import {createContext, useContext} from 'react';
import {BreadcrumbsProps} from './types';

export const BreadcrumbsContext = createContext<
  Pick<BreadcrumbsProps, 'size' | 'showTrailingSeparator' | 'overrides'>
>({});

export const BreadcrumbsContextProvider = BreadcrumbsContext.Provider;

export const useBreadCrumbsContext = () => {
  const context = useContext(BreadcrumbsContext);
  if (
    process.env.NODE_ENV !== 'production' &&
    Object.keys(context).length === 0
  ) {
    // eslint-disable-next-line no-console
    console.error(
      'You are using a component which needs to be a child of <Breadcrumbs />',
    );
  }

  return context;
};

import {createContext, useContext} from 'react';
import {PaginationProviderContext} from './types';

export const PaginationContext = createContext<
  Partial<PaginationProviderContext>
>({});

export const PaginationProvider = PaginationContext.Provider;

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);

  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' &&
    Object.keys(context).length === 0
  ) {
    // eslint-disable-next-line no-console
    console.error(
      'You are using a component which needs to be a child of <Pagination />',
      context,
    );
  }

  return context;
};

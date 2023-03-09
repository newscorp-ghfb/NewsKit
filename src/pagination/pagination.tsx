import React, {useCallback, useEffect, useMemo} from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledNav, StyledUnorderedList} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {PaginationProps} from './types';
import {PaginationProvider} from './context';
import {PaginationNextItemProps} from './components/next-item';
import {IconButtonProps} from '../icon-button/types';
import {PaginationFirstItemProps} from './components/first-item';
import {PaginationLastItemProps} from './components/last-item';
import {PaginationPrevItemProps} from './components/prev-item';
import {composeEventHandlers} from '../utils/compose-event-handlers';
import {useControlled} from '../utils';

const ThemelessPagination = React.forwardRef<HTMLOListElement, PaginationProps>(
  (
    {
      children,
      size = 'medium',
      pageSize,
      page: pageProp, // undefined if uncontrolled externally
      defaultPage = 1,
      totalItems,
      buildHref,
      onPageChange,
      ...rest
    },
    ref,
  ) => {
    // Only warn once (on component mount)
    useEffect(() => {
      if (
        process.env.NODE_ENV !== 'production' &&
        Boolean(buildHref) === Boolean(onPageChange)
      ) {
        console.warn(
          'Pagination must have either buildHref OR onPageChange set.',
        );
      }
    }, []);

    /* istanbul ignore next */
    const [page = 1, setPage] = useControlled({
      defaultValue: defaultPage,
      controlledValue: pageProp,
    });
    const lastPage = Math.ceil(totalItems / pageSize);

    const changePage = useCallback(
      (pageNumber: number) => {
        setPage(pageNumber);
        if (onPageChange) {
          onPageChange(pageNumber);
        }
      },
      [setPage, onPageChange],
    );

    const getFirstItemProps = useCallback(
      ({...getterProps}: PaginationFirstItemProps): IconButtonProps =>
        ({
          disabled: page < 2,
          ...getterProps,
          onClick: composeEventHandlers([
            () => changePage(1),
            /* istanbul ignore next */
            getterProps?.onClick,
          ]),
        } as IconButtonProps),
      [page, changePage],
    );

    const getPrevItemProps = useCallback(
      ({...getterProps}: PaginationPrevItemProps): IconButtonProps =>
        ({
          disabled: page < 2,
          ...getterProps,
          onClick: composeEventHandlers([
            () => changePage(page - 1),
            /* istanbul ignore next */
            getterProps?.onClick,
          ]),
        } as IconButtonProps),
      [page, changePage],
    );

    const getNextItemProps = useCallback(
      ({...getterProps}: PaginationNextItemProps): IconButtonProps =>
        ({
          disabled: page >= lastPage,
          ...getterProps,
          onClick: composeEventHandlers([
            () => changePage(page + 1),
            /* istanbul ignore next */
            getterProps?.onClick,
          ]),
        } as IconButtonProps),
      [page, changePage, lastPage],
    );

    const getLastItemProps = useCallback(
      ({...getterProps}: PaginationLastItemProps): IconButtonProps =>
        ({
          disabled: page >= lastPage,
          ...getterProps,
          onClick: composeEventHandlers([
            () => changePage(lastPage),
            /* istanbul ignore next */
            getterProps?.onClick,
          ]),
        } as IconButtonProps),
      [page, changePage, lastPage],
    );

    const value = useMemo(
      () => ({
        size,
        pageSize,
        totalItems,
        defaultPage,
        page,
        lastPage,
        changePage,
        buildHref,
        getFirstItemProps,
        getPrevItemProps,
        getNextItemProps,
        getLastItemProps,
      }),
      [
        size,
        pageSize,
        totalItems,
        defaultPage,
        page,
        lastPage,
        changePage,
        buildHref,
        getFirstItemProps,
        getPrevItemProps,
        getNextItemProps,
        getLastItemProps,
      ],
    );

    return (
      <PaginationProvider value={value}>
        <StyledNav
          path="pagination"
          size={size}
          aria-label="pagination"
          data-testid="pagination-container"
          ref={ref}
          {...rest}
        >
          <StyledUnorderedList>{children}</StyledUnorderedList>
        </StyledNav>
      </PaginationProvider>
    );
  },
);

export const Pagination = withOwnTheme(ThemelessPagination)({
  defaults,
  stylePresets,
});

import React, {useCallback, useMemo, useState} from 'react';
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

const ThemelessPagination = React.forwardRef<HTMLOListElement, PaginationProps>(
  (
    {
      children,
      size = 'medium',
      pageSize = 10,
      currentPage = 1,
      totalItems = 0,
      buildHref,
      onPageChange,
      ...rest
    },
    ref,
  ) => {
    const [changedPage, setChangedPage] = useState(currentPage);
    const lastPage = Math.ceil(totalItems / pageSize);

    const changePage = useCallback(
      (page: number) => {
        setChangedPage(page);
        if (onPageChange) {
          onPageChange(page);
        }
      },
      [currentPage, changedPage],
    );

    const getFirstItemProps = useCallback(
      ({...getterProps}: PaginationFirstItemProps): IconButtonProps =>
        ({
          disabled: changedPage < 2,
          ...getterProps,
          onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            changePage(1);
            if (getterProps.onClick) {
              getterProps.onClick!(event);
            }
          },
        } as IconButtonProps),
      [currentPage, changedPage],
    );

    const getPrevItemProps = useCallback(
      ({...getterProps}: PaginationPrevItemProps): IconButtonProps =>
        ({
          disabled: changedPage < 2,
          ...getterProps,
          onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            changePage(changedPage - 1);
            if (getterProps.onClick) {
              getterProps.onClick!(event);
            }
          },
        } as IconButtonProps),
      [currentPage, changedPage],
    );

    const getNextItemProps = useCallback(
      ({...getterProps}: PaginationNextItemProps): IconButtonProps =>
        ({
          disabled: changedPage >= lastPage,
          ...getterProps,
          onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            changePage(changedPage + 1);
            if (getterProps.onClick) {
              getterProps.onClick!(event);
            }
          },
        } as IconButtonProps),
      [currentPage, changedPage],
    );

    const getLastItemProps = useCallback(
      ({...getterProps}: PaginationLastItemProps): IconButtonProps =>
        ({
          disabled: changedPage >= lastPage,
          ...getterProps,
          onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            changePage(lastPage);
            if (getterProps.onClick) {
              getterProps.onClick!(event);
            }
          },
        } as IconButtonProps),
      [currentPage, changedPage],
    );

    const value = useMemo(
      () => ({
        size,
        pageSize,
        totalItems,
        currentPage,
        changedPage,
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
        currentPage,
        changedPage,
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
          role="navigation"
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

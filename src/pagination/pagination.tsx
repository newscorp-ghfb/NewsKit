import React, {useCallback, useMemo, useState} from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledNav, StyledUnorderedList} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {PaginationProps} from './types';
import {useTheme} from '../theme';
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
      overrides,
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
    //const theme = useTheme();
    const [changedPage, setChangedPage] = useState(currentPage);
    const lastPage = Math.ceil(totalItems / pageSize);

    const changePage = useCallback(
      (page: number) => {
        // console.log('changePage', page);
        setChangedPage(page);
        onPageChange! && onPageChange(page);
      },
      [currentPage, changedPage],
    );

    const getFirstItemProps = useCallback(
      ({...getterProps}: PaginationFirstItemProps): IconButtonProps =>
        ({
          // 'aria-label': 'first',
          // disabled: typeof getterProps.onClick !== 'function',
          disabled: changedPage < 2,
          ...getterProps,
          onClick: (event: React.MouseEvent<any>) => {
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
          // 'aria-label': 'prev',
          // disabled: typeof getterProps.onClick !== 'function',
          disabled: changedPage < 2,
          ...getterProps,
          onClick: (event: React.MouseEvent<any>) => {
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
          // 'aria-label': 'next',
          // disabled: typeof getterProps.onClick !== 'function',
          disabled: changedPage >= lastPage,
          ...getterProps,
          onClick: (event: React.MouseEvent<any>) => {
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
          // 'aria-label': 'last',
          // disabled: typeof getterProps.onClick !== 'function',
          disabled: changedPage >= lastPage,
          ...getterProps,
          onClick: (event: React.MouseEvent<any>) => {
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
          overrides={overrides}
          {...rest}
        >
          <StyledUnorderedList size={size}>{children}</StyledUnorderedList>
        </StyledNav>
      </PaginationProvider>
    );
  },
);

export const Pagination = withOwnTheme(ThemelessPagination)({
  defaults,
  stylePresets,
});

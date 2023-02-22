import React from 'react';
import {useTheme} from '@emotion/react';
import {IconFilledFirstPage} from '../../../icons';
import {usePaginationContext} from '../../context';
import {StyledListItem} from '../../styled';
import {PaginationItem} from '../item/pagination-item';
import {PaginationFirstItemProps} from './types';

// const defaultKeyboardShortcuts = ['shift + f'];

export const PaginationFirstItem = React.forwardRef<
  HTMLButtonElement,
  PaginationFirstItemProps
>(({children, ...props}, ref) => {
  //const theme = useTheme();
  const {getFirstItemProps, size, buildHref} = usePaginationContext();

  //const overrides = useButtonOverrides(props, 'paginationItemFirst');

  // Includes overrides? FIXME
  const propsFromContext = getFirstItemProps! && getFirstItemProps(props);

  const page = 1;
  const href = buildHref! && buildHref(page);
  return (
    <StyledListItem key="first">
      <PaginationItem
        {...propsFromContext}
        ref={ref}
        href={href}
        size={size}
        data-testid="pagination-first-item"
        itemType="paginationItemFirst"
      >
        {children || <IconFilledFirstPage />}
      </PaginationItem>
    </StyledListItem>
  );
});

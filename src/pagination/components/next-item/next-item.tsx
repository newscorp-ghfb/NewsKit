import React from 'react';
import {useTheme} from '@emotion/react';
import {IconFilledChevronRight, NewsKitIconProps} from '../../../icons';
import {usePaginationContext} from '../../context';
import {StyledListItem} from '../../styled';
import {PaginationItem} from '../item/pagination-item';
import {PaginationNextItemProps} from './types';
import { filterOutFalsyProperties } from '../../../utils/filter-object';
import { getComponentOverrides, Override } from '../../../utils/overrides';

// const defaultKeyboardShortcuts = ['shift + n'];

export const PaginationNextItem = React.forwardRef<
  HTMLButtonElement,
  PaginationNextItemProps
>(({children, overrides, ...props}, ref) => {
  const theme = useTheme();
  const {getNextItemProps, size = 'medium', buildHref, changedPage = 1, lastPage = 1} = usePaginationContext();

  const [PaginationIcon, paginationIconProps] = getComponentOverrides(
    overrides?.navigationIcon as Override<NewsKitIconProps>,
    IconFilledChevronRight,
    {
      overrides: {
        ...theme.componentDefaults.paginationItemPrev[size]?.navigationIcon,
        ...filterOutFalsyProperties(overrides?.navigationIcon),
      },
    },
  );

  const propsFromContext = getNextItemProps! && getNextItemProps(props);

  const page = Math.min(changedPage + 1, lastPage);
  const href = buildHref! && buildHref(page);
  return (
    <StyledListItem key="next">
      <PaginationItem
        overrides={overrides}
        {...propsFromContext}
        ref={ref}
        href={href}
        size={size}
        data-testid="pagination-next-item"
        itemType="paginationItemNext"
      >
        {children}<PaginationIcon />
      </PaginationItem>
    </StyledListItem>
  );
});

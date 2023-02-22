import React from 'react';
import {useTheme} from '@emotion/react';
import {IconFilledChevronLeft, NewsKitIconProps} from '../../../icons';
import {usePaginationContext} from '../../context';
import {StyledListItem} from '../../styled';
import {PaginationItem} from '../item/pagination-item';
import {PaginationPrevItemProps} from './types';
import { filterOutFalsyProperties } from '../../../utils/filter-object';
import { getComponentOverrides, Override } from '../../../utils/overrides';

// const defaultKeyboardShortcuts = ['shift + p'];

export const PaginationPrevItem = React.forwardRef<
  HTMLButtonElement,
  PaginationPrevItemProps
>(({children, overrides, ...props}, ref) => {
  const theme = useTheme();
  const {getPrevItemProps, size = 'medium', buildHref, changedPage = 1} = usePaginationContext();

  console.log('theme.componentDefaults', theme.componentDefaults);
  const [PaginationIcon, paginationIconProps] = getComponentOverrides(
    overrides?.navigationIcon as Override<NewsKitIconProps>,
    IconFilledChevronLeft,
    {
      overrides: {
        ...theme.componentDefaults.paginationItemPrev[size]?.navigationIcon,
        ...filterOutFalsyProperties(overrides?.navigationIcon),
      },
    },
  );

  const propsFromContext = getPrevItemProps! && getPrevItemProps(props);
  console.log('PaginationPrevItem props', props);
  console.log('PaginationPrevItem propsFromContext', propsFromContext);

  const page = Math.max(changedPage - 1, 1);
  const href = buildHref! && buildHref(page);
  return (
    <StyledListItem key="prev">
      <PaginationItem
        {...propsFromContext}
        ref={ref}
        href={href}
        size={size}
        data-testid="pagination-prev-item"
        itemType="paginationItemPrev"
      >
        <PaginationIcon />{children}
      </PaginationItem>
    </StyledListItem>
  );
});

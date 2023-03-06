import React from 'react';
import {useTheme} from '@emotion/react';
import {IconFilledChevronRight, NewsKitIconProps} from '../../../icons';
import {usePaginationContext} from '../../context';
import {StyledListItem} from '../../styled';
import {PaginationItem} from '../item/pagination-item';
import {PaginationNextItemProps} from './types';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {getComponentOverrides, Override} from '../../../utils/overrides';
import {PaginationItemType} from '../../types';

const itemType = 'paginationItemNext' as PaginationItemType;

const DefaultIcon = (props: NewsKitIconProps) => (
  <IconFilledChevronRight {...props} />
);

export const PaginationNextItem = React.forwardRef<
  HTMLButtonElement,
  PaginationNextItemProps
>(({children, overrides, eventContext, ...props}, ref) => {
  const theme = useTheme();
  const {
    getNextItemProps,
    size = 'medium',
    buildHref,
    page = 1,
    lastPage = 1,
  } = usePaginationContext();

  const [PaginationIcon] = getComponentOverrides(
    overrides?.icon as Override<NewsKitIconProps>,
    DefaultIcon,
    {
      overrides: {
        ...theme.componentDefaults.paginationItemNext[size],
        ...filterOutFalsyProperties(overrides),
      },
    },
  );

  const propsFromContext = getNextItemProps! && getNextItemProps(props);

  const nextPage = Math.min(page + 1, lastPage);
  const href = buildHref! && buildHref(nextPage);
  return (
    <StyledListItem key="next">
      <PaginationItem
        // @ts-ignore
        itemType={itemType}
        data-testid="pagination-next-item"
        eventOriginator="pagination-next-item"
        eventContext={eventContext}
        {...propsFromContext}
        overrides={overrides}
        ref={ref}
        href={href}
        size={size}
      >
        {children}
        <PaginationIcon />
      </PaginationItem>
    </StyledListItem>
  );
});

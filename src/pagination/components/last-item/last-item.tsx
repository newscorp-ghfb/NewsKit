import React from 'react';
import {useTheme} from '@emotion/react';
import {IconFilledLastPage, NewsKitIconProps} from '../../../icons';
import {usePaginationContext} from '../../context';
import {StyledListItem} from '../../styled';
import {PaginationItem} from '../item/pagination-item';
import {PaginationLastItemProps} from './types';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {getComponentOverrides, Override} from '../../../utils/overrides';
import {PaginationItemType} from '../../types';

const itemType = PaginationItemType.paginationItemLast as const;

const DefaultIcon = (props: NewsKitIconProps) => (
  <IconFilledLastPage {...props} />
);

export const PaginationLastItem = React.forwardRef<
  HTMLButtonElement,
  PaginationLastItemProps
>(({children, overrides, eventContext, ...props}, ref) => {
  const theme = useTheme();
  const {
    getLastItemProps,
    size = 'medium',
    buildHref,
    lastPage = 1,
  } = usePaginationContext();

  const [PaginationIcon] = getComponentOverrides(
    overrides as Override<NewsKitIconProps>,
    DefaultIcon,
    {
      overrides: {
        ...theme.componentDefaults.paginationItemLast[size],
        ...filterOutFalsyProperties(overrides),
      },
    },
  );

  const propsFromContext = getLastItemProps! && getLastItemProps(props);

  const page = lastPage;
  const href = buildHref! && buildHref(page);
  return (
    <StyledListItem key="last">
      <PaginationItem
        // @ts-ignore
        itemType={itemType}
        data-testid="pagination-last-item"
        eventOriginator="pagination-last-item"
        eventContext={eventContext}
        {...propsFromContext}
        overrides={overrides}
        ref={ref}
        href={href}
        size={size}
      >
        <PaginationIcon />
        {children}
      </PaginationItem>
    </StyledListItem>
  );
});

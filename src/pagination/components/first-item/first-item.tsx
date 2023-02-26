import React from 'react';
import {useTheme} from '@emotion/react';
import {IconFilledFirstPage, NewsKitIconProps} from '../../../icons';
import {usePaginationContext} from '../../context';
import {StyledListItem} from '../../styled';
import {PaginationItem} from '../item/pagination-item';
import {PaginationFirstItemProps} from './types';
import {PaginationItemType} from '../../types';
import {getComponentOverrides, Override} from '../../../utils/overrides';
import {filterOutFalsyProperties} from '../../../utils/filter-object';

const itemType = PaginationItemType.paginationItemFirst as const;

const DefaultIcon = (props: NewsKitIconProps) => (
  <IconFilledFirstPage {...props} />
);

export const PaginationFirstItem = React.forwardRef<
  HTMLButtonElement,
  PaginationFirstItemProps
>(({children, overrides, eventContext, ...props}, ref) => {
  const theme = useTheme();
  const {
    getFirstItemProps,
    size = 'medium',
    buildHref,
  } = usePaginationContext();

  const [PaginationIcon] = getComponentOverrides(
    overrides as Override<NewsKitIconProps>,
    DefaultIcon,
    {
      overrides: {
        ...theme.componentDefaults.paginationItemPrev[size],
        ...filterOutFalsyProperties(overrides),
      },
    },
  );

  const propsFromContext = getFirstItemProps! && getFirstItemProps(props);

  const page = 1;
  const href = buildHref! && buildHref(page);
  return (
    <StyledListItem key="first">
      <PaginationItem
        // @ts-ignore
        itemType={itemType}
        data-testid="pagination-first-item"
        eventOriginator="pagination-first-item"
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

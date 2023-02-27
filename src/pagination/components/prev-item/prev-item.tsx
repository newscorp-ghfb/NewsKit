import React from 'react';
import {useTheme} from '@emotion/react';
import {IconFilledChevronLeft, NewsKitIconProps} from '../../../icons';
import {usePaginationContext} from '../../context';
import {StyledListItem} from '../../styled';
import {PaginationItem} from '../item/pagination-item';
import {PaginationPrevItemProps} from './types';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {getComponentOverrides, Override} from '../../../utils/overrides';
import {PaginationItemType} from '../../types';

const itemType = PaginationItemType.paginationItemPrev as const;

const DefaultIcon = (props: NewsKitIconProps) => (
  <IconFilledChevronLeft {...props} />
);

export const PaginationPrevItem = React.forwardRef<
  HTMLButtonElement,
  PaginationPrevItemProps
>(({children, overrides, eventContext, ...props}, ref) => {
  const theme = useTheme();
  const {
    getPrevItemProps,
    size = 'medium',
    buildHref,
    changedPage = 1,
  } = usePaginationContext();

  const [PaginationIcon] = getComponentOverrides(
    overrides?.icon as Override<NewsKitIconProps>,
    DefaultIcon,
    {
      overrides: {
        ...theme.componentDefaults.paginationItemPrev[size],
        ...filterOutFalsyProperties(overrides),
      },
    },
  );

  const propsFromContext = getPrevItemProps! && getPrevItemProps(props);

  const page = Math.max(changedPage - 1, 1);
  const href = buildHref! && buildHref(page);
  return (
    <StyledListItem key="prev">
      <PaginationItem
        // @ts-ignore
        itemType={itemType}
        data-testid="pagination-prev-item"
        eventOriginator="pagination-prev-item"
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

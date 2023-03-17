import React from 'react';
import {useTheme} from '../../../theme';
import {IconFilledFirstPage, NewsKitIconProps} from '../../../icons';
import {usePaginationContext} from '../../context';
import {PaginationListItem} from '../list-item';
import {PaginationItem} from '../item/pagination-item';
import {PaginationFirstItemProps} from './types';
import {PaginationItemType} from '../../types';
import {getComponentOverrides, Override} from '../../../utils/overrides';
import {filterOutFalsyProperties} from '../../../utils/filter-object';

const itemType = 'paginationItemFirst' as PaginationItemType;

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
    /* istanbul ignore next */
    size = 'medium',
    buildHref,
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

  const propsFromContext = getFirstItemProps! && getFirstItemProps(props);

  const href = buildHref! && buildHref(1);
  return (
    <PaginationListItem key="first">
      <PaginationItem
        // @ts-ignore
        itemType={itemType}
        data-testid="pagination-first-item"
        eventOriginator="pagination-first-item"
        eventContext={eventContext}
        pageNumber={1}
        {...propsFromContext}
        overrides={overrides}
        ref={ref}
        href={href}
        size={size}
      >
        <PaginationIcon />
        {children}
      </PaginationItem>
    </PaginationListItem>
  );
});

import React from 'react';
import {useTheme} from '../../../theme';
import {IconFilledLastPage, NewsKitIconProps} from '../../../icons';
import {usePaginationContext} from '../../context';
import {PaginationListItem} from '../list-item';
import {PaginationItem} from '../item/pagination-item';
import {PaginationLastItemProps} from './types';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {getComponentOverrides, Override} from '../../../utils/overrides';
import {PaginationItemType} from '../../types';

const itemType = 'paginationItemLast' as PaginationItemType;

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
    /* istanbul ignore next */
    size = 'medium',
    buildHref,
    /* istanbul ignore next */
    lastPage = 1,
  } = usePaginationContext();

  const [PaginationIcon] = getComponentOverrides(
    overrides?.icon as Override<NewsKitIconProps>,
    DefaultIcon,
    {
      overrides: {
        ...theme.componentDefaults.paginationItemLast[size],
        ...filterOutFalsyProperties(overrides),
      },
    },
  );

  const propsFromContext = getLastItemProps! && getLastItemProps(props);

  const href = buildHref! && buildHref(lastPage);
  return (
    <PaginationListItem key="last">
      <PaginationItem
        // @ts-ignore
        itemType={itemType}
        data-testid="pagination-last-item"
        eventOriginator="pagination-last-item"
        eventContext={eventContext}
        pageNumber={lastPage}
        {...propsFromContext}
        overrides={overrides}
        ref={ref}
        href={href}
        size={size}
      >
        {children}
        <PaginationIcon />
      </PaginationItem>
    </PaginationListItem>
  );
});

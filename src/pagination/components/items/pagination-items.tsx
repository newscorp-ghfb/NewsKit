import React from 'react';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {
  PaginationItemProps,
  PaginationItemsProps,
  PaginationItemType,
  PaginationLayoutItem,
} from '../../types';
import {useTheme} from '../../../theme';
import {IconFilledMoreHoriz, NewsKitIconProps} from '../../../icons';
import {getComponentOverrides, Override} from '../../../utils/overrides';
import {StyledListItem} from '../../styled';
import {PaginationItem} from '../item/pagination-item';
import {usePaginationContext} from '../../context';
import {getItemsLayout} from '../../utils';

const paginationItemTruncation = PaginationItemType.paginationItemTruncation as const;

const DefaultIcon = (props: NewsKitIconProps) => (
  <IconFilledMoreHoriz {...props} />
);

/* This has deliberately been designed as a stateless component that gets all the props passed in
   for ease of overriding. This component is not meant to be used by a developer, just by
   PaginationItems, as that has access to all the state that needs passing in */
export const PaginationItems = ({
  children,
  overrides,
  truncation = true,
  siblings = 3,
  boundaries = 1,
  eventContext,
}: PaginationItemsProps) => {
  const theme = useTheme();
  const {
    size = 'medium',
    buildHref,
    changePage = () => {},
    changedPage,
    lastPage,
    pageSize,
    totalItems,
  } = usePaginationContext();

  const [PaginationIcon, paginationIconProps] = getComponentOverrides(
    overrides?.icon as Override<NewsKitIconProps>,
    DefaultIcon,
    {
      overrides: {
        ...theme.componentDefaults.paginationItemTruncation[size],
        ...filterOutFalsyProperties(overrides?.icon),
      },
    },
  );

  const paginationElements = [] as React.ReactElement<PaginationItemProps>[];
  if (changedPage && lastPage) {
    const layout: [PaginationLayoutItem?] = getItemsLayout({
      currentPage: changedPage,
      lastPage,
      truncation,
      siblings,
      boundaries,
    });

    // These are passed through to the PaginationItem in case overrides.itemButton is set,
    // as custom components will need the full context
    const staticProps = {
      lastPage,
      pageSize,
      totalItems,
      buildHref,
      changePage,
    };

    let truncationCount = 0;
    layout.forEach((element: PaginationLayoutItem = 0) => {
      switch (element) {
        case '-':
          truncationCount += 1;
          paginationElements.push(
            <StyledListItem key={`trunc${truncationCount}`} aria-hidden="true">
              <PaginationItem
                href=""
                itemType={paginationItemTruncation}
                datatest-id={`pagination-item-truncation${truncationCount}`}
                size={size}
                disabled
                overrides={overrides}
                {...staticProps}
              >
                <PaginationIcon
                  {...(paginationIconProps as NewsKitIconProps)}
                />
              </PaginationItem>
            </StyledListItem>,
          );
          break;
        default:
          {
            const page: number = element;
            const href = buildHref! && buildHref(page);
            paginationElements.push(
              <StyledListItem key={`page${page}`}>
                <PaginationItem
                  href={href}
                  onClick={() => changePage(page)}
                  selected={page === changedPage}
                  eventContext={eventContext}
                  size={size}
                  overrides={overrides}
                  pageNumber={page}
                  {...staticProps}
                >
                  {children || page}
                </PaginationItem>
              </StyledListItem>,
            );
          }
          break;
      }
    });
  }

  return <>{paginationElements}</>;
};

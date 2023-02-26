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

export const PaginationItems = ({
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

    let truncationCount = 0;
    layout.forEach((element: PaginationLayoutItem = 0) => {
      switch (element) {
        case '-':
          truncationCount += 1;
          paginationElements.push(
            <StyledListItem key={`trunc${truncationCount}`} aria-hidden="true">
              <PaginationItem
                itemType={paginationItemTruncation}
                datatest-id={`pagination-item-truncation${truncationCount}`}
                size={size}
                disabled
                overrides={overrides}
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
                >
                  {page}
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

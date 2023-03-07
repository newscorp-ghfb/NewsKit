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

const paginationItemTruncation = 'paginationItemTruncation' as PaginationItemType;

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
    /* istanbul ignore next */
    size = 'medium',
    buildHref,
    /* istanbul ignore next */
    changePage = () => {},
    page,
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
  if (page && lastPage) {
    const layout: [PaginationLayoutItem?] = getItemsLayout({
      page,
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
    /* istanbul ignore next */
    layout.forEach((element: PaginationLayoutItem = 0) => {
      switch (element) {
        case '-':
          truncationCount += 1;
          paginationElements.push(
            <StyledListItem
              key={`trunc${truncationCount}`}
              aria-hidden="true"
              size={size}
            >
              <PaginationItem
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
        case 0:
          /* istanbul ignore next */
          // This will never happen
          break;
        default:
          {
            const pageNumber: number = element;
            const href = buildHref! && buildHref(pageNumber);
            paginationElements.push(
              <StyledListItem key={`page${pageNumber}`} size={size}>
                <PaginationItem
                  href={href}
                  onClick={() => changePage(pageNumber)}
                  selected={pageNumber === page}
                  eventContext={eventContext}
                  size={size}
                  overrides={overrides}
                  pageNumber={pageNumber}
                  {...staticProps}
                >
                  {children || pageNumber}
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

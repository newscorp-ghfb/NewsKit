import React from 'react';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {PaginationItemProps, PaginationItemsProps} from '../../types';
import {useTheme} from '../../../theme';
import {IconFilledChevronRight, NewsKitIconProps} from '../../../icons';
import {getComponentOverrides, Override} from '../../../utils/overrides';
import {StyledListItem} from '../../styled';
import {PaginationItem} from '../item/pagination-item';
import {usePaginationContext} from '../../context';

const DefaultIcon = (props: NewsKitIconProps) => (
  <IconFilledChevronRight {...props} />
);

export const PaginationItems = React.forwardRef<
  HTMLButtonElement,
  PaginationItemsProps
>(({children, overrides, ...rest}, ref) => {
  // TODO get from context
  const theme = useTheme();
  const {size = 'medium', buildHref, changePage = () => {}, changedPage} = usePaginationContext();

  const [PaginationIcon, paginationIconProps] = getComponentOverrides(
    overrides?.boundary as Override<NewsKitIconProps>,
    DefaultIcon,
    {
      overrides: {
        // TypeError: Cannot read properties of undefined (reading 'medium')
        ...theme.componentDefaults.pagination[size]?.boundary, // FIXME
        ...filterOutFalsyProperties(overrides?.boundary),
      },
    },
  );

  const getPaginationBoundary = (
    index: number,
    arr: React.ReactElement<
      PaginationItemProps,
      string | React.JSXElementConstructor<unknown>
    >[],
  ) => index < arr.length - 1;

  // const href = 'http://test';
  /* const paginationElements = (
    <>
      <StyledListItem key="1">
        <PaginationItem href={href} size={size} overrides={overrides}>
          1
        </PaginationItem>
      </StyledListItem>
      <StyledListItem key="2">
        <PaginationItem href={href} size={size} overrides={overrides}>
          2
        </PaginationItem>
      </StyledListItem>
      <StyledListItem key="3">
        <PaginationItem selected href={href} size={size} overrides={overrides}>
          3
        </PaginationItem>
      </StyledListItem>
    </>
  );
  */

  /* const paginationChildren = React.Children.toArray(
    children,
  ) as React.ReactElement<PaginationItemProps>[];
  const paginationElements = [] as React.ReactElement<PaginationItemProps>[];

  paginationChildren.forEach(
    (element: React.ReactElement<PaginationItemProps>, index: number) => {
      // add pagination element to the list
      paginationElements.push(
        <StyledListItem key={element.key}>
          {React.cloneElement(element, {
            size,
          })}
        </StyledListItem>,
      );

      // add pagination boundary to the list
      if (getPaginationBoundary(index, paginationChildren)) {
        paginationElements.push(
          <StyledListItem key={`${element.key}-boundary`} aria-hidden="true">
            <PaginationIcon {...(paginationIconProps as NewsKitIconProps)} />
          </StyledListItem>,
        );
      }
    },
  );
  */

  const paginationElements = [] as React.ReactElement<PaginationItemProps>[];
  for (let page = 1; page < 9; page++) {
    const href = buildHref! && buildHref(page);
    paginationElements.push(
      <StyledListItem key={`${page}`}>
        <PaginationItem
          href={href}
          onClick={() => changePage(page)}
          selected={page === changedPage}
          size={size}
          overrides={overrides}
        >
          {page}
        </PaginationItem>
      </StyledListItem>,
    );
  }
  // FIXME
  /*paginationElements.push(
    <StyledListItem key={`element.key-boundary`} aria-hidden="true">
      <PaginationIcon {...(paginationIconProps as NewsKitIconProps)} />
    </StyledListItem>,
  );
*/
  return <>{paginationElements}</>;
});

import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledListItem, StyledNav, StyledUnorderedList} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {PaginationItemProps, PaginationProps} from './types';
import {IconFilledChevronRight, NewsKitIconProps} from '../icons';
import {getComponentOverrides, Override} from '../utils/overrides';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useTheme} from '../theme';

const DefaultIcon = (props: NewsKitIconProps) => (
  <IconFilledChevronRight {...props} />
);

const ThemelessPagination = React.forwardRef<HTMLOListElement, PaginationProps>(
  ({children, overrides, size = 'medium', ...rest}, ref) => {
    const theme = useTheme();

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

    const paginationChildren = React.Children.toArray(
      children,
    ) as React.ReactElement<PaginationItemProps>[];
    const paginationElements = [] as React.ReactElement<PaginationProps>[];

    paginationChildren.forEach(
      (element: React.ReactElement<PaginationProps>, index: number) => {
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

    return (
      <StyledNav
        role="navigation"
        aria-label="pagination"
        data-testid="pagination-container"
        ref={ref}
        overrides={overrides}
        {...rest}
      >
        <StyledUnorderedList size={size}>
          {paginationElements}
        </StyledUnorderedList>
      </StyledNav>
    );
  },
);

export const Pagination0 = withOwnTheme(ThemelessPagination)({
  defaults,
  stylePresets,
});

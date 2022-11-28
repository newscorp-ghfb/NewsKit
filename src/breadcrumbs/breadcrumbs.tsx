import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledListItem, StyledNav, StyledOrderdList} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {BreadcrumbItemProps, BreadcrumbsProps} from './types';
import {IconFilledChevronRight} from '../icons';
import {getComponentOverrides, Override} from '../utils/overrides';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useTheme} from '../theme';

const DefaultIcon = (overrides: BreadcrumbsProps) => (
  <IconFilledChevronRight overrides={overrides} />
);
const ThemelessBreadcrumbs = React.forwardRef<
  HTMLOListElement,
  BreadcrumbsProps
>(
  (
    {
      children,
      showTrailingSeparator = false,
      overrides,
      size = 'medium',
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme();

    const [BreadcrumbsIcon, BreadcrumbsIconProps] = getComponentOverrides(
      overrides?.separator as Override<BreadcrumbsProps>,
      DefaultIcon,
      {
        size: theme.componentDefaults.breadcrumbs[size].separator.iconSize,
        ...theme.componentDefaults.breadcrumbs[size].separator,
        ...filterOutFalsyProperties(overrides),
      },
    );

    const getBreadcrumbSeparator = (
      index: number,
      arr: React.ReactElement<
        BreadcrumbItemProps,
        string | React.JSXElementConstructor<unknown>
      >[],
    ) => index < arr.length - 1 || showTrailingSeparator;

    const breadcrumbChildren = React.Children.toArray(
      children,
    ) as React.ReactElement<BreadcrumbItemProps>[];

    const BreadcrumbElement = breadcrumbChildren.reduce(
      (prevBreadcrumbItem, next, index, arr) => [
        ...prevBreadcrumbItem,
        <StyledListItem key={next.key}>
          {React.cloneElement(next as React.ReactElement<BreadcrumbsProps>, {
            size,
          })}
        </StyledListItem>,
        ...(getBreadcrumbSeparator(index, arr)
          ? [
              <StyledListItem key={`${next.key}-separator`} aria-hidden="true">
                <BreadcrumbsIcon
                  {...(BreadcrumbsIconProps as BreadcrumbsProps)}
                />
              </StyledListItem>,
            ]
          : []),
      ],
      [] as React.ReactElement<BreadcrumbsProps>[],
    );

    return (
      <StyledNav
        data-testid="breadcrumb-container"
        ref={ref}
        showTrailingSeparator={showTrailingSeparator}
        overrides={overrides}
        {...rest}
      >
        <StyledOrderdList size={size}>{BreadcrumbElement}</StyledOrderdList>
      </StyledNav>
    );
  },
);

export const Breadcrumbs = withOwnTheme(ThemelessBreadcrumbs)({
  defaults,
  stylePresets,
});

import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledListItem, StyledNav, StyledOrderedList} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {BreadcrumbItemProps, BreadcrumbsProps} from './types';
import {IconFilledChevronRight, NewsKitIconProps} from '../icons';
import {getComponentOverrides, Override} from '../utils/overrides';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useTheme} from '../theme';

const DefaultIcon = (overrides: BreadcrumbsProps, props: NewsKitIconProps) => (
  <IconFilledChevronRight overrides={overrides} {...props} />
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

    const [BreadcrumbsIcon, breadcrumbsIconProps] = getComponentOverrides(
      overrides?.separator as Override<BreadcrumbsProps>,
      DefaultIcon,
      {
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
    const breadcrumbElements = [] as React.ReactElement<BreadcrumbsProps>[];

    breadcrumbChildren.forEach(
      (element: React.ReactElement<BreadcrumbsProps>, index: number) => {
        // add breadcrumb element to the list
        breadcrumbElements.push(
          <StyledListItem key={element.key}>
            {React.cloneElement(element, {
              size,
            })}
          </StyledListItem>,
        );

        // add breadcrumb separator to the list
        if (getBreadcrumbSeparator(index, breadcrumbChildren)) {
          breadcrumbElements.push(
            <StyledListItem key={`${element.key}-separator`} aria-hidden="true">
              <BreadcrumbsIcon
                {...(breadcrumbsIconProps as BreadcrumbItemProps)}
              />
            </StyledListItem>,
          );
        }
      },
    );

    return (
      <StyledNav
        data-testid="breadcrumb-container"
        ref={ref}
        showTrailingSeparator={showTrailingSeparator}
        overrides={overrides}
        {...rest}
      >
        <StyledOrderedList size={size}>{breadcrumbElements}</StyledOrderedList>
      </StyledNav>
    );
  },
);

export const Breadcrumbs = withOwnTheme(ThemelessBreadcrumbs)({
  defaults,
  stylePresets,
});

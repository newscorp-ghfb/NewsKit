import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledListItem, StyledNav, StyledOrderdList} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {BreadcrumbItemProps, BreadcrumbsProps} from './types';
import {IconFilledChevronRight} from '../icons';
import {getComponentOverrides, Override} from '../utils/overrides';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';

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
    const separatorOverrides = {
      ...theme.componentDefaults.breadcrumbSeparator,
      ...filterOutFalsyProperties(overrides?.separator),
    };

    const iconToken = getToken(
      {theme, overrides},
      `breadcrumbs.separator.${size}`,
      `${size}`,
      'iconSize',
    );

    const iconStylePresetToken = getToken(
      {theme, overrides},
      `breadcrumbs.stylePreset`,
      ``,
      'stylePreset',
    );
    const iconSpaceToken = getToken(
      {theme, overrides},
      `breadcrumbs.paddingInline`,
      ``,
      'paddingInline',
    );

    const [BreadcrumbsIcon, BreadcrumbsIconProps] = getComponentOverrides(
      overrides?.separator as Override<BreadcrumbsProps>,
      DefaultIcon,
      {
        size: iconToken,
        paddingInline: iconSpaceToken,
        stylePreset: iconStylePresetToken,
        ...separatorOverrides,
      },
    );

    const breadcrumbChildren = React.Children.toArray(
      children,
    ) as React.ReactElement<BreadcrumbItemProps>[];

    return (
      <StyledNav
        data-testid="breadcrumb-container"
        ref={ref}
        showTrailingSeparator={showTrailingSeparator}
        overrides={overrides}
        {...rest}
      >
        <StyledOrderdList size={size}>
          {breadcrumbChildren.reduce(
            (prev, next, index, arr) => [
              ...prev,
              <StyledListItem key={next.key}>
                {React.cloneElement(
                  next as React.ReactElement<BreadcrumbsProps>,
                  {
                    size,
                  },
                )}
              </StyledListItem>,
              ...(index < arr.length - 1 || showTrailingSeparator
                ? [
                    <StyledListItem
                      key={`${next.key}-separator`}
                      aria-hidden="true"
                    >
                      <BreadcrumbsIcon
                        {...(BreadcrumbsIconProps as BreadcrumbsProps)}
                      />
                    </StyledListItem>,
                  ]
                : []),
            ],
            [] as React.ReactElement<BreadcrumbsProps>[],
          )}
        </StyledOrderdList>
      </StyledNav>
    );
  },
);

export const Breadcrumbs = withOwnTheme(ThemelessBreadcrumbs)({
  defaults,
  stylePresets,
});

import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {BreadcrumbsContextProvider} from './context';
import {StyledIconContainer, StyledList, StyledOrderdList} from './styled';
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
      `breadcrumbSeparator.${size}`,
      `${size}`,
      'iconSize',
    );

    const iconStylePresetToken = getToken(
      {theme, overrides},
      `breadcrumbSeparator.${size}`,
      `${size}`,
      'stylePreset',
    );
    const iconSpaceToken = getToken(
      {theme, overrides},
      `breadcrumbSeparator.${size}`,
      `${size}`,
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
      <BreadcrumbsContextProvider value={{size, showTrailingSeparator}}>
        <StyledOrderdList ref={ref} {...rest} overrides={overrides}>
          {showTrailingSeparator
            ? React.Children.map(children, child => (
                <>
                  <StyledList>{child}</StyledList>
                  <StyledList>
                    <StyledIconContainer>
                      <BreadcrumbsIcon
                        {...(BreadcrumbsIconProps as BreadcrumbsProps)}
                      />
                    </StyledIconContainer>
                  </StyledList>
                </>
              ))
            : breadcrumbChildren.reduce(
                (acc: React.ReactElement[], listItem, index, array) => {
                  acc.push(<StyledList>{listItem}</StyledList>);
                  if (children && index < array.length - 1) {
                    acc.push(
                      <StyledList>
                        <StyledIconContainer>
                          <BreadcrumbsIcon
                            {...(BreadcrumbsIconProps as BreadcrumbsProps)}
                          />
                        </StyledIconContainer>
                      </StyledList>,
                    );
                  }
                  // breadcrumb > breadcrumb
                  return acc;
                },
                [],
              )}
        </StyledOrderdList>
      </BreadcrumbsContextProvider>
    );
  },
);

export const Breadcrumbs = withOwnTheme(ThemelessBreadcrumbs)({
  defaults,
  stylePresets,
});

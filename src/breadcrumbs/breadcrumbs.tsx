import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {BreadcrumbsContextProvider} from './context';
import {StyledList, StyledOrderdList} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {BreadcrumbItemProps, BreadcrumbsProps} from './types';
import {IconFilledChevronRight} from '../icons';
import {getComponentOverrides} from '../utils/overrides';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';

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
    const DefaultIcon = () => (
      <IconFilledChevronRight
        overrides={{
          size: iconToken,
          stylePreset: iconStylePresetToken,
          paddingInline: iconSpaceToken,
          ...overrides,
        }}
      />
    );

    const [BreadcrumbsIcon, BreadcrumbsIconProps] = getComponentOverrides(
      overrides?.separator,
      DefaultIcon,
      {},
    );
    const breadcrumbChildren = React.Children.toArray(
      children,
    ) as React.ReactElement<BreadcrumbItemProps>[];
    return (
      <BreadcrumbsContextProvider
        value={{size, overrides, showTrailingSeparator}}
      >
        <StyledOrderdList ref={ref} {...rest}>
          {!showTrailingSeparator &&
            breadcrumbChildren.reduce(
              (acc: React.ReactElement[], listItem, index, array) => {
                acc.push(listItem);
                if (children && index < array.length - 1) {
                  acc.push(
                    <BreadcrumbsIcon
                      {...(BreadcrumbsIconProps as BreadcrumbsProps)}
                    />,
                  );
                }

                return acc;
              },
              [],
            )}

          {showTrailingSeparator &&
            React.Children.map(children, child => (
              <>
                <StyledList>
                  {child}
                  <BreadcrumbsIcon
                    {...(BreadcrumbsIconProps as BreadcrumbsProps)}
                  />
                </StyledList>
              </>
            ))}
        </StyledOrderdList>
      </BreadcrumbsContextProvider>
    );
  },
);

export const Breadcrumbs = withOwnTheme(ThemelessBreadcrumbs)({
  defaults,
  stylePresets,
});

import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {BreadcrumbsContextProvider} from './context';
import {StyledList, StyledOrderdList} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {BreadcrumbsProps} from './types';
import {IconFilledChevronRight} from '../icons';
import {getComponentOverrides} from '../utils/overrides';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';

const ThemelessBreadcrumbs = React.forwardRef<
  HTMLOListElement,
  BreadcrumbsProps
>(
  (
    {children, showTrailingSeparator, overrides, size = 'medium', ...rest},
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
    // const isLastItem = (currentIndex: number, length: number) =>
    //   currentIndex === length - 1;
    // map over children
    // remove the last icon
    // const test = children?.slice(-1)[0];

    // const MyTest = (lastItem: boolean, achildren: React.ReactNode) => (
    //   <StyledList>
    //     {achildren}
    //     {!lastItem && (
    //       <BreadcrumbsIcon {...(BreadcrumbsIconProps as BreadcrumbsProps)} />
    //     )}
    //   </StyledList>
    // );

    return (
      <BreadcrumbsContextProvider
        value={{size, overrides, showTrailingSeparator}}
      >
        <StyledOrderdList ref={ref} {...rest}>
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
          {!showTrailingSeparator && 'hello'}
        </StyledOrderdList>
      </BreadcrumbsContextProvider>
    );
  },
);

export const Breadcrumbs = withOwnTheme(ThemelessBreadcrumbs)({
  defaults,
  stylePresets,
});

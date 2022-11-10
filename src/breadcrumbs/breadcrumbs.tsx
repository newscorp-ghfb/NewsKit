import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {BreadcrumbsContextProvider} from './context';
import {StyledOrderdList} from './styled';
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

    return (
      <BreadcrumbsContextProvider
        value={{size, overrides, showTrailingSeparator}}
      >
        <StyledOrderdList ref={ref} {...rest}>
          {React.Children.map(children, child => (
            <>
              <li>
                {child}{' '}
                <BreadcrumbsIcon
                  {...(BreadcrumbsIconProps as BreadcrumbsProps)}
                />
              </li>
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

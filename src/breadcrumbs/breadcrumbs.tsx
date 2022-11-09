import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {BreadcrumbsContextProvider} from './context';
import {StyledOrderdList} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {BreadcrumbsProps} from './types';
import {IconFilledChevronRight} from '../icons';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';

const ThemelessBreadcrumbs = React.forwardRef<
  HTMLOListElement,
  BreadcrumbsProps
>(
  (
    {
      children,
      overrides,
      showTrailingSeparator,
      separator: Separator = IconFilledChevronRight,
      size = 'medium',
    },
    ref,
  ) => {
    const theme = useTheme();
    const separatorSizeToken = getToken(
      {theme, overrides},
      'breadcrumbItem.separator',
      'separator',
      'size',
    );

    const separatorStylePresetToken = getToken(
      {theme, overrides},
      'breadcrumbItem.separator',
      'separator',
      'stylePreset',
    );

    // const mySaperator = (
    //   <IconFilledChevronRight
    //     overrides={{
    //       size: separatorSizeToken,
    //       stylePreset: separatorStylePresetToken,
    //     }}
    //   />
    // );
    return (
      <BreadcrumbsContextProvider
        value={{size, overrides, showTrailingSeparator}}
      >
        <StyledOrderdList ref={ref}>
          {React.Children.map(children, child => (
            <li>
              {child}
              {Separator === null ? null : (
                <Separator
                  overrides={{
                    size: separatorSizeToken,
                    stylePreset: separatorStylePresetToken,
                  }}
                />
              )}
            </li>
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

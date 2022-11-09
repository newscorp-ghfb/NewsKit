import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {BreadcrumbsContextProvider} from './context';
import {StyledOrderdList} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {BreadcrumbsProps} from './types';
import {IconFilledChevronRight} from '../icons';
import {getComponentOverrides} from '../utils/overrides';

const ThemelessBreadcrumbs = React.forwardRef<
  HTMLOListElement,
  BreadcrumbsProps
>(({children, showTrailingSeparator, overrides, size = 'medium'}, ref) => {
  const DefaultIcon = () => (
    <IconFilledChevronRight
      overrides={{
        size: 'iconSize010',
        stylePreset: 'inkContrast',
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
      <StyledOrderdList ref={ref}>
        {React.Children.map(children, child => (
          <>
            <li>{child}</li>
            <BreadcrumbsIcon {...(BreadcrumbsIconProps as BreadcrumbsProps)} />
          </>
        ))}
      </StyledOrderdList>
    </BreadcrumbsContextProvider>
  );
});

export const Breadcrumbs = withOwnTheme(ThemelessBreadcrumbs)({
  defaults,
  stylePresets,
});

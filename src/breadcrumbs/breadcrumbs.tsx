import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {BreadcrumbsContextProvider} from './context';
import {StyledOrderdList} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {BreadcrumbsProps} from './types';

const ThemelessBreadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({children, overrides, showTrailingSeparator, size = 'medium'}, ref) => (
    <BreadcrumbsContextProvider
      value={{size, overrides, showTrailingSeparator}}
    >
      <StyledOrderdList>
        <li>{children}</li>
      </StyledOrderdList>
    </BreadcrumbsContextProvider>
  ),
);

export const Breadcrumbs = withOwnTheme(ThemelessBreadcrumbs)({
  defaults,
  stylePresets,
});

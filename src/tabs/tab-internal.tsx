import React from 'react';
import {TabInternalProps, TabSize} from './types';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useTheme} from '../theme/emotion';
import {TabButton} from './styled';

export const TabInternal = React.forwardRef<
  HTMLButtonElement,
  TabInternalProps
>(
  (
    {children, overrides = {}, size = TabSize.Medium, ariaLabel, ...props},
    ref,
  ) => {
    const theme = useTheme();
    const tabSettings: typeof overrides = {
      ...theme.componentDefaults.tab[size],
      ...filterOutFalsyProperties(overrides),
    };
    return (
      <TabButton
        data-testid="tab"
        role="tab"
        aria-label={ariaLabel}
        ref={ref}
        {...props}
        overrides={tabSettings}
      >
        {children}
      </TabButton>
    );
  },
);

TabInternal.displayName = 'TabInternal';

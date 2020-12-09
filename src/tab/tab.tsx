import React, {PropsWithChildren} from 'react';
import {TabProps, TabSize} from './types';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useTheme} from '../theme/emotion';
import {StyledButton} from './styled';

export const Tab = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<TabProps>
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
      <StyledButton
        data-testid="tab"
        role="tab"
        aria-label={ariaLabel}
        ref={ref}
        {...props}
        overrides={tabSettings}
      >
        {children}
      </StyledButton>
    );
  },
);

Tab.displayName = 'Tab';

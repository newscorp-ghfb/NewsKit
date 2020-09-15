import React from 'react';
import {TabProps, TabSize} from './types';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useTheme} from '../theme/emotion';
import {StyledButton} from './styled';

export const Tab: React.FC<TabProps> = ({
  children,
  overrides = {},
  size = TabSize.Medium,
  ariaLabel,
  ...props
}) => {
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
      {...props}
      overrides={tabSettings}
    >
      {children}
    </StyledButton>
  );
};

Tab.displayName = 'Tab';

import React from 'react';
import {TabProps, TabSize} from './types';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useTheme} from '../theme/emotion';
import {StyledFlag} from './styled';

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
    <StyledFlag
      data-testid="tab"
      aria-label={ariaLabel}
      {...props}
      overrides={tabSettings}
    >
      {children}
    </StyledFlag>
  );
};

Tab.displayName = 'Tab';

import React from 'react';
import {TabAlign, TabInternalProps, TabSize} from './types';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useTheme} from '../theme/emotion';
import {StyledTabButton} from './styled';

export const TabInternal = React.forwardRef<
  HTMLButtonElement,
  TabInternalProps
>(
  (
    {
      children,
      overrides = {},
      size = TabSize.Medium,
      ariaLabel,
      selected,
      id,
      align = TabAlign.Center,
      dataTestId = 'tab',
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const tabSettings: typeof overrides = {
      ...theme.componentDefaults.tab[size],
      ...filterOutFalsyProperties(overrides),
    };

    return (
      <StyledTabButton
        data-testid={dataTestId}
        role="tab"
        aria-label={ariaLabel}
        ref={ref}
        aria-selected={Boolean(selected)}
        aria-controls={id}
        id={id}
        tabIndex={selected ? 0 : -1}
        selected={selected}
        {...props}
        overrides={tabSettings}
        align={align}
      >
        {children}
      </StyledTabButton>
    );
  },
);

TabInternal.displayName = 'TabInternal';

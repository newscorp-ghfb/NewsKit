import React from 'react';
import {TabAlign, TabButtonProps, TabSize} from './types';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useTheme} from '../theme/emotion';
import {StyledTabButton} from './styled';

export const TabButton = React.forwardRef<HTMLButtonElement, TabButtonProps>(
  (
    {
      children,
      /* istanbul ignore next */
      overrides = {},
      /* istanbul ignore next */
      size = 'medium',
      ariaLabel,
      selected,
      id,
      /* istanbul ignore next */
      align = 'center',
      dataTestId = 'tab',
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();

    /* istanbul ignore if */
    if (
      process.env.NODE_ENV !== 'production' &&
      typeof theme.componentDefaults.tab !== 'object'
    ) {
      // eslint-disable-next-line no-console
      console.error('<Tab /> component needs to be used as child of <Tabs />');

      return null;
    }

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

TabButton.displayName = 'TabButton';

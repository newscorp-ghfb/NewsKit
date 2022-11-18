import React from 'react';
import {StyledButton} from './styled';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {BreadcrumbItemProps, BreadcrumbsProps} from './types';
import {useTheme} from '../theme';

export const BreadcrumbItem = React.forwardRef<
  HTMLButtonElement,
  BreadcrumbItemProps & BreadcrumbsProps
>(
  (
    {
      children,
      selected,
      href,
      overrides,
      /* istanbul ignore next */
      size = 'medium',
      eventContext = {},
      eventOriginator = 'breadcrumb-item',
      ...rest
    },
    ref,
  ) => {
    const buttonProps = {
      ...rest,
      selected,
      size,
    };
    const theme = useTheme();

    const buttonSettings: typeof overrides = {
      ...theme.componentDefaults.breadcrumbItem[size],
      ...filterOutFalsyProperties(overrides),
    };
    return (
      <StyledButton
        {...buttonProps}
        href={href}
        eventContext={{href, ...eventContext}}
        eventOriginator={eventOriginator}
        overrides={{...buttonSettings, width: 'auto'}}
        aria-current={selected && 'page'}
        ref={ref}
      >
        {children}
      </StyledButton>
    );
  },
);

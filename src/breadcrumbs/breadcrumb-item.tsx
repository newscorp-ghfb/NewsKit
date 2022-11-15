import React from 'react';
import {StyledButton} from './styled';
import {BreadcrumbItemProps, BreadcrumbsProps} from './types';

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
    return (
      <StyledButton
        {...buttonProps}
        href={href}
        eventContext={eventContext}
        eventOriginator={eventOriginator}
        overrides={overrides}
        aria-current={selected}
        ref={ref}
      >
        {children}
      </StyledButton>
    );
  },
);

import React from 'react';
import {useBreadCrumbsContext} from './context';
import {StyledButton, StyledList} from './styled';
import {BreadcrumbItemProps} from './types';

export const BreadcrumbItem = React.forwardRef<
  HTMLButtonElement,
  BreadcrumbItemProps
>(
  (
    {
      children,
      selected,
      href,
      overrides,
      eventContext = {},
      eventOriginator = 'breadcrumb-item',
      ...rest
    },
    ref,
  ) => {
    const {size} = useBreadCrumbsContext();
    const buttonProps = {
      ...rest,
      selected,
      size,
    };
    return (
      <StyledList>
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
      </StyledList>
    );
  },
);

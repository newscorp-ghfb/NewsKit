import React from 'react';
import {StyledButton} from '../../styled';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {PaginationItemProps} from '../../types';
import {useTheme} from '../../../theme';
import {getItemAria} from '../../utils';
import {get} from '../../../utils/get';

export const PaginationItem = React.forwardRef<
  HTMLButtonElement,
  PaginationItemProps
>(
  (
    {
      children,
      selected,
      pageNumber,
      href,
      onClick,
      overrides,
      itemType,
      /* istanbul ignore next */
      size = 'medium',
      eventContext = {},
      eventOriginator = 'pagination-item',
      ...rest
    },
    ref,
  ) => {
    const buttonProps = {
      ...rest,
      'data-testid': get(rest, 'data-testid') || 'pagination-item',
      selected,
      size,
    };
    const theme = useTheme();

    const itemTypeComponentDefaults =
      itemType && itemType !== 'paginationItem'
        ? theme.componentDefaults[itemType][size]
        : undefined;
    const buttonSettings: typeof overrides = {
      ...theme.componentDefaults.paginationItem[size],
      ...itemTypeComponentDefaults,
      ...filterOutFalsyProperties(overrides),
    };

    // Extract to utils
    const ariaProps = getItemAria({
      itemType,
      pageNumber,
      selected,
      disabled: buttonProps.disabled,
    });

    const navigationProps = {href, onClick};

    const trackingProps = buttonProps.disabled
      ? {}
      : {
          eventContext: {href, ...eventContext},
          eventOriginator,
        };

    return (
      <StyledButton
        {...buttonProps}
        {...navigationProps}
        {...trackingProps}
        overrides={buttonSettings}
        {...ariaProps}
        ref={ref}
      >
        {children}
      </StyledButton>
    );
  },
);

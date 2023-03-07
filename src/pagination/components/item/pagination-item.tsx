import React, {ComponentType} from 'react';
import {StyledButton} from '../../styled';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {PaginationItemProps} from '../../types';
import {useTheme} from '../../../theme';
import {getItemAria} from '../../utils';
import {get} from '../../../utils/get';
import {getComponentOverrides, Override} from '../../../utils/overrides';

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
      pageNumber,
      selected,
      size,
      href,
      onClick,
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

    const combinedEventContext = href
      ? {...eventContext, href}
      : {...eventContext, page: pageNumber};
    const combinedProps = {
      ...buttonProps,
      ...ariaProps,
      eventContext: combinedEventContext,
      eventOriginator,
      overrides: buttonSettings,
      ref,
    };

    if (overrides?.itemButton) {
      const [ItemButton, itemButtonProps] = getComponentOverrides(
        overrides.itemButton as Override<PaginationItemProps>,
        StyledButton as ComponentType<PaginationItemProps>,
        {
          ...rest,
          ...combinedProps,
        },
      );
      return (
        <ItemButton href={href} {...rest} {...itemButtonProps}>
          {children}
        </ItemButton>
      );
    }

    return <StyledButton {...combinedProps}>{children}</StyledButton>;
  },
);

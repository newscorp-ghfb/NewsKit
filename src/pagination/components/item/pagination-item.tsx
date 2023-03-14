import React, {ComponentType} from 'react';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {PaginationItemProps} from '../../types';
import {useTheme} from '../../../theme';
import {getItemAria} from '../../utils';
import {get} from '../../../utils/get';
import {getComponentOverrides, Override} from '../../../utils/overrides';
import {ButtonOrButtonLinkProps} from '../../../button';
import {Stack} from '../../../stack';
import {PaginationButton} from '../button';

export const PaginationItem = React.forwardRef<
  HTMLElement,
  ButtonOrButtonLinkProps & PaginationItemProps
>(
  (
    {
      children,
      selected,
      pageNumber,
      lastPage,
      href,
      onClick,
      overrides = {},
      itemType = 'paginationItem',
      /* istanbul ignore next */
      size = 'medium',
      changePage,
      eventContext = {},
      /* istanbul ignore next */
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
      itemType !== 'paginationItem'
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

    const {itemButton, itemDescription: ItemDescription} = overrides;

    if (
      itemType !== 'paginationItemTruncation' &&
      (itemButton || ItemDescription)
    ) {
      const [ItemButton, itemButtonProps] = getComponentOverrides(
        itemButton as Override<ButtonOrButtonLinkProps & PaginationItemProps>,
        PaginationButton as ComponentType<
          ButtonOrButtonLinkProps & PaginationItemProps
        >,
        {
          lastPage,
          changePage,
          ...combinedProps,
        },
      );

      return (
        <Stack flow="horizontal-center" spaceInline="space010">
          <ItemButton {...itemButtonProps}>{children}</ItemButton>
          {ItemDescription && (
            // @ts-ignore
            <ItemDescription
              selected
              pageNumber={pageNumber}
              lastPage={lastPage}
            />
          )}
        </Stack>
      );
    }

    // @ts-ignore - href must be allowed to be undefined so that Button renders as a link when appropriate
    return <PaginationButton {...combinedProps}>{children}</PaginationButton>;
  },
);

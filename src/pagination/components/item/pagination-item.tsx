import React, {ComponentType} from 'react';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {PaginationItemProps, PaginationItemDescriptionProps} from '../../types';
import {useTheme} from '../../../theme';
import {getItemAria} from '../../utils';
import {get} from '../../../utils/get';
import {getComponentOverrides, Override} from '../../../utils/overrides';
import {ButtonOrButtonLinkProps} from '../../../button';
import {Stack} from '../../../stack';
import {PaginationButton} from '../button';
import {TextBlock, TextBlockProps} from '../../../text-block';

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
    const {itemButton, itemDescription} = overrides;
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

    const textblockSettings: typeof overrides = {
      ...theme.componentDefaults.paginationItemNonInteractive[size],
      ...filterOutFalsyProperties(itemDescription),
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

    if (
      itemType !== 'paginationItemTruncation' &&
      (itemButton || itemDescription)
    ) {
      const [ItemButton, itemButtonProps] = getComponentOverrides(
        itemButton as Override<ButtonOrButtonLinkProps & PaginationItemProps>,
        PaginationButton as ComponentType<
          ButtonOrButtonLinkProps & PaginationItemProps
        >,
        {
          ...combinedProps,
          lastPage,
          changePage,
        },
      );

      const [ItemDescription, itemDescriptionProps] = getComponentOverrides(
        itemDescription as Override<
          TextBlockProps & PaginationItemDescriptionProps
        >,
        TextBlock as ComponentType<
          TextBlockProps & PaginationItemDescriptionProps
        >,
        textblockSettings,
      );

      return (
        <Stack flow="horizontal-center" spaceInline="space010">
          <ItemButton {...itemButtonProps}>{children}</ItemButton>
          {itemDescription && (
            <ItemDescription
              {...itemDescriptionProps}
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

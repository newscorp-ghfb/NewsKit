import React from 'react';
import {StyledButton} from '../../styled';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {PaginationItemProps} from '../../types';
import {useTheme} from '../../../theme';
import {IconButton} from '../../../icon-button';

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
      selected,
      size,
    };
    const theme = useTheme();

    const buttonSettings: typeof overrides = {
      ...theme.componentDefaults.paginationItem[size],
      ...theme.componentDefaults[itemType || 'paginationItem'][size],
      ...filterOutFalsyProperties(overrides),
    };

    // Extract to utils
    const ariaProps = {} as Record<string, unknown>;
    switch (itemType) {
      case 'first-page':
        if (!buttonProps.disabled) {
          ariaProps['aria-label'] = 'go to first page';
        }
        break;
      case 'prev-page':
        if (!buttonProps.disabled) {
          ariaProps['aria-label'] = 'go to previous page';
        }
        break;
      case 'next-page':
        if (!buttonProps.disabled) {
          ariaProps['aria-label'] = 'go to next page';
        }
        break;
      case 'last-page':
        if (!buttonProps.disabled) {
          ariaProps['aria-label'] = 'go to last page';
        }
        break;
      default:
        if (pageNumber) {
          ariaProps['aria-label'] = selected
            ? `current page, page ${pageNumber}`
            : `go to page ${pageNumber}`;
        }
        ariaProps['aria-current'] = selected && 'page';
        break;
    }

    if (buttonProps.disabled) {
      ariaProps['aria-disabled'] = 'true';
    }

    const navigationProps = {href, onClick}; // onClick ? { onClick } : { href };
    // console.log('navigationProps', navigationProps);

    if (buttonProps.disabled) {
      return (
        <IconButton
          {...buttonProps}
          {...navigationProps}
          ref={ref}
          size={size}
          overrides={{...buttonSettings}}
          {...ariaProps}
        >
          {children}
        </IconButton>
      );
    }
    return (
      <StyledButton
        {...buttonProps}
        {...navigationProps}
        eventContext={{href, ...eventContext}}
        eventOriginator={eventOriginator}
        overrides={{...buttonSettings}}
        {...ariaProps}
        ref={ref}
      >
        {children}
      </StyledButton>
    );
  },
);

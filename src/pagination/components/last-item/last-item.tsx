import React from 'react';
import {IconButton} from '../../../icon-button';
import { IconFilledLastPage } from '../../../icons';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {usePaginationContext} from '../../context';
import { StyledListItem } from '../../styled';
import {useButtonOverrides} from '../../utils';
import { PaginationItem } from '../item/pagination-item';
import defaults from './defaults';
import {PaginationLastItemProps} from './types';

// const defaultKeyboardShortcuts = ['shift + l'];

export const PaginationLastItem = React.forwardRef<
  HTMLButtonElement,
  PaginationLastItemProps
>(({children, ...props}, ref) => {
  //const theme = useTheme();
  const {getLastItemProps, size, buildHref, lastPage} = usePaginationContext();
  //const overrides = useButtonOverrides(props, 'paginationLastItem');

  const propsFromContext = getLastItemProps! && getLastItemProps(props);
  //console.log('PaginationLastItem props', props);
  //console.log('PaginationLastItem propsFromContext', propsFromContext);

  /* useKeyboardShortcutsOnButton({
    props: propsFromContext as PaginationLastItemProps,
    defaults: defaultKeyboardShortcuts,
  });
*/

/*      
  return (
    <IconButton
      ref={ref}
      data-testid="pagination-last-item"
      size={size}
      overrides={overrides}
      {...propsFromContext}
    >
      L
    </IconButton>
  );
*/
  const page = lastPage;
  const href = buildHref! && buildHref(page);
  return (
    <StyledListItem key="last">
      <PaginationItem
        {...propsFromContext}
        ref={ref}
        href={href}
        size={size}
        data-testid="pagination-last-item"
        itemType="paginationItemLast"
      >
        {children || <IconFilledLastPage />}
      </PaginationItem>
    </StyledListItem>
  );
});

/*
export const PaginationLastItem = withOwnTheme(ThemelessPaginationLastItem)({
  defaults,
});
*/

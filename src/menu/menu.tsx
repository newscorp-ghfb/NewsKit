import React, {useEffect, useRef, useState} from 'react';
import composeRefs from '@seznam/compose-react-refs';
import {MenuContextProvider, OnExpandedChangeFn} from './context';
import {MenuItemAlign, MenuProps} from './types';
import {StyledMenu} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {getParentId, isDescendant} from './utils';

const getAlign = (align: MenuItemAlign | undefined, vertical: boolean) => {
  if (!align) {
    return vertical ? 'start' : 'center';
  }
  return align;
};

const ThemelessMenu = React.forwardRef<HTMLElement, MenuProps>(
  (
    {
      overrides,
      children,
      vertical = false,
      size = 'medium',
      align: passedAlign,
      ...rest
    },
    ref,
  ) => {
    const align = getAlign(passedAlign, vertical);

    const [expandedMenuSubId, setExpandedMenuSubId] = useState<string | null>(
      null,
    );
    const updateExpandedMenuSubId: OnExpandedChangeFn = id => {
      if (!id) {
        setExpandedMenuSubId(null);
      } else if (!expandedMenuSubId) {
        // no sub menu currently expanded
        setExpandedMenuSubId(id);
      } else if (expandedMenuSubId === id) {
        // the currently expanded sub menu has been clicked
        setExpandedMenuSubId(getParentId(id));
      } else if (isDescendant(id, expandedMenuSubId)) {
        // the parent of the currently expanded sub menu has been clicked
        setExpandedMenuSubId(getParentId(id));
      } else {
        // any other sub menu has been clicked
        setExpandedMenuSubId(id);
      }
    };

    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      document.addEventListener(`click`, ({target}: MouseEvent) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(target as Node) &&
          !vertical
        ) {
          setExpandedMenuSubId(null);
        }
      });
    }, [vertical]);

    return (
      <MenuContextProvider
        value={{
          vertical,
          size,
          align,
          overrides,
          updateExpandedMenuSubId,
          expandedMenuSubId,
          parentSubMenuId: null,
        }}
      >
        <StyledMenu
          role="navigation"
          data-testid="menu-container"
          overrides={overrides}
          vertical={vertical}
          ref={composeRefs(ref, menuRef)}
          {...rest}
        >
          {/* eslint-disable jsx-a11y/no-redundant-roles  */}
          <ul role="list">{children}</ul>
        </StyledMenu>
      </MenuContextProvider>
    );
  },
);

export const Menu = withOwnTheme(ThemelessMenu)({defaults, stylePresets});

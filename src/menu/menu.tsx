import React, {useState} from 'react';
import {MenuContextProvider, OnExpandedChangeFn} from './context';
import {MenuItemAlign, MenuProps} from './types';
import {StyledMenu} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

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

    const [callbacks, setCallbacks] = useState<OnExpandedChangeFn[]>([]);
    const registerExpandedStateChangeCallback = React.useCallback(
      (fn: OnExpandedChangeFn) => setCallbacks(prevState => [...prevState, fn]),
      [setCallbacks],
    );
    const updateExpandedState: OnExpandedChangeFn = (position, isExpanded) => {
      callbacks.forEach(fn => fn(position, isExpanded));
    };

    return (
      <MenuContextProvider
        value={{
          vertical,
          size,
          align,
          overrides,
          updateExpandedState,
          registerExpandedStateChangeCallback,
        }}
      >
        <StyledMenu
          role="navigation"
          data-testid="menu-container"
          overrides={overrides}
          vertical={vertical}
          ref={ref}
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

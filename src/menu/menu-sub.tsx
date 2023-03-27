import React, {useEffect} from 'react';
import {useId} from '@floating-ui/react-dom-interactions';
import {MenuContextProvider, useMenuContext} from './context';
import {MenuSubIconProps, MenuSubProps} from './types';
import {StyledButton, StyledMenuItem, StyledUl} from './styled';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {get} from '../utils/get';
import {useControlled} from '../utils/hooks';
import {composeEventHandlers} from '../utils/compose-event-handlers';
import {IconFilledExpandLess, IconFilledExpandMore} from '../icons';
import {getComponentOverrides} from '../utils/overrides';
import {buildNestedId, isDescendant} from './utils';

const DefaultIcon = ({expanded, overrides}: MenuSubIconProps) =>
  expanded ? (
    <IconFilledExpandLess
      overrides={{
        size: 'iconSize020',
        ...overrides,
      }}
    />
  ) : (
    <IconFilledExpandMore
      overrides={{
        size: 'iconSize020',
        ...overrides,
      }}
    />
  );

export const MenuSub = React.forwardRef<HTMLLIElement, MenuSubProps>(
  (
    {
      overrides,
      children,
      title,
      selected,
      expanded: expandedProp,
      defaultExpanded = false,
      onClick,
      align: menuSubAlign,
      ...rest
    },
    ref,
  ) => {
    const [isExpanded, setIsExpanded] = useControlled({
      controlledValue: expandedProp,
      defaultValue: defaultExpanded,
    });

    const menuContext = useMenuContext();
    const {
      vertical,
      size,
      align: menuAlign,
      overrides: menuOverrides,
      isSubMenu,
      parentSubMenuId,
      updateExpandedMenuSubId,
      expandedMenuSubId,
    } = menuContext;
    const align = menuSubAlign || menuAlign;

    const id = useId();
    const nestedId = buildNestedId(id, parentSubMenuId);

    useEffect(() => {
      if (!expandedMenuSubId) {
        // all sub menus have been collapsed
        setIsExpanded(false);
      } else if (
        expandedMenuSubId === nestedId ||
        isDescendant(nestedId, expandedMenuSubId)
      ) {
        // this sub menu or one of its descendants has been expanded
        setIsExpanded(true);
      } else if (isDescendant(expandedMenuSubId, nestedId)) {
        // this sub menu's ancestor is expanded
        setIsExpanded(false);
      } else if (!vertical) {
        // another sub menu elsewhere in the tree has been expanded
        setIsExpanded(false);
      }
    }, [vertical, nestedId, expandedMenuSubId, setIsExpanded]);

    const [IndicatorIcon, indicatorIconProps] = getComponentOverrides(
      overrides?.indicatorIcon,
      DefaultIcon,
      {
        expanded: isExpanded,
      },
    );

    // Inform the parent context that this sub menu has been clicked.
    const handleClick = React.useCallback(() => {
      updateExpandedMenuSubId(nestedId);
    }, [nestedId, updateExpandedMenuSubId]);

    // Set the initial expanded state of this sub menu in the parent context.
    useEffect(() => {
      if (defaultExpanded) {
        updateExpandedMenuSubId(nestedId);
      }
    }, []);

    const theme = useTheme();
    const menuItemOverrides: MenuSubProps['overrides'] = {
      ...get(
        theme.componentDefaults,
        `${isSubMenu ? 'menuSubItem' : 'menuItem'}.${
          vertical ? 'vertical' : 'horizontal'
        }.${size}`,
      ),
      ...filterOutFalsyProperties(overrides),
    };

    const buttonProps = {
      ...rest,
      selected,
      size,
    };

    return (
      <StyledMenuItem
        className="nk-menu-item"
        vertical={vertical}
        overrides={menuOverrides}
        ref={ref}
      >
        {/*
        @ts-ignore href is not required for this Button  */}
        <StyledButton
          {...buttonProps}
          vertical={vertical}
          align={align}
          selected={selected}
          onClick={composeEventHandlers([handleClick, onClick])}
          aria-expanded={isExpanded}
          data-testid="menu-sub-button"
          overrides={{
            ...menuItemOverrides,
          }}
        >
          {title}
          <IndicatorIcon {...(indicatorIconProps as MenuSubIconProps)} />
        </StyledButton>
        <MenuContextProvider
          value={{
            ...menuContext,
            isSubMenu: true,
            parentSubMenuId: nestedId,
            align,
          }}
        >
          <StyledUl
            expanded={isExpanded}
            size={size}
            vertical={vertical}
            overrides={overrides}
          >
            {children}
          </StyledUl>
        </MenuContextProvider>
      </StyledMenuItem>
    );
  },
);

MenuSub.displayName = 'MenuSub';

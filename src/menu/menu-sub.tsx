import React from 'react';
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
      defaultExpanded,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const [isExpanded, setIsExpanded] = useControlled({
      controlledValue: expandedProp,
      defaultValue: defaultExpanded,
    });

    const [IndicatorIcon, indicatorIconProps] = getComponentOverrides(
      overrides?.indicatorIcon,
      DefaultIcon,
      {
        expanded: isExpanded,
      },
    );

    const handleClick = React.useCallback(() => {
      setIsExpanded(!isExpanded);
    }, [isExpanded, setIsExpanded]);

    const menuContext = useMenuContext();
    const {
      vertical,
      size,
      align,
      overrides: menuOverrides,
      isSubMenu,
    } = menuContext;

    const theme = useTheme();
    const menuItemOverrides: MenuSubProps['overrides'] = {
      ...get(
        theme.componentDefaults,
        `${isSubMenu ? 'menuSubItem' : 'menuItem'}.${
          vertical ? 'vertical' : 'horizontal'
        }`,
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
        <MenuContextProvider value={{...menuContext, isSubMenu: true}}>
          <StyledUl
            expanded={isExpanded}
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

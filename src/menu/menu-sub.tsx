import React, {useEffect, useId} from 'react';
import {
  MenuSubContextProvider,
  useMenuContext,
  useMenuSubContext,
} from './context';
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

    const id = useId();
    const {parentId} = useMenuSubContext();
    const nestedId = buildNestedId(id, parentId);
    const {updateExpandedMenuSubId, expandedMenuSubId} = useMenuContext();

    useEffect(() => {
      if (
        expandedMenuSubId === nestedId ||
        (expandedMenuSubId && isDescendant(nestedId, expandedMenuSubId))
      ) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    }, [nestedId, expandedMenuSubId, setIsExpanded]);

    const [IndicatorIcon, indicatorIconProps] = getComponentOverrides(
      overrides?.indicatorIcon,
      DefaultIcon,
      {
        expanded: isExpanded,
      },
    );

    const handleClick = React.useCallback(() => {
      updateExpandedMenuSubId(nestedId, !isExpanded);
    }, [isExpanded, nestedId, updateExpandedMenuSubId]);

    const {vertical, size, align, overrides: menuOverrides} = useMenuContext();

    const theme = useTheme();
    const menuItemOverrides: MenuSubProps['overrides'] = {
      ...get(
        theme.componentDefaults,
        `menuItem.${vertical ? 'vertical' : 'horizontal'}`,
      ),
      ...filterOutFalsyProperties(overrides),
    };

    const buttonProps = {
      ...rest,
      selected,
      size,
    };

    return (
      <MenuSubContextProvider value={{parentId: nestedId}}>
        <StyledMenuItem
          className="nk-menu-item"
          vertical={vertical}
          overrides={menuOverrides}
          ref={ref}
        >
          {/*
        @ts-ignore */}
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
          <StyledUl
            expanded={isExpanded}
            vertical={vertical}
            overrides={overrides}
          >
            {children}
          </StyledUl>
        </StyledMenuItem>
      </MenuSubContextProvider>
    );
  },
);

MenuSub.displayName = 'MenuSub';

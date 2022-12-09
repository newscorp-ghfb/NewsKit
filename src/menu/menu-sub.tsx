import React, {useEffect, useId} from 'react';
import {
  useMenuContext,
  useMenuSubContext,
  MenuSubContextProvider,
  OnExpandedChangeFn,
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

const isMatch = (
  position: string[],
  matchPosition: string[],
): boolean =>
  JSON.stringify(matchPosition) === JSON.stringify(position);

const isDescendant = (
  position: string[],
  descendantPosition: string[],
): boolean =>
  JSON.stringify(descendantPosition.slice(0, position.length)) !==
  JSON.stringify(position);

const isAncestor = (position: string[], ancestorPosition: string[]): boolean =>
  JSON.stringify(position.slice(0, ancestorPosition.length)) ===
  JSON.stringify(ancestorPosition);

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
    const {ancestry} = useMenuSubContext();
    const position = [...ancestry, id];
    const {
      updateExpandedState,
      registerExpandedStateChangeCallback,
    } = useMenuContext();

    // Check if this MenuSub needs to be expanded / collapsed whenever a MenuSub elsewhere in the tree is expanded / collapsed.
    const onExpandedStateChange = React.useCallback<OnExpandedChangeFn>(
      (smPosition, smIsExpanded) => {
        if (isMatch(position, smPosition)) {
          return;
        }
        if (smIsExpanded && isDescendant(position, smPosition)) {
          setIsExpanded(false);
        } else if (!smIsExpanded && isAncestor(position, smPosition)) {
          setIsExpanded(false);
        }
      },
      [JSON.stringify(position), setIsExpanded],
    );

    // Register the callback above to be triggered whenever state changes elsewhere in the tree.
    useEffect(() => {
      registerExpandedStateChangeCallback(onExpandedStateChange);
    }, [onExpandedStateChange, registerExpandedStateChangeCallback]);

    // Notify up the tree whenever this MenuSub is expanded / collapsed.
    useEffect(() => {
      updateExpandedState(position, !!isExpanded);
    }, [JSON.stringify(position), !!isExpanded]);

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
      <MenuSubContextProvider value={{ancestry: [...position]}}>
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

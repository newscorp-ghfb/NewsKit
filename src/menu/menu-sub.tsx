import React from 'react';
import {useMenuContext} from './context';
import {MenuSubIconProps, MenuSubProps} from './types';
import {StyledButton, StyledMenuItem} from './styled';

import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {get} from '../utils/get';
import {styled} from '../utils';
import {useControlled} from '../utils/hooks';
import {composeEventHandlers} from '../utils/compose-event-handlers';
import {IconFilledExpandLess, IconFilledExpandMore} from '../icons';
import {getComponentOverrides} from '../utils/overrides';

const StyledUl = styled.ul<{expanded?: boolean; vertical?: boolean}>`
  display: ${({expanded}) => (expanded ? 'flex' : 'none')} !important;
  flex-direction: ${({vertical}) => (vertical ? 'column' : 'row')};
  border: 1px solid red;

  ${({vertical}) =>
    vertical
      ? {}
      : {
          position: 'absolute',
          left: '0',
          width: '100%',
        }};
`;

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
      onChange,
      onMouseEnter,
      onMouseLeave,
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

    const handleMouseEnter = React.useCallback(() => {
      // setIsExpanded(true);
    }, [setIsExpanded]);

    const handleOpenMouseLeave = React.useCallback(() => {
      // setIsExpanded(false);
    }, [setIsExpanded]);

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
      <StyledMenuItem
        className="nk-menu-item"
        vertical={vertical}
        overrides={menuOverrides}
        ref={ref}
        onMouseEnter={composeEventHandlers([handleMouseEnter, onMouseEnter])}
        onMouseLeave={composeEventHandlers([
          handleOpenMouseLeave,
          onMouseLeave,
        ])}
      >
        {/*
        @ts-ignore */}
        <StyledButton
          {...buttonProps}
          align={align}
          overrides={{
            ...menuItemOverrides,
            // width 100% should not be overwritten
            // move to StyledButton once PPDSC-1449 is resolved
            width: '100%',
          }}
          aria-current={selected && 'page'}
          onClick={composeEventHandlers([handleClick, onClick])}
          aria-expanded={isExpanded}
        >
          {title}

          <IndicatorIcon {...(indicatorIconProps as MenuSubIconProps)} />
        </StyledButton>
        <StyledUl expanded={isExpanded} vertical={vertical}>
          {children}
        </StyledUl>
      </StyledMenuItem>
    );
  },
);

MenuSub.displayName = 'MenuSub';

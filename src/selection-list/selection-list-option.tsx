import React from 'react';
import {IconFilledCheck} from '../icons';
import {EventTrigger, useInstrumentation} from '../instrumentation';
import {useTheme} from '../theme';
import {composeEventHandlers} from '../utils/compose-event-handlers';
import {getToken} from '../utils/get-token';
import {StyledSelectionListOption} from './styled';
import {SelectionListOptionProps} from './types';

export const SelectionListOption = React.forwardRef<
  HTMLButtonElement,
  SelectionListOptionProps
>(
  (
    {
      children,
      selected,
      selectedIcon,
      overrides = {},
      eventContext = {},
      eventOriginator = 'selection-list-option',
      onClick: onClickProp,
      ...restProps
    },
    forwardRef,
  ) => {
    const theme = useTheme();
    const iconSize = getToken(
      {theme, overrides},
      `selectionListOption.icon`,
      'icon',
      'iconSize',
    );

    const iconStylePreset = getToken(
      {theme, overrides},
      `selectionListOption.icon`,
      '',
      'stylePreset',
    );

    const renderIcon = () => {
      if (selectedIcon) return selectedIcon;
      return (
        <IconFilledCheck
          overrides={{size: iconSize, stylePreset: iconStylePreset}}
        />
      );
    };

    const {fireEvent} = useInstrumentation();

    const onClick = composeEventHandlers([
      onClickProp,
      () =>
        fireEvent({
          originator: eventOriginator,
          trigger: EventTrigger.Click,
          context: {
            ...eventContext,
          },
        }),
    ]);

    return (
      <StyledSelectionListOption
        ref={forwardRef}
        role="menuitemradio"
        aria-checked={!!selected}
        selected={selected}
        overrides={overrides}
        tabIndex={selected ? 0 : -1}
        onClick={onClick}
        {...restProps}
      >
        {children}
        {selected && renderIcon()}
      </StyledSelectionListOption>
    );
  },
);

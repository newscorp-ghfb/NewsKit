import React, {useCallback, useRef} from 'react';
import composeRefs from '@seznam/compose-react-refs';

import {composeEventHandlers} from '../form/utils';
import {IconFilledCheck} from '../icons';
import {
  StyledCheckbox,
  StyledInput,
  StyledContainer,
  StyledRipple,
} from './styled';
import {CheckboxProps, CheckboxIconProps} from './types';
import {getComponentOverrides} from '../utils/overrides';
import {useControlled} from '../utils/hooks';

const DefaultCheckboxIcon = ({checked, overrides}: CheckboxIconProps) =>
  checked ? (
    <IconFilledCheck
      overrides={{
        size: 'iconSize020',
        ...overrides,
      }}
    />
  ) : null;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'medium',
      checked: checkedProp,
      defaultChecked,
      state,
      overrides,
      onFocus,
      onBlur,
      onChange,
      ...restProps
    },
    inputRef,
  ) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setFocused] = React.useState(false);
    const [checked, setCheckedState] = useControlled({
      controlledValue: checkedProp,
      defaultValue: Boolean(defaultChecked),
    });

    const onRippleClick = useCallback(() => {
      /* istanbul ignore else */
      if (ref && ref.current) {
        ref.current.click();
      }
    }, [ref]);

    const onInputChange = useCallback(
      event => {
        const newChecked = event.target.checked;
        setCheckedState(newChecked);
      },
      [setCheckedState],
    );

    const [CheckIcon, checkIconProps] = getComponentOverrides(
      overrides?.icon,
      DefaultCheckboxIcon,
      {
        state,
        checked,
        size,
      },
    );

    return (
      <StyledContainer size={size} overrides={overrides} state={state}>
        <StyledRipple
          size={size}
          overrides={overrides}
          onClick={onRippleClick}
          className="nk-checkbox-ripple"
        />
        <StyledCheckbox
          checked={checked}
          state={state}
          overrides={overrides}
          size={size}
          isFocused={isFocused}
        >
          <CheckIcon {...(checkIconProps as CheckboxIconProps)} />
          <StyledInput
            ref={composeRefs(inputRef, ref)}
            overrides={overrides}
            checked={checked}
            disabled={state === 'disabled'}
            {...restProps}
            type="checkbox"
            state={state}
            onFocus={composeEventHandlers([() => setFocused(true), onFocus])}
            onBlur={composeEventHandlers([() => setFocused(false), onBlur])}
            onChange={composeEventHandlers([onInputChange, onChange])}
          />
        </StyledCheckbox>
      </StyledContainer>
    );
  },
);

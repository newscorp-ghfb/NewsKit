import React, {useCallback, useRef} from 'react';
import composeRefs from '@seznam/compose-react-refs';
import {composeEventHandlers} from '../utils/compose-event-handlers';
import {
  StyledSwitch,
  StyledInput,
  StyledSwitchContainer,
  StyledFeedback,
  StyledContainer,
  StyledLabel,
} from './styled';
import {BaseSwitchProps, BaseSwitchIconProps} from './types';
import {getComponentOverrides} from '../utils/overrides';
import {useControlled} from '../utils/hooks';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';

export const BaseSwitch = React.forwardRef<HTMLInputElement, BaseSwitchProps>(
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
      label,
      labelPosition = 'end',
      labelAttributes = {},
      path,
      defaultSwitchSelectorComponent: defaultSwitchComponent,
      type,
      ...restProps
    },
    inputRef,
  ) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isInputFocused, setIsInputFocused] = React.useState(false);
    const [isLabelHovered, setIsLabelHovered] = React.useState(false);

    const [checked, setCheckedState] = useControlled({
      controlledValue: checkedProp,
      defaultValue: Boolean(defaultChecked),
    });

    const onFeedbackClick = useCallback(() => {
      // When label is passed, everything ( input and feedback components) is wrap inside the label
      // so there is no need for clicking on the input
      /* istanbul ignore else */
      if (!label && ref && ref.current) {
        ref.current.click();
      }
    }, [ref, label]);

    const onInputChange = useCallback(
      event => {
        setCheckedState(event.target.checked);
      },
      [setCheckedState],
    );

    const onInputFocus = useCallback(() => {
      setIsInputFocused(true);
    }, [setIsInputFocused]);

    const onInputBlur = useCallback(() => {
      setIsInputFocused(false);
    }, [setIsInputFocused]);

    const onLabelMouseOver = useCallback(() => {
      if (state !== 'disabled') {
        setIsLabelHovered(true);
      }
    }, [setIsLabelHovered, state]);

    const onLabelMouseLeave = useCallback(() => {
      if (state !== 'disabled') {
        setIsLabelHovered(false);
      }
    }, [setIsLabelHovered, state]);

    const theme = useTheme();
    const iconSize = getToken(
      {theme, overrides},
      `${path}.${size}.icon`,
      'icon',
      'size',
    );

    const [CheckIcon, checkIconProps] = getComponentOverrides(
      overrides?.icon,
      defaultSwitchComponent,
      {
        state,
        checked,
        size,
        iconSize,
        parentOverrides: overrides,
        isFocused: isInputFocused,
        isHovered: isLabelHovered || isInputFocused,
      },
    );

    const labelElement = label && (
      <StyledLabel path={path} size={size} overrides={overrides} state={state}>
        {label}
      </StyledLabel>
    );

    return (
      <StyledContainer
        as={label ? 'label' : 'div'}
        state={state}
        size={size}
        overrides={overrides}
        {...(label ? labelAttributes : {})}
        onMouseOver={onLabelMouseOver}
        onMouseLeave={onLabelMouseLeave}
        path={path}
      >
        {labelPosition === 'start' && labelElement}
        <StyledSwitchContainer
          size={size}
          overrides={overrides}
          state={state}
          labelPosition={labelPosition}
          role="presentation"
          path={path}
        >
          <StyledFeedback
            centreOnThumb={path === 'switch'}
            checked={checked}
            size={size}
            overrides={overrides}
            state={state}
            onClick={onFeedbackClick}
            data-testid={`${type}-feedback`}
            isFocused={isInputFocused}
            isHovered={isLabelHovered || isInputFocused}
            path={path}
          />
          <StyledSwitch
            checked={checked}
            state={state}
            overrides={overrides}
            size={size}
            isFocused={isInputFocused}
            isHovered={isLabelHovered}
            feedbackIsVisible={isLabelHovered || isInputFocused}
            path={path}
          >
            <CheckIcon {...(checkIconProps as BaseSwitchIconProps)} />
            <StyledInput
              ref={composeRefs(inputRef, ref)}
              overrides={overrides}
              checked={checked}
              disabled={state === 'disabled'}
              {...restProps}
              state={state}
              onFocus={composeEventHandlers([onInputFocus, onFocus])}
              onBlur={composeEventHandlers([onInputBlur, onBlur])}
              onChange={composeEventHandlers([onInputChange, onChange])}
              path={path}
              type={type}
              data-testid={`${type}-input`}
            />
          </StyledSwitch>
        </StyledSwitchContainer>
        {labelPosition === 'end' && labelElement}
      </StyledContainer>
    );
  },
);

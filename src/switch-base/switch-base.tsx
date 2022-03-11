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
import {SwitchBaseProps, SwitchBaseIconProps} from './types';
import {getComponentOverrides} from '../utils/overrides';
import {useControlled} from '../utils/hooks';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';

export const SwitchBase = React.forwardRef<HTMLInputElement, SwitchBaseProps>(
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
      defaultSwitchComponent,
      type,
      ...restProps
    },
    inputRef,
  ) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setFocused] = React.useState(false);
    const [isLabelHover, setLabelHover] = React.useState(false);
    const [isFeedbackHover, setFeedbackHover] = React.useState(false);

    const [checked, setCheckedState] = useControlled({
      controlledValue: checkedProp,
      defaultValue: Boolean(defaultChecked),
    });

    const onFeedbackClick = useCallback(() => {
      // When label is passed, everything ( input and feedback components) is wrap inside the label
      // so there is no need for clicking on the input
      /* istanbul ignore else */
      if (ref && ref.current && !label) {
        ref.current.click();
      }
    }, [ref, label]);

    const onInputChange = useCallback(
      event => {
        const newChecked = event.target.checked;
        setCheckedState(newChecked);
      },
      [setCheckedState],
    );

    const onInputFocus = useCallback(() => {
      setFocused(true);
    }, [setFocused]);

    const onInputBlur = useCallback(() => {
      setFocused(false);
    }, [setFocused]);

    // onLabelMouseOver && onLabelMouseLeave
    // are used to apply hover state on the checkbox when mouse is over label
    const onLabelMouseOver = useCallback(() => {
      if (state !== 'disabled') {
        setLabelHover(true);
      }
    }, [setLabelHover, state]);

    const onLabelMouseLeave = useCallback(() => {
      if (state !== 'disabled') {
        setLabelHover(false);
      }
    }, [setLabelHover, state]);

    const onFeedbackMouseOver = useCallback(() => {
      if (state !== 'disabled') {
        setFeedbackHover(true);
      }
    }, [setFeedbackHover, state]);

    const onFeedbackMouseLeave = useCallback(() => {
      if (state !== 'disabled') {
        setFeedbackHover(false);
      }
    }, [setFeedbackHover, state]);

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
      },
    );

    const labelElement = (
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
          onMouseOver={onFeedbackMouseOver}
          onMouseLeave={onFeedbackMouseLeave}
          role="presentation"
          path={path}
        >
          <StyledFeedback
            size={size}
            overrides={overrides}
            state={state}
            onClick={onFeedbackClick}
            data-testid={`${type}-feedback`}
            isFocused={isFocused}
            isHover={isFeedbackHover || isLabelHover}
            path={path}
          />
          <StyledSwitch
            checked={checked}
            state={state}
            overrides={overrides}
            size={size}
            isFocused={isFocused}
            isHover={isLabelHover}
            feedbackIsVisible={isLabelHover || isFeedbackHover || isFocused}
            path={path}
          >
            <CheckIcon {...(checkIconProps as SwitchBaseIconProps)} />
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

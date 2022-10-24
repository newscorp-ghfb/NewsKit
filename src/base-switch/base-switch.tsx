import React, {useCallback, useEffect, useRef, useState} from 'react';
import composeRefs from '@seznam/compose-react-refs';
import {composeEventHandlers} from '../utils/compose-event-handlers';
import {
  StyledSwitch,
  StyledInput,
  StyledSwitchContainer,
  StyledSwitchFeedback,
  StyledSwitchAndLabelWrapper,
  StyledLabel,
} from './styled';
import {BaseSwitchProps, BaseSwitchIconProps} from './types';
import {getComponentOverrides} from '../utils/overrides';
import {useControlled} from '../utils/hooks';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {isFocusVisible} from '../utils/focus-visible';
import {omitLogicalPropsFromOverrides} from '../utils/logical-properties';
import {EventTrigger, useInstrumentation} from '../instrumentation';

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
      hideFeedback,
      eventContext = {},
      eventOriginator = '',
      ...restProps
    },
    inputRef,
  ) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isInputFocused, setIsInputFocused] = React.useState(false);
    const [isInputFocusVisible, setIsInputFocusVisible] = React.useState(false);
    const [isInputActive, setIsInputActive] = React.useState(false);
    const [isLabelHovered, setIsLabelHovered] = React.useState(false);
    const {fireEvent} = useInstrumentation();

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

    const onInputChange = useCallback<
      React.ChangeEventHandler<HTMLInputElement>
    >(
      event => {
        setCheckedState(event.target.checked);

        fireEvent({
          originator: eventOriginator,
          trigger: EventTrigger.Change,
          context: {
            checked: event.target.checked,
            ...eventContext,
          },
        });
      },
      [eventContext, eventOriginator, fireEvent, setCheckedState],
    );

    const onInputFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (isFocusVisible(e)) {
          setIsInputFocusVisible(true);
        } else {
          setIsInputFocused(true);
        }
      },
      [setIsInputFocused, setIsInputFocusVisible],
    );

    const onInputBlur = useCallback(() => {
      setIsInputFocusVisible(false);
      setIsInputFocused(false);
    }, []);

    const onMouseDown = useCallback(() => {
      setIsInputActive(true);
    }, [setIsInputActive]);

    const onMouseUp = useCallback(() => {
      setIsInputActive(false);
    }, [setIsInputActive]);

    const onLabelMouseOver = useCallback(() => {
      if (state !== 'disabled') {
        setIsLabelHovered(true);
      }
    }, [setIsLabelHovered, state]);

    const onLabelMouseLeave = useCallback(() => {
      if (state !== 'disabled') {
        setIsLabelHovered(false);
        setIsInputActive(false);
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
        parentOverrides: omitLogicalPropsFromOverrides(overrides),
        isFocused: isInputFocused,
        isHovered: isLabelHovered || isInputFocused,
      },
    );

    const labelElement = label && (
      <StyledLabel path={path} size={size} overrides={overrides} state={state}>
        {label}
      </StyledLabel>
    );

    const [switchPadding, setSwitchPadding] = useState('');
    const switchRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      setSwitchPadding(getComputedStyle(switchRef.current!).paddingInline);
    }, []);

    return (
      <StyledSwitchAndLabelWrapper
        as={label ? 'label' : 'div'}
        state={state}
        size={size}
        overrides={overrides}
        {...(label ? labelAttributes : {})}
        onMouseOver={onLabelMouseOver}
        onMouseLeave={onLabelMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
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
          {!hideFeedback && (
            <StyledSwitchFeedback
              thumbOffset={switchPadding}
              centreOnThumb={path === 'switch'}
              checked={checked}
              size={size}
              overrides={overrides}
              state={state}
              onClick={onFeedbackClick}
              data-testid={`${type}-feedback`}
              isActive={isInputActive}
              isHovered={isLabelHovered}
              path={path}
            />
          )}
          <StyledSwitch
            ref={switchRef}
            checked={checked}
            state={state}
            overrides={overrides}
            size={size}
            isFocused={isInputFocused}
            isFocusedVisible={isInputFocusVisible}
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
              data-testid={`${type}-input`}
              {...restProps}
              state={state}
              onFocus={composeEventHandlers([onInputFocus, onFocus])}
              onBlur={composeEventHandlers([onInputBlur, onBlur])}
              onChange={composeEventHandlers([onInputChange, onChange])}
              path={path}
              type={type}
            />
          </StyledSwitch>
        </StyledSwitchContainer>
        {labelPosition === 'end' && labelElement}
      </StyledSwitchAndLabelWrapper>
    );
  },
);

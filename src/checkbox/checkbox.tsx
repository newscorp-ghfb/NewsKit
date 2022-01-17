import React, {useCallback, useRef} from 'react';
import composeRefs from '@seznam/compose-react-refs';
import {composeEventHandlers} from '../form/utils';
import {IconFilledCheck} from '../icons';
import {
  StyledCheckbox,
  StyledInput,
  StyledCheckboxContainer,
  StyledFeedback,
  StyledContainer,
  StyledLabel,
} from './styled';
import {CheckboxProps, CheckboxIconProps} from './types';
import {getComponentOverrides} from '../utils/overrides';
import {useControlled} from '../utils/hooks';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const DefaultCheckboxIcon = ({checked, overrides}: CheckboxIconProps) =>
  checked ? (
    <IconFilledCheck
      overrides={{
        size: 'iconSize020',
        ...overrides,
      }}
    />
  ) : null;

const ThemelessCheckbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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

    const [CheckIcon, checkIconProps] = getComponentOverrides(
      overrides?.icon,
      DefaultCheckboxIcon,
      {
        state,
        checked,
        size,
      },
    );

    const labelElement = (
      <StyledLabel size={size} overrides={overrides} state={state}>
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
      >
        {labelPosition === 'start' && labelElement}
        <StyledCheckboxContainer
          size={size}
          overrides={overrides}
          state={state}
          labelPosition={labelPosition}
          onMouseOver={onFeedbackMouseOver}
          onMouseLeave={onFeedbackMouseLeave}
          role="presentation"
        >
          <StyledFeedback
            size={size}
            overrides={overrides}
            state={state}
            onClick={onFeedbackClick}
            data-testid="checkbox-feedback"
            isFocused={isFocused}
            isHover={isFeedbackHover}
          />
          <StyledCheckbox
            checked={checked}
            state={state}
            overrides={overrides}
            size={size}
            isFocused={isFocused}
            isHover={isLabelHover}
            feedbackIsVisible={isFeedbackHover || isFocused}
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
              onFocus={composeEventHandlers([onInputFocus, onFocus])}
              onBlur={composeEventHandlers([onInputBlur, onBlur])}
              onChange={composeEventHandlers([onInputChange, onChange])}
            />
          </StyledCheckbox>
        </StyledCheckboxContainer>
        {labelPosition === 'end' && labelElement}
      </StyledContainer>
    );
  },
);

export const Checkbox = withOwnTheme(ThemelessCheckbox)({
  defaults,
  stylePresets,
});

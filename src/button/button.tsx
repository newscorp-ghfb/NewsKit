import React from 'react';
import {ButtonProps, ButtonSize} from './types';
import {StyledFlag} from './styled';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {as as emotionAs} from '../utils/component';
import {IndeterminateProgressIndicator} from '../icons/filled/custom/indeterminate-progress-indicator';
import {useInstrumentation, EventTrigger} from '../instrumentation';

export const Button: React.FC<ButtonProps> = ({
  children,
  overrides = {},
  ...props
}) => {
  const theme = useTheme();
  const {fireEvent} = useInstrumentation();
  const {size = ButtonSize.Medium} = props;
  const {disabled, loading, eventContext, eventOriginator = 'button'} = props;

  const buttonSettings: typeof overrides = {
    ...theme.componentDefaults.button[size],
    ...filterOutFalsyProperties(overrides),
  };

  return (
    <StyledFlag
      type="button"
      data-testid="button"
      disabled={disabled}
      loading={loading}
      {...emotionAs('button')}
      {...props}
      onClick={(...args) => {
        fireEvent({
          originator: eventOriginator,
          trigger: EventTrigger.Click,
          context: {
            ...eventContext,
          },
        });
        if (props.onClick) {
          props.onClick(...args);
        }
      }}
      overrides={buttonSettings}
    >
      {loading ? (
        <IndeterminateProgressIndicator
          overrides={{
            size: buttonSettings!.iconSize,
            stylePreset: buttonSettings.stylePreset as string,
          }}
        />
      ) : (
        children
      )}
    </StyledFlag>
  );
};

import React from 'react';
import {CSSObject} from '@emotion/core';
import {ButtonProps, ButtonSize} from './types';
import {StyledFlag} from './styled';
import {useTheme, Theme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {as as emotionAs} from '../utils/component';
import {IndeterminateProgressIndicator} from '../icons/indeterminate-progress-indicator';
import {getStylePresetFromTheme} from '../utils/style';
import {useInstrumentation, EventTrigger} from '../instrumentation';

const getIconColourValue = (theme: Theme, stylePreset: string) => {
  const buttonStylePresets = getStylePresetFromTheme(stylePreset, undefined, {
    isLoading: true,
  })({theme});
  return (buttonStylePresets &&
    buttonStylePresets.svg &&
    (buttonStylePresets.svg as CSSObject).fill) as string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  overrides = {},
  ...props
}) => {
  const theme = useTheme();
  const {fireEvent} = useInstrumentation();
  const {size = ButtonSize.Medium} = props;
  const {disabled, isLoading, eventContext, eventOriginator = 'button'} = props;

  const buttonSettings: typeof overrides = {
    ...theme.componentDefaults.button[size],
    ...filterOutFalsyProperties(overrides),
  };

  return (
    <StyledFlag
      type="button"
      data-testid="button"
      disabled={disabled}
      isLoading={isLoading}
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
      {isLoading ? (
        <IndeterminateProgressIndicator
          size={buttonSettings!.iconSize}
          color={getIconColourValue(theme, buttonSettings.stylePreset!)}
        />
      ) : (
        children
      )}
    </StyledFlag>
  );
};

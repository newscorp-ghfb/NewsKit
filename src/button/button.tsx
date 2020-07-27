import React from 'react';
import {CSSObject} from '@emotion/core';
import {ButtonProps, ButtonSize} from './types';
import {StyledFlag} from './styled';
import {useTheme} from '../themes/emotion';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {as as emotionAs} from '../utils/component';
import {IndeterminateProgressIndicator} from '../icons/indeterminate-progress-indicator';
import {getStylePresetFromTheme} from '../utils/style-preset';
import {Theme} from '../themes';

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
  const {size = ButtonSize.Medium} = props;
  const {disabled, isLoading} = props;

  const buttonSettings: typeof overrides = {
    ...theme.defaultPresets.button[size],
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

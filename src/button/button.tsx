import React from 'react';
import {ButtonProps, ButtonSize} from './types';
import {CircularProgressIndicator} from '../progress-indicator';
import {as} from '../utils/component';
import {FlagProps} from '../flag';
import {StyledFlag} from './styled';

export const buttonSizeStyleTokens: Record<ButtonSize, Partial<FlagProps>> = {
  [ButtonSize.Large]: {
    minHeight: 'sizing090',
    minWidth: 'sizing110',
    iconSize: 'iconSize030',
    padding: 'spaceInset040Squish',
    typePreset: 'buttonLarge',
  },
  [ButtonSize.Medium]: {
    minHeight: 'sizing080',
    minWidth: 'sizing100',
    iconSize: 'iconSize020',
    padding: 'spaceInset030Squish',
    typePreset: 'buttonMedium',
  },
  [ButtonSize.Small]: {
    minHeight: 'sizing060',
    minWidth: 'sizing090',
    iconSize: 'iconSize010',
    padding: 'spaceInset020Squish',
    typePreset: 'buttonSmall',
  },
};
// TODO: Move spacingInset to default presets in PPDSC-1120

export const Button: React.FC<ButtonProps> = ({
  children,
  size = ButtonSize.Medium,
  ...props
}) => {
  const buttonSizing = buttonSizeStyleTokens[size];
  const {iconSize} = buttonSizing;
  const {disabled, isLoading} = props;
  return (
    <StyledFlag
      type="button"
      data-testid="button"
      stylePreset="buttonDefault"
      space="sizing020" // TODO: Move to default presets in PPDSC-1120
      disabled={disabled}
      isLoading={isLoading}
      {...as('button')}
      {...buttonSizing}
      {...props}
    >
      {isLoading ? (
        <CircularProgressIndicator hideTrack size={iconSize} />
      ) : (
        children
      )}
    </StyledFlag>
  );
};

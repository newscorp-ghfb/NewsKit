import React from 'react';
import {ButtonProps, ButtonSize} from './types';
import {CircularProgressIndicator} from '../progress-indicator';
import {StyledFlag} from './styled';
import {useTheme} from '../themes/emotion';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {as as emotionAs} from '../utils/component';

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
        <CircularProgressIndicator hideTrack size={buttonSettings!.iconSize} />
      ) : (
        children
      )}
    </StyledFlag>
  );
};

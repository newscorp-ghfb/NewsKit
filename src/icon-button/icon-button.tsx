import React from 'react';
import {Button, ButtonSize, IconButtonProps} from '../button';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const ThemelessIconButton = ({overrides = {}, ...props}: IconButtonProps) => {
  const theme = useTheme();
  const {size = ButtonSize.Small} = props;

  const iconButtonSettings: typeof overrides = {
    ...theme.componentDefaults.iconButton[size],
    ...filterOutFalsyProperties(overrides),
  };

  return <Button {...props} size={size} overrides={iconButtonSettings} />;
};

export const IconButton = withOwnTheme(ThemelessIconButton)({
  defaults,
  stylePresets,
});

IconButton.stylePresets = stylePresets;

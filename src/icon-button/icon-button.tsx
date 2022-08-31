import React from 'react';
import {Button, IconButtonProps} from '../button';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const ThemelessIconButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  IconButtonProps
>(({overrides = {}, ...props}, ref) => {
  const theme = useTheme();
  const {size = 'small'} = props;

  const iconButtonSettings: typeof overrides = {
    ...theme.componentDefaults.iconButton[size],
    ...filterOutFalsyProperties(overrides),
  };

  return (
    <Button {...props} size={size} ref={ref} overrides={iconButtonSettings} />
  );
});

export const IconButton = withOwnTheme(ThemelessIconButton)({
  defaults,
  stylePresets,
});

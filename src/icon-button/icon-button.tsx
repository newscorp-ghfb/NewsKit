import React from 'react';
import {Button, ButtonSize, IconButtonProps} from '../button';

import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';

export const IconButton: React.FC<IconButtonProps> = ({
  overrides = {},
  ...props
}) => {
  const theme = useTheme();
  const {size = ButtonSize.Small} = props;

  const iconButtonSettings: typeof overrides = {
    ...theme.componentDefaults.iconButton[size],
    ...filterOutFalsyProperties(overrides),
  };

  return <Button {...props} size={size} overrides={iconButtonSettings} />;
};

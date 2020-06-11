import React from 'react';
import {Button, ButtonSize, ButtonProps} from '../button';

import {useTheme} from '../themes/emotion';
import {filterOutFalsyProperties} from '../utils/filter-object';

export const IconButton: React.FC<ButtonProps> = ({
  overrides = {},
  ...props
}) => {
  const theme = useTheme();
  const {size = ButtonSize.Small} = props;

  return (
    <Button
      {...props}
      size={size}
      overrides={{
        ...theme.defaultPresets.iconButton[size],
        ...filterOutFalsyProperties(overrides),
      }}
    />
  );
};

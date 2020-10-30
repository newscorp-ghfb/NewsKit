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

  return (
    <Button
      {...props}
      size={size}
      overrides={{
        ...theme.componentDefaults.iconButton[size],
        ...filterOutFalsyProperties(overrides),
      }}
    />
  );
};

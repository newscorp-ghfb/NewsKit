import {useTheme} from 'newskit';
import React from 'react';
import {ContentBase} from './content-base';
import {ContentPrimaryProps} from './types';

export const ContentPrimary: React.FC<ContentPrimaryProps> = props => {
  const theme = useTheme();

  return (
    <ContentBase
      overrides={theme.componentDefaults.contentPrimary}
      {...props}
    />
  );
};

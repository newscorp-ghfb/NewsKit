import {useTheme} from 'newskit';
import React from 'react';
import {ContentBase} from './content-base';
import {ContentTertiaryProps} from './types';

export const ContentTertiary: React.FC<ContentTertiaryProps> = props => {
  const theme = useTheme();

  return (
    <ContentBase
      overrides={theme.componentDefaults.contentTertiary}
      {...props}
    />
  );
};

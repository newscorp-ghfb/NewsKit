import {useTheme} from 'newskit';
import React from 'react';
import {ContentBase} from './content-base';
import {ContentSecondaryProps} from './types';

export const ContentSecondary: React.FC<ContentSecondaryProps> = props => {
  const theme = useTheme();

  return (
    <ContentBase
      overrides={theme.componentDefaults.contentSecondary}
      {...props}
    />
  );
};

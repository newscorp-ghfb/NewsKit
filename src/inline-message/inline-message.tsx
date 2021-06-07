import {useTheme} from '@emotion/react';
import React from 'react';
import {Toast} from '../toast';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {InlineMessageProps} from './types';

export const InlineMessage = ({overrides, ...props}: InlineMessageProps) => {
  const theme = useTheme();

  const componentOverrides = {
    ...deepMerge(
      {},
      theme.componentDefaults.inlineMessage,
      filterOutFalsyProperties(overrides),
    ),
  };

  return (
    <Toast
      role="region"
      ariaLive="off"
      data-testid="inline-message"
      {...props}
      overrides={componentOverrides}
    />
  );
};

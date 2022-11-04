import React from 'react';
import {BaseFlagOverrides, BaseFlagProps} from '../flag';
import {EventData} from '../instrumentation';

export interface TagProps
  extends Omit<BaseFlagProps<BaseFlagOverrides>, 'loading'>,
    EventData,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {}

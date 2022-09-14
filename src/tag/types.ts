import React from 'react';
import {BaseFlagOverrides, BaseFlagProps} from '../flag';

export interface TagProps
  extends Omit<BaseFlagProps<BaseFlagOverrides>, 'loading'>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {}

import React from 'react';
import {BaseFlagOverrides, BaseFlagProps} from '../flag';

export interface TagProps
  extends BaseFlagProps<BaseFlagOverrides>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {}

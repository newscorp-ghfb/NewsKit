import React from 'react';
import {FlagProps} from '../flag';

export interface TagProps
  extends FlagProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {}

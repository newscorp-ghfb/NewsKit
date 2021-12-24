import React from 'react';
import {ContentSectionProps} from './types';

export const ContentSection: React.FC<ContentSectionProps> = ({children}) => (
  <div>{children}</div>
);

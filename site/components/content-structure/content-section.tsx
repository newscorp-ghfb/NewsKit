import React from 'react';
import {ContentSectionProps} from './types';

export const ContentSection: React.FC<ContentSectionProps> = ({children}) => (
  <section style={{border: '1px solid red'}}>{children}</section>
);

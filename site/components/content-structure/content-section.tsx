import React from 'react';
import {ContentSectionProps} from './types';

export const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  toc,
  id,
}) => (
  <section id={id} data-toc-indexed={toc}>
    {children}
  </section>
);

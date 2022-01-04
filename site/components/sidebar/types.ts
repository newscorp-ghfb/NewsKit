import React from 'react';

export interface Item {
  title: React.ReactNode;
  id: string;
  page?: boolean;
  href?: string;
  subNav?: Item[];
}

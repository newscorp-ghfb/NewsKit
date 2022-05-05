import React from 'react';

export interface Item {
  title: React.ReactNode;
  id: string;
  page?: boolean;
  href?: string;
  subNav?: Item[];
  illustration?: string;
  description?: string;
}

export type PageType = {
  title: string;
  page: boolean;
  id: string;
};

type NavProps = {
  title: string;
  id: string;
  description?: string;
  page?: boolean;
};

export type SubNavProps = {
  title: string;
  id: string;
  description?: string | undefined;
  page?: boolean | undefined;
  subNav?: NavProps[] | undefined;
}[];
export type SiteMenuItemProps = {
  menuItemList: Array<{
    title: string;
    id: string;
    description?: string;
    page?: boolean;
    subNav?: NavProps[];
  }>;
};

export interface PageLinkProps {
  page?: PageType;
  href: string;
  active: boolean;

  children: React.ReactNode;
}

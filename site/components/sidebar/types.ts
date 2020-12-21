import React from 'react';

export interface Item {
  title: React.ReactNode;
  id: string;
  page?: boolean;
  href?: string;
  subNav?: Item[];
}

export type PageType = {
  title: string;
  page: boolean;
  id: string;
};

export type NavigationSectionType = {
  title: string;
  id: string;
  subNav: PageType[];
};

type SectionPropType = {
  title: string;
  id: string;
  subNav: Array<PageType | NavigationSectionType>;
};

export interface PageLinkProps {
  page: PageType;
  active: boolean;
}

export interface NavigationSectionProps {
  navigationSection: NavigationSectionType;
  activePagePath: string;
}

export interface SectionProps {
  section: SectionPropType;
  activePagePath: string;
  lastSection: boolean;
}

export interface SidebarNavProps {
  path: string;
}

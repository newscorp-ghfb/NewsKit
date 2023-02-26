import {MQ} from '../utils';
import {LogicalProps} from '../utils/logical-properties';

import {EventData} from '../instrumentation';
import {Override} from '../utils/overrides';
import {NewsKitIconProps} from '../icons';
import {ButtonProps} from '../button/types';

import {IconButtonProps} from '../icon-button/types';
import {PaginationFirstItemProps} from './components/first-item/types';
import {PaginationLastItemProps} from './components/last-item/types';
import {PaginationNextItemProps} from './components/next-item/types';
import {PaginationPrevItemProps} from './components/prev-item/types';

export type PaginationSize = 'small' | 'medium' | 'large';

export enum PaginationItemType {
  paginationItem = 'paginationItem',
  paginationItemTruncation = 'paginationItemTruncation',
  paginationItemFirst = 'paginationItemFirst',
  paginationItemPrev = 'paginationItemPrev',
  paginationItemNext = 'paginationItemNext',
  paginationItemLast = 'paginationItemLast',
}

export type PaginationLayoutItem = number | '-';

export interface PaginationItemsLayoutInput {
  currentPage: number;
  lastPage: number;
  truncation: boolean;
  siblings: number;
  boundaries: number;
}

export interface PaginationItemAriaInput {
  itemType?: PaginationItemType;
  pageNumber?: number;
  selected?: boolean;
  disabled?: boolean;
}

export interface PaginationProps extends React.AriaAttributes {
  children: Exclude<React.ReactNode, 'undefined'>;
  size?: PaginationSize;
  pageSize: number;
  currentPage: number;
  totalItems: number;
  buildHref?: (pageNumber: number) => string;
  onPageChange?: (pageNumber: number) => void;
  overrides?: {
    stylePreset?: MQ<string>;
    marginInline?: MQ<string>;
    marginInlineStart?: MQ<string>;
    marginInlineEnd?: MQ<string>;
    marginBlock?: MQ<string>;
    marginBlockStart?: MQ<string>;
    marginBlockEnd?: MQ<string>;
    paddingInline?: MQ<string>;
    paddingInlineStart?: MQ<string>;
    paddingInlineEnd?: MQ<string>;
    paddingBlock?: MQ<string>;
    paddingBlockStart?: MQ<string>;
    paddingBlockEnd?: MQ<string>;
  } & LogicalProps;
}

export interface PaginationItemsProps extends ButtonProps, EventData {
  children?: Exclude<React.ReactNode, 'undefined'>;
  truncation?: boolean;
  siblings?: number;
  boundaries?: number;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    icon?: Override<NewsKitIconProps>;
    minWidth?: MQ<string>;
    height?: MQ<string>;
    marginInline?: MQ<string>;
    marginInlineStart?: MQ<string>;
    marginInlineEnd?: MQ<string>;
    marginBlock?: MQ<string>;
    marginBlockStart?: MQ<string>;
    marginBlockEnd?: MQ<string>;
    paddingInline?: MQ<string>;
    paddingInlineStart?: MQ<string>;
    paddingInlineEnd?: MQ<string>;
    paddingBlock?: MQ<string>;
    paddingBlockStart?: MQ<string>;
    paddingBlockEnd?: MQ<string>;
  } & LogicalProps;
}

export interface PaginationItemProps extends ButtonProps, EventData {
  children: Exclude<React.ReactNode, 'undefined'>;
  itemType?: PaginationItemType;
  selected?: boolean;
  pageNumber?: number;
  href?: string;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    icon?: Override<NewsKitIconProps>;
    minWidth?: MQ<string>;
    height?: MQ<string>;
    marginInline?: MQ<string>;
    marginInlineStart?: MQ<string>;
    marginInlineEnd?: MQ<string>;
    marginBlock?: MQ<string>;
    marginBlockStart?: MQ<string>;
    marginBlockEnd?: MQ<string>;
    paddingInline?: MQ<string>;
    paddingInlineStart?: MQ<string>;
    paddingInlineEnd?: MQ<string>;
    paddingBlock?: MQ<string>;
    paddingBlockStart?: MQ<string>;
    paddingBlockEnd?: MQ<string>;
  } & LogicalProps;
}

export interface PaginationProviderContext {
  size: PaginationSize;
  pageSize: number;
  currentPage: number;
  totalItems: number;
  buildHref?: (page: number) => string;
  changePage: (page: number) => void;
  changedPage: number;
  lastPage: number;

  // Getter functions
  getFirstItemProps: (props: PaginationFirstItemProps) => IconButtonProps;
  getPrevItemProps: (props: PaginationPrevItemProps) => IconButtonProps;
  getNextItemProps: (props: PaginationNextItemProps) => IconButtonProps;
  getLastItemProps: (props: PaginationLastItemProps) => IconButtonProps;
}

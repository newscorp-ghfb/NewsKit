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
// TODO
export type PaginationItemType = 'paginationItem' | 'todo';

export type PaginationLayoutItem = number | '-';

export interface PaginationProps extends React.AriaAttributes {
  children: Exclude<React.ReactNode, 'undefined'>;
  size?: PaginationSize;
  pageSize?: number; // FIXME mand
  currentPage?: number; // FIXME mand
  totalItems?: number; // FIXME mand
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

export interface PaginationItemsProps extends React.AriaAttributes {
  children?: Exclude<React.ReactNode, 'undefined'>;
  truncation?: boolean;
  siblings?: number;
  boundaries?: number;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    boundary?: Override<NewsKitIconProps>; // FIXME rename to truncationIcon
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
  selected?: boolean;
  pageNumber?: number;
  href?: string;
  // FIXME remove
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
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
  id: string; // FIXME use?
  size: PaginationSize;
  pageSize: number; // FIXME mand
  currentPage: number; // FIXME mand
  totalItems: number; // FIXME mand
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

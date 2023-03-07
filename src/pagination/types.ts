import {MQ} from '../utils';
import {LogicalProps} from '../utils/logical-properties';

import {EventData} from '../instrumentation';
import {Override} from '../utils/overrides';
import {NewsKitIconProps} from '../icons';
import {ButtonOrButtonLinkProps, ButtonProps} from '../button/types';

import {IconButtonProps} from '../icon-button/types';
import {PaginationFirstItemProps} from './components/first-item/types';
import {PaginationLastItemProps} from './components/last-item/types';
import {PaginationNextItemProps} from './components/next-item/types';
import {PaginationPrevItemProps} from './components/prev-item/types';

export type PaginationSize = 'small' | 'medium' | 'large';

export type PaginationItemType =
  | 'paginationItem'
  | 'paginationItemTruncation'
  | 'paginationItemFirst'
  | 'paginationItemPrev'
  | 'paginationItemNext'
  | 'paginationItemLast';

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
  children?: Exclude<React.ReactNode, 'undefined'>;
  size?: PaginationSize;
  pageSize: number;
  page?: number;
  defaultPage?: number;
  totalItems: number;
  buildHref?: (pageNumber: number) => string;
  onPageChange?: (pageNumber: number) => void;
  overrides?: {
    stylePreset?: MQ<string>;
  } & LogicalProps;
}

export interface ComponentSizeProps extends React.AriaAttributes {
  path?: string;
  size?: PaginationSize;
}

export interface PaginationItemsProps extends ButtonProps, EventData {
  children?: Exclude<React.ReactNode, 'undefined'>;
  truncation?: boolean;
  siblings?: number;
  boundaries?: number;
  overrides?: ButtonProps['overrides'] & {
    icon?: Override<NewsKitIconProps>;
    itemButton?: Override<ButtonOrButtonLinkProps & PaginationItemProps>;
  };
}

export interface PaginationItemProps extends ButtonProps, EventData {
  children?: Exclude<React.ReactNode, 'undefined'>;
  itemType?: PaginationItemType;
  selected?: boolean;
  lastPage: number;
  pageNumber?: number;
  pageSize?: number;
  totalItems?: number;
  href?: string;
  overrides?: ButtonProps['overrides'] & {
    icon?: Override<NewsKitIconProps>;
    itemButton?: Override<ButtonOrButtonLinkProps & PaginationItemProps>;
  };
}

export interface PaginationProviderContext {
  size: PaginationSize;
  pageSize: number;
  currentPage: number;
  totalItems: number;
  buildHref?: (pageNumber: number) => string;
  changePage: (pageNumber: number) => void;
  page: number;
  lastPage: number;

  // Getter functions
  getFirstItemProps: (props: PaginationFirstItemProps) => IconButtonProps;
  getPrevItemProps: (props: PaginationPrevItemProps) => IconButtonProps;
  getNextItemProps: (props: PaginationNextItemProps) => IconButtonProps;
  getLastItemProps: (props: PaginationLastItemProps) => IconButtonProps;
}

import {MQ} from '../utils';
import {LogicalProps} from '../utils/logical-properties';

import {EventData} from '../instrumentation';
import {ComponentOverrides, Override} from '../utils/overrides';
import {NewsKitIconProps} from '../icons';
import {ButtonOrButtonLinkProps, ButtonProps} from '../button/types';

import {IconButtonProps} from '../icon-button/types';
import {PaginationFirstItemProps} from './components/first-item/types';
import {PaginationLastItemProps} from './components/last-item/types';
import {PaginationNextItemProps} from './components/next-item/types';
import {PaginationPrevItemProps} from './components/prev-item/types';
import {TextBlockProps} from '../text-block';

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
  page: number;
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
  page?: number;
  defaultPage?: number;
  totalItems: number;
  buildHref?: (pageNumber: number) => string;
  onPageChange?: (pageNumber: number) => void;
  overrides?: {
    stylePreset?: MQ<string>;
    spaceBetween?: MQ<string>;
    // typographyPreset?: MQ<string>;
  } & LogicalProps;
}

// export interface ComponentSizeProps extends React.AriaAttributes {
//   children?: React.ReactNode;
//   path?: string;
//   size?: PaginationSize;
// }

export interface PaginationItemDescriptionProps extends ComponentOverrides {
  selected?: boolean;
  pageNumber?: number;
  lastPage?: number;
}

export interface PaginationItemsProps extends ButtonProps, EventData {
  children?: React.ReactNode;
  truncation?: boolean;
  siblings?: number;
  boundaries?: number;
  overrides?: ButtonProps['overrides'] & {
    icon?: Override<NewsKitIconProps>;
    itemButton?: Override<ButtonOrButtonLinkProps & PaginationItemProps>;
    itemDescription?: Override<TextBlockProps & PaginationItemDescriptionProps>;
  };
}

export interface PaginationItemProps extends EventData {
  children?: React.ReactNode;
  ref?: React.RefObject<HTMLElement> | React.ForwardedRef<HTMLElement>;
  itemType?: PaginationItemType;
  pageNumber?: number;
  pageSize?: number;
  totalItems?: number;
  href?: string;
  // The below 3 are derived props
  selected?: boolean;
  lastPage?: number;
  changePage?: (pageNumber: number) => void;
  // These render functions can be used to change the appearance of the
  // truncation icon, the number button and the text description, respectively
  overrides?: ButtonProps['overrides'] & {
    icon?: Override<NewsKitIconProps>;
    itemButton?: Override<ButtonOrButtonLinkProps & PaginationItemProps>;
    itemDescription?: Override<TextBlockProps & PaginationItemDescriptionProps>;
  };
}

// The usePaginationContext hook returns this data
export interface PaginationProviderContext {
  size: PaginationSize;
  pageSize: number;
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

/// <reference types="react" />
import { MQ } from '../utils';
import { LogicalProps } from '../utils/logical-properties';
import { EventData } from '../instrumentation';
import { ComponentOverrides, Override } from '../utils/overrides';
import { NewsKitIconProps } from '../icons';
import { ButtonOrButtonLinkProps, ButtonProps } from '../button';
import { IconButtonProps } from '../icon-button/types';
import { PaginationFirstItemProps } from './components/first-item';
import { PaginationLastItemProps } from './components/last-item';
import { PaginationNextItemProps } from './components/next-item';
import { PaginationPrevItemProps } from './components/prev-item';
import { TextBlockProps } from '../text-block';
export type PaginationSize = 'small' | 'medium' | 'large';
export type PaginationItemType = 'paginationItem' | 'paginationItemTruncation' | 'paginationItemFirst' | 'paginationItemPrev' | 'paginationItemNext' | 'paginationItemLast';
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
        typographyPreset?: MQ<string>;
        gap?: MQ<string>;
    } & LogicalProps;
}
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
    ref?: React.RefObject<HTMLElement | null> | React.ForwardedRef<HTMLElement>;
    itemType?: PaginationItemType;
    pageNumber?: number;
    pageSize?: number;
    totalItems?: number;
    href?: string;
    selected?: boolean;
    lastPage?: number;
    changePage?: (pageNumber: number) => void;
    overrides?: ButtonProps['overrides'] & {
        icon?: Override<NewsKitIconProps>;
        itemButton?: Override<ButtonOrButtonLinkProps & PaginationItemProps>;
        itemDescription?: Override<TextBlockProps & PaginationItemDescriptionProps>;
    };
}
export interface PaginationProviderContext {
    size: PaginationSize;
    pageSize: number;
    totalItems: number;
    buildHref?: (pageNumber: number) => string;
    changePage: (pageNumber: number) => void;
    page: number;
    lastPage: number;
    getFirstItemProps: (props: PaginationFirstItemProps) => IconButtonProps;
    getPrevItemProps: (props: PaginationPrevItemProps) => IconButtonProps;
    getNextItemProps: (props: PaginationNextItemProps) => IconButtonProps;
    getLastItemProps: (props: PaginationLastItemProps) => IconButtonProps;
}
//# sourceMappingURL=types.d.ts.map
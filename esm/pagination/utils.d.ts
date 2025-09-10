import { PaginationItemAriaInput, PaginationItemsLayoutInput, PaginationLayoutItem } from './types';
export declare const getPaginationItemsLayout: ({ page, lastPage, truncation, siblings, boundaries, }: PaginationItemsLayoutInput) => [PaginationLayoutItem?];
export declare const getPaginationItemAria: ({ itemType, pageNumber, selected, disabled, }: PaginationItemAriaInput) => Record<string, unknown>;
//# sourceMappingURL=utils.d.ts.map
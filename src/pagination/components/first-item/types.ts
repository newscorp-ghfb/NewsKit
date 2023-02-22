import {PaginationIconButtonWithShortcuts} from '../types';

export type PaginationFirstItemProps = PaginationIconButtonWithShortcuts & {
  currentPage?: number;
  onClick?: () => void;
};

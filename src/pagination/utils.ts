import {
  PaginationItemAriaInput,
  PaginationItemsLayoutInput,
  PaginationLayoutItem,
} from './types';

const appendSiblings = (
  layout: [PaginationLayoutItem?],
  fromSibling: number,
  toSibling: number,
) => {
  for (let page = fromSibling; page <= toSibling; page++) {
    layout.push(page);
  }
};

const appendBoundariesAtStart = (
  layout: [PaginationLayoutItem?],
  boundaries: number,
  fromSibling: number,
) => {
  if (boundaries && fromSibling > 1) {
    const toBoundaryAtStart = Math.min(boundaries, fromSibling - 1);
    for (let page = 1; page <= toBoundaryAtStart; page++) {
      layout.push(page);
    }
    layout.push('-');
  }
};

const appendBoundariesAtEnd = (
  layout: [PaginationLayoutItem?],
  boundaries: number,
  toSibling: number,
  lastPage: number,
) => {
  if (boundaries && toSibling < lastPage) {
    const fromBoundaryAtEnd = Math.max(
      lastPage - boundaries + 1,
      toSibling + 1,
    );
    layout.push('-');
    for (let page = fromBoundaryAtEnd; page <= lastPage; page++) {
      layout.push(page);
    }
  }
};

export const getItemsLayout = ({
  currentPage,
  lastPage,
  truncation,
  siblings,
  boundaries,
}: PaginationItemsLayoutInput): [PaginationLayoutItem?] => {
  const layout: [PaginationLayoutItem?] = [];
  if (currentPage < 1 || lastPage < 1) {
    return layout;
  }
  if (truncation) {
    if (siblings) {
      const fromSibling = Math.max(1, currentPage - siblings);
      const toSibling = Math.min(currentPage + siblings, lastPage);

      appendBoundariesAtStart(layout, boundaries, fromSibling);

      appendSiblings(layout, fromSibling, toSibling);

      appendBoundariesAtEnd(layout, boundaries, toSibling, lastPage);
    }
  } else {
    for (let page = 1; page <= lastPage; page++) {
      layout.push(page);
    }
  }
  return layout;
};

export const getItemAria = ({
  itemType,
  pageNumber,
  selected,
  disabled,
}: PaginationItemAriaInput): Record<string, unknown> => {
  const ariaProps: Record<string, unknown> = {};
  switch (itemType) {
    case 'paginationItemFirst':
      if (!disabled) {
        ariaProps['aria-label'] = 'go to first page';
      }
      break;
    case 'paginationItemPrev':
      if (!disabled) {
        ariaProps['aria-label'] = 'go to previous page';
      }
      break;
    case 'paginationItemNext':
      if (!disabled) {
        ariaProps['aria-label'] = 'go to next page';
      }
      break;
    case 'paginationItemLast':
      if (!disabled) {
        ariaProps['aria-label'] = 'go to last page';
      }
      break;
    case 'paginationItemTruncation':
      if (!disabled) {
        ariaProps['aria-label'] = 'dots';
      }
      break;
    default:
      if (pageNumber) {
        ariaProps['aria-label'] = selected
          ? `current page, page ${pageNumber}`
          : `go to page ${pageNumber}`;
      }
      ariaProps['aria-current'] = selected && 'page';
      break;
  }

  if (disabled) {
    ariaProps['aria-disabled'] = 'true';
  }

  return ariaProps;
};

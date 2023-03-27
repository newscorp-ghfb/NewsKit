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
  for (let pageNumber = fromSibling; pageNumber <= toSibling; pageNumber++) {
    layout.push(pageNumber);
  }
};

const appendBoundariesAtStart = (
  layout: [PaginationLayoutItem?],
  boundaries: number,
  fromSibling: number,
) => {
  if (boundaries && fromSibling > 1) {
    const extreme = fromSibling - 1;
    const toBoundaryAtStart = Math.min(boundaries, extreme);
    for (let pageNumber = 1; pageNumber <= toBoundaryAtStart; pageNumber++) {
      layout.push(pageNumber);
    }
    if (toBoundaryAtStart < extreme) {
      layout.push('-');
    }
  }
};

const appendBoundariesAtEnd = (
  layout: [PaginationLayoutItem?],
  boundaries: number,
  toSibling: number,
  lastPage: number,
) => {
  if (boundaries && toSibling < lastPage) {
    const extreme = toSibling + 1;
    const fromBoundaryAtEnd = Math.max(lastPage - boundaries + 1, extreme);
    if (fromBoundaryAtEnd > extreme) {
      layout.push('-');
    }
    for (let page = fromBoundaryAtEnd; page <= lastPage; page++) {
      layout.push(page);
    }
  }
};

export const getPaginationItemsLayout = ({
  page,
  lastPage,
  truncation,
  siblings,
  boundaries,
}: PaginationItemsLayoutInput): [PaginationLayoutItem?] => {
  const layout: [PaginationLayoutItem?] = [];
  if (page < 1 || lastPage < 1) {
    return layout;
  }
  if (truncation) {
    if (siblings >= 0) {
      const fromSibling = Math.max(1, page - siblings);
      const toSibling = Math.min(page + siblings, lastPage);

      appendBoundariesAtStart(layout, boundaries, fromSibling);

      appendSiblings(layout, fromSibling, toSibling);

      appendBoundariesAtEnd(layout, boundaries, toSibling, lastPage);
    }
  } else {
    for (let pageNumber = 1; pageNumber <= lastPage; pageNumber++) {
      layout.push(pageNumber);
    }
  }
  return layout;
};

export const getPaginationItemAria = ({
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
      if (selected) {
        ariaProps['aria-current'] = 'page';
      }
      break;
  }

  if (disabled) {
    ariaProps['aria-disabled'] = 'true';
  }

  return ariaProps;
};

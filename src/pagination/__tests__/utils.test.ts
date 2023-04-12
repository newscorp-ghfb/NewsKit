import {PaginationItemType} from '../types';
import {getPaginationItemsLayout, getPaginationItemAria} from '../utils';

describe('getPaginationItemsLayout', () => {
  it('should return empty array if no pages', () => {
    const values = {
      page: 0,
      lastPage: 0,
      truncation: false,
      siblings: 3,
      boundaries: 1,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout).toEqual([]);
  });

  it('should return empty array if page or lastPage < 1', () => {
    const values = {
      page: 0,
      lastPage: 0,
      truncation: true,
      siblings: 3,
      boundaries: 1,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout).toEqual([]);
  });

  it('should return empty array if truncation and less than zero siblings', () => {
    const values = {
      page: 2,
      lastPage: 20,
      truncation: true,
      siblings: -1,
      boundaries: 1,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout).toEqual([]);
  });

  it('should return array containing only current page when zero siblings', () => {
    const values = {
      page: 2,
      lastPage: 20,
      truncation: true,
      siblings: 0,
      boundaries: 0,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout).toEqual([2]);
  });

  it('should return array containing first and last items when zero siblings and 1 boundary', () => {
    const values = {
      page: 2,
      lastPage: 20,
      truncation: true,
      siblings: 0,
      boundaries: 1,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('1 2 - 20'); // Not '1 - 2 - 20'
  });

  it('should return array containing 2 truncations when zero siblings and 1 boundary', () => {
    const values = {
      page: 3,
      lastPage: 20,
      truncation: true,
      siblings: 0,
      boundaries: 1,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('1 - 3 - 20');
  });

  it('should return all pages when no truncation', () => {
    const values = {
      page: 10,
      lastPage: 20,
      truncation: false,
      siblings: 3,
      boundaries: 1,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual(
      '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20',
    );
  });

  it('should return 3 consecutive pages when 1 sibling', () => {
    const values = {
      page: 10,
      lastPage: 20,
      truncation: true,
      siblings: 1,
      boundaries: 0,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('9 10 11');
  });

  it('should return 5 consecutive pages when 2 siblings', () => {
    const values = {
      page: 10,
      lastPage: 20,
      truncation: true,
      siblings: 2,
      boundaries: 0,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('8 9 10 11 12');
  });

  it('should return 7 consecutive pages when 3 siblings', () => {
    const values = {
      page: 10,
      lastPage: 20,
      truncation: true,
      siblings: 3,
      boundaries: 0,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('7 8 9 10 11 12 13');
  });

  it('should return 1 boundary, a truncation, siblings, a truncation and 1 boundary', () => {
    const values = {
      page: 10,
      lastPage: 20,
      truncation: true,
      siblings: 1,
      boundaries: 1,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('1 - 9 10 11 - 20');
  });

  it('should return 2 boundaries, a truncation, siblings, a truncation and 2 boundaries', () => {
    const values = {
      page: 10,
      lastPage: 20,
      truncation: true,
      siblings: 1,
      boundaries: 2,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('1 2 - 9 10 11 - 19 20');
  });

  it('should return 3 boundaries, a truncation, siblings, a truncation and 3 boundaries', () => {
    const values = {
      page: 10,
      lastPage: 20,
      truncation: true,
      siblings: 1,
      boundaries: 3,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('1 2 3 - 9 10 11 - 18 19 20');
  });

  it('should return 2 boundaries, no truncations, siblings, a truncation and 3 boundaries when there is overlap with siblings', () => {
    const values = {
      page: 5,
      lastPage: 10,
      truncation: true,
      siblings: 2,
      boundaries: 3,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('1 2 3 4 5 6 7 8 9 10'); // Not '1 2 - 3 4 5 6 7 - 8 9 10'
  });

  it('should return 2 boundaries, 2 truncations, siblings, a truncation and 3 boundaries when there is no overlap with siblings', () => {
    const values = {
      page: 10,
      lastPage: 20,
      truncation: true,
      siblings: 2,
      boundaries: 3,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('1 2 3 - 8 9 10 11 12 - 18 19 20');
  });

  it('should return 1 truncation when there is partial overlap with siblings', () => {
    const values = {
      page: 5,
      lastPage: 20,
      truncation: true,
      siblings: 2,
      boundaries: 3,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('1 2 3 4 5 6 7 - 18 19 20');
  });

  it('should return no boundary or truncation, siblings, a truncation and 1 boundary when there is more overlap with siblings', () => {
    const values = {
      page: 5,
      lastPage: 10,
      truncation: true,
      siblings: 4,
      boundaries: 3,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('1 2 3 4 5 6 7 8 9 10'); // Not '1 2 3 4 5 6 7 8 9 - 10'
  });

  it('should return no boundary or truncation, siblings, no truncation or boundary when there is total overlap with siblings', () => {
    const values = {
      page: 5,
      lastPage: 10,
      truncation: true,
      siblings: 5,
      boundaries: 3,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('1 2 3 4 5 6 7 8 9 10');
  });

  it('should return no truncation, when there is total boundary numbers are consecutive with the siblings', () => {
    const values = {
      page: 3,
      lastPage: 5,
      truncation: true,
      siblings: 0,
      boundaries: 2,
    };
    const layout = getPaginationItemsLayout(values);
    expect(layout.join(' ')).toEqual('1 2 3 4 5'); // Not '1 2 - 3 - 4 5'
  });
});

describe('getPaginationItemAria', () => {
  it('should return properties for normal item', () => {
    const values = {
      itemType: 'paginationItem' as PaginationItemType,
      pageNumber: 2,
      selected: false,
      disabled: false,
    };
    const ariaProps = getPaginationItemAria(values);
    expect(ariaProps).toEqual({
      'aria-label': 'go to page 2',
    });
  });

  it('should return properties for normal item that is selected', () => {
    const values = {
      itemType: 'paginationItem' as PaginationItemType,
      pageNumber: 2,
      selected: true,
      disabled: false,
    };
    const ariaProps = getPaginationItemAria(values);
    expect(ariaProps).toEqual({
      'aria-current': 'page',
      'aria-label': 'current page, page 2',
    });
  });

  it('should return properties for normal item that is disabled', () => {
    const values = {
      itemType: 'paginationItem' as PaginationItemType,
      pageNumber: 2,
      selected: false,
      disabled: true,
    };
    const ariaProps = getPaginationItemAria(values);
    expect(ariaProps).toEqual({
      'aria-disabled': 'true',
      'aria-label': 'go to page 2',
    });
  });

  it('should return properties for truncation icon item', () => {
    const values = {
      itemType: 'paginationItemTruncation' as PaginationItemType,
      pageNumber: undefined,
      selected: false,
      disabled: false,
    };
    const ariaProps = getPaginationItemAria(values);
    expect(ariaProps).toEqual({
      'aria-label': 'dots',
    });
  });

  it('should return properties for first icon item', () => {
    const values = {
      itemType: 'paginationItemFirst' as PaginationItemType,
      pageNumber: 2,
      selected: false,
      disabled: false,
    };
    const ariaProps = getPaginationItemAria(values);
    expect(ariaProps).toEqual({
      'aria-label': 'go to first page',
    });
  });

  it('should return properties for last icon item', () => {
    const values = {
      itemType: 'paginationItemLast' as PaginationItemType,
      pageNumber: 2,
      selected: false,
      disabled: false,
    };
    const ariaProps = getPaginationItemAria(values);
    expect(ariaProps).toEqual({
      'aria-label': 'go to last page',
    });
  });

  it('should return properties for previous icon item', () => {
    const values = {
      itemType: 'paginationItemPrev' as PaginationItemType,
      pageNumber: 2,
      selected: false,
      disabled: false,
    };
    const ariaProps = getPaginationItemAria(values);
    expect(ariaProps).toEqual({
      'aria-label': 'go to previous page',
    });
  });

  it('should return properties for next icon item', () => {
    const values = {
      itemType: 'paginationItemNext' as PaginationItemType,
      pageNumber: 2,
      selected: false,
      disabled: false,
    };
    const ariaProps = getPaginationItemAria(values);
    expect(ariaProps).toEqual({
      'aria-label': 'go to next page',
    });
  });
});

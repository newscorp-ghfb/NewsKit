import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
} from '../../test/test-utils';
import {
  PaginationItemProps,
  PaginationItemsProps,
  PaginationSize,
} from '../types';
import {Pagination} from '../pagination';
import {PaginationFirstItem} from '../components/first-item';
import {PaginationLastItem} from '../components/last-item';
import {PaginationPrevItem} from '../components/prev-item';
import {PaginationNextItem} from '../components/next-item';
import {PaginationItem} from '../components/item/pagination-item';
import {PaginationItems} from '../components/items/pagination-items';
import {
  IconFilledAddCircleOutline,
  IconFilledCircle,
  IconOutlinedTrendingFlat,
  NewsKitIconProps,
} from '../../icons';
import {TextBlock} from '../../text-block';
import {EventTrigger} from '../../instrumentation';
import {compileTheme, createTheme} from '../../theme';

const paginationItemContent = 'Pagination Item';
const textBlock = '...';
const selected = false;
const pageNumber = 3;
const href = 'https://paginationitem.test';
const pageItemProps = {
  selected,
  pageNumber,
  href,
};
const buildHref = jest.fn((page: number) => `${href}/${page}`);
const onClick = jest.fn();
const onPageChange = jest.fn((page: number) => page);
const lastPage = 24;
const defaultProps = {
  totalItems: 232,
  pageSize: 10,
  currentPage: 4,
  buildHref,
  onPageChange,
};
// defaults to truncation: true, siblings: 3, boundaries: 1
const defaultItemsProps = {truncation: false, siblings: 3, boundaries: 1};

const PaginationWithItems = (props: PaginationItemsProps) => (
  <Pagination {...defaultProps}>
    <PaginationFirstItem key="1" {...props} onClick={onClick} />
    <PaginationPrevItem key="2" {...props} onClick={onClick} />
    <PaginationItems key="3" {...props} />
    <PaginationNextItem key="4" {...props} onClick={onClick} />
    <PaginationLastItem key="5" {...props} onClick={onClick} />
  </Pagination>
);

const PaginationWithItem = (props: PaginationItemProps) => (
  <Pagination {...defaultProps}>
    <PaginationItem size="small" key="1" {...props} />
  </Pagination>
);

const defaultPaginationItems = [
  <PaginationItems key="3" {...defaultItemsProps} />,
];

const defaultPaginationIconsAndItems = [
  <PaginationFirstItem key="1" />,
  <PaginationPrevItem key="2" />,
  <PaginationItems key="3" {...defaultItemsProps} />,
  <PaginationNextItem key="4" />,
  <PaginationLastItem key="5" />,
];

const PaginationSizeArray = ['small', 'medium', 'large'];

describe('Pagination and PaginationItems only', () => {
  test.each(PaginationSizeArray)('renders in %s pageSize', currentSize => {
    const props = {
      ...defaultProps,
      children: defaultPaginationItems,
      href,
    };
    const fragment = renderToFragmentWithTheme(Pagination, {
      ...props,
      size: (currentSize as 'small' | 'medium' | 'large') as PaginationSize,
    });
    expect(fragment).toMatchSnapshot();
  });

  it(`renders with mandatory props set`, () => {
    const props = {
      ...defaultProps,
      children: defaultPaginationItems,
    };
    const fragment = renderToFragmentWithTheme(Pagination, props);
    expect(fragment).toMatchSnapshot();
  });

  it(`renders with logical prop overrides`, () => {
    const props = {
      ...defaultProps,
      children: defaultPaginationItems,
      overrides: {
        paddingInline: '30px',
        marginBlock: '20px',
      },
    };
    const fragment = renderToFragmentWithTheme(Pagination, props);
    expect(fragment).toMatchSnapshot();
  });

  it(`renders with truncation icon as overrides`, () => {
    const itemsProps = {
      ...defaultItemsProps,
      overrides: {
        icon: () => (
          <IconOutlinedTrendingFlat
            overrides={{
              size: 'iconSize020',
              paddingInline: 'space020',
              stylePreset: 'paginationBoundary',
            }}
          />
        ),
      },
    };
    const props = {
      ...defaultProps,
      children: [<PaginationItems key="3" {...itemsProps} />],
    };
    const fragment = renderToFragmentWithTheme(Pagination, props);
    expect(fragment).toMatchSnapshot();
  });

  it(`renders with truncation overrides with TextBlock component`, () => {
    const itemsProps = {
      ...defaultItemsProps,
      overrides: {
        icon: () => <TextBlock>{textBlock}</TextBlock>,
      },
    };
    const props = {
      ...defaultProps,
      children: [<PaginationItems key="3" {...itemsProps} />],
    };
    const fragment = renderToFragmentWithTheme(Pagination, props);
    expect(fragment).toMatchSnapshot();
  });
});

describe('Pagination, navigation icons and PaginationItems', () => {
  it('renders with default props', () => {
    const props = {
      ...defaultProps,
      children: defaultPaginationIconsAndItems,
    };
    const fragment = renderToFragmentWithTheme(Pagination, props);
    expect(fragment).toMatchSnapshot();
  });

  test('fire tracking event on normal item near the start', async () => {
    const mockFireEvent = jest.fn();
    const props = {
      eventContext: {
        event: 'event data',
      },
    };
    const {getAllByTestId} = renderWithImplementation(
      PaginationWithItems,
      props,
      mockFireEvent,
    );

    const paginationItems = getAllByTestId('pagination-item');
    expect(paginationItems).toHaveLength(9);

    fireEvent.click(paginationItems[1]);
    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'pagination-item',
      trigger: EventTrigger.Click,
      context: {
        href: 'https://paginationitem.test/2',
        event: 'event data',
      },
    });
  });

  test('fire tracking event on normal item near the end', async () => {
    const mockFireEvent = jest.fn();
    const props = {
      eventContext: {
        event: 'event data',
      },
    };
    const {getAllByTestId} = renderWithImplementation(
      PaginationWithItems,
      props,
      mockFireEvent,
    );

    const paginationItems = getAllByTestId('pagination-item');
    expect(paginationItems).toHaveLength(9);

    fireEvent.click(paginationItems[6]);
    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'pagination-item',
      trigger: EventTrigger.Click,
      context: {
        href: 'https://paginationitem.test/7',
        event: 'event data',
      },
    });
  });

  test('fire tracking event on First item', async () => {
    const mockFireEvent = jest.fn();
    const props = {
      eventContext: {
        event: 'event data',
      },
    };
    const {getByTestId} = renderWithImplementation(
      PaginationWithItems,
      props,
      mockFireEvent,
    );
    const paginationItemButton = getByTestId('pagination-first-item');
    fireEvent.click(paginationItemButton);
    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'pagination-first-item',
      trigger: EventTrigger.Click,
      context: {
        href: 'https://paginationitem.test/1',
        event: 'event data',
      },
    });
    expect(onClick).toHaveBeenCalled();
    expect(onPageChange).toHaveBeenCalled();
  });

  test('fire tracking event on Prev item', async () => {
    const mockFireEvent = jest.fn();
    const props = {
      eventContext: {
        event: 'event data',
      },
    };
    const {getByTestId} = renderWithImplementation(
      PaginationWithItems,
      props,
      mockFireEvent,
    );
    const paginationItemButton = getByTestId('pagination-prev-item');
    fireEvent.click(paginationItemButton);
    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'pagination-prev-item',
      trigger: EventTrigger.Click,
      context: {
        href: 'https://paginationitem.test/3',
        event: 'event data',
      },
    });
    expect(onClick).toHaveBeenCalled();
    expect(onPageChange).toHaveBeenCalled();
  });

  test('fire tracking event on Next item', async () => {
    const mockFireEvent = jest.fn();
    const props = {
      eventContext: {
        event: 'event data',
      },
    };
    const {getByTestId} = renderWithImplementation(
      PaginationWithItems,
      props,
      mockFireEvent,
    );
    const paginationItemButton = getByTestId('pagination-next-item');
    fireEvent.click(paginationItemButton);
    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'pagination-next-item',
      trigger: EventTrigger.Click,
      context: {
        href: 'https://paginationitem.test/5',
        event: 'event data',
      },
    });
    expect(onClick).toHaveBeenCalled();
    expect(onPageChange).toHaveBeenCalled();
  });

  test('fire tracking event on Last item', async () => {
    const mockFireEvent = jest.fn();
    const props = {
      eventContext: {
        event: 'event data',
      },
    };
    const {getByTestId} = renderWithImplementation(
      PaginationWithItems,
      props,
      mockFireEvent,
    );
    const paginationItemButton = getByTestId('pagination-last-item');
    fireEvent.click(paginationItemButton);
    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'pagination-last-item',
      trigger: EventTrigger.Click,
      context: {
        href: 'https://paginationitem.test/24',
        event: 'event data',
      },
    });
    expect(onClick).toHaveBeenCalled();
    expect(onPageChange).toHaveBeenCalled();
  });
});

describe('PaginationItem', () => {
  it('renders with default props', () => {
    const props = {
      size: 'medium' as PaginationSize,
      children: paginationItemContent,
      ...pageItemProps,
    } as PaginationItemProps;
    const fragment = renderToFragmentWithTheme(PaginationWithItem, props);
    expect(fragment).toMatchSnapshot();
  });

  it('renders with overrides.itemButton', () => {
    const props = {
      size: 'medium' as PaginationSize,
      children: paginationItemContent,
      ...pageItemProps,
      overrides: {
        itemButton: itemButtonProps => (
          <IconFilledCircle
            {...(itemButtonProps as NewsKitIconProps)}
            overrides={{
              size: 'iconSize020',
              paddingInline: 'space020',
              stylePreset: 'paginationItem',
            }}
          />
        ),
      },
    } as PaginationItemProps;
    const fragment = renderToFragmentWithTheme(PaginationWithItem, props);
    expect(fragment).toMatchSnapshot();
  });

  test('fire tracking event on normal item', async () => {
    const mockFireEvent = jest.fn();
    const props = {
      ...pageItemProps,
      lastPage,
      children: paginationItemContent,
      key: '1',
      eventOriginator: 'pagination-item',
      eventContext: {
        event: 'event data',
      },
    };

    const {getByTestId} = renderWithImplementation(
      PaginationWithItem,
      props,
      mockFireEvent,
    );
    const paginationItemButton = getByTestId('pagination-item');
    fireEvent.click(paginationItemButton);
    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'pagination-item',
      trigger: EventTrigger.Click,
      context: {
        href: 'https://paginationitem.test',
        event: 'event data',
      },
    });
  });

  it('renders selected pagination item with aria attributes', () => {
    const props = {
      ...pageItemProps,
      lastPage,
      children: [<IconFilledAddCircleOutline key="i" />],
      selected: true,
    };
    const fragment = renderToFragmentWithTheme(PaginationWithItem, props);
    expect(fragment).toMatchSnapshot();
  });

  it('renders with overrides', () => {
    const myCustomTheme = compileTheme(
      createTheme({
        name: 'pagination-item-theme',
        overrides: {
          stylePresets: {
            paginationItemCustom: {
              base: {
                backgroundColor: 'pink',
                color: 'red',
              },
            },
          },
        },
      }),
    );
    const props = {
      ...pageItemProps,
      lastPage,
      children: paginationItemContent,
      key: '1',
      overrides: {
        stylePreset: ' paginationItemCustom',
        typographyPreset: 'utilityButton030',
        minWidth: '27px',
        spaceInline: 'space030',
        spaceInset: 'space030',
        iconSize: 'iconSize030',
      },
    };
    const fragment = renderToFragmentWithTheme(
      PaginationWithItem,
      props,
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });
});

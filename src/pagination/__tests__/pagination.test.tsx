import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
} from '../../test/test-utils';
import {
  PaginationItemProps,
  PaginationItemsProps,
  PaginationProps,
  PaginationSize,
} from '../types';
import {Pagination} from '../pagination';
import {
  PaginationFirstItem,
  PaginationFirstItemProps,
} from '../components/first-item';
import {
  PaginationLastItem,
  PaginationLastItemProps,
} from '../components/last-item';
import {
  PaginationPrevItem,
  PaginationPrevItemProps,
} from '../components/prev-item';
import {
  PaginationNextItem,
  PaginationNextItemProps,
} from '../components/next-item';
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
import {PaginationListItem} from '../components/list-item';

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
const lastPage = 24;

// defaults to truncation: true, siblings: 3, boundaries: 1
const defaultItemsProps = {truncation: false, siblings: 3, boundaries: 1};

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

const iconOverrides = {
  icon: () => <div data-testid="custom-icon" />,
};

const PaginationSizeArray = ['small', 'medium', 'large'];

type PaginationWithItemsProps = {
  props: PaginationProps;
  navProps?:
    | PaginationFirstItemProps
    | PaginationPrevItemProps
    | PaginationNextItemProps
    | PaginationLastItemProps;
  itemsProps?: PaginationItemsProps;
};

const PaginationWithItems = ({
  props,
  navProps,
  itemsProps,
}: PaginationWithItemsProps) => (
  <Pagination {...props}>
    <PaginationFirstItem key="1" {...navProps} />
    <PaginationPrevItem key="2" {...navProps} />
    <PaginationItems key="3" {...itemsProps} />
    <PaginationNextItem key="4" {...navProps} />
    <PaginationLastItem key="5" {...navProps} />
  </Pagination>
);

type PaginationWithItemProps = {
  props: PaginationProps;
  itemProps: PaginationItemProps;
};

const PaginationWithItem = ({props, itemProps}: PaginationWithItemProps) => (
  <PaginationListItem>
    <Pagination {...props}>
      <PaginationItem size="small" key="1" {...itemProps} />
    </Pagination>
  </PaginationListItem>
);

describe('Pagination and PaginationItems only', () => {
  let buildHref: (pageNumber: number) => string;
  let onClick: () => void;
  let onPageChange: (pageNumber: number) => void;
  let defaultProps: PaginationProps;
  let controlledProps: PaginationProps;

  beforeEach(() => {
    jest.resetAllMocks();
    buildHref = jest.fn((page: number) => `${href}/${page}`);
    onClick = jest.fn();
    onPageChange = jest.fn((page: number) => page);
    defaultProps = {
      totalItems: 232,
      pageSize: 10,
      defaultPage: 4,
      buildHref,
      children: null,
    };
    controlledProps = {
      totalItems: 232,
      pageSize: 10,
      page: 4,
      defaultPage: 4,
      onPageChange,
      children: null,
    };
  });

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

    it('warns if too few props set', () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const props = {
        totalItems: 232,
        pageSize: 10,
        defaultPage: 4,
        children: defaultPaginationItems,
      };
      renderToFragmentWithTheme(Pagination, props);
      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        'Pagination must have either buildHref OR onPageChange set.',
      );
    });

    it('warns if too many props set', () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const props = {
        buildHref,
        onPageChange,
        totalItems: 232,
        pageSize: 10,
        defaultPage: 4,
        children: defaultPaginationItems,
      };
      renderToFragmentWithTheme(Pagination, props);
      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        'Pagination must have either buildHref OR onPageChange set.',
      );
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
    it('renders with uncontrolled props', () => {
      const props = {
        ...defaultProps,
        children: defaultPaginationIconsAndItems,
      };
      const fragment = renderToFragmentWithTheme(Pagination, props);
      expect(fragment).toMatchSnapshot();
    });

    it('renders with controlled props', () => {
      const props = {
        pageSize: 1,
        totalItems: 1,
        page: 1,
        buildHref,
        children: defaultPaginationIconsAndItems,
      };
      const fragment = renderToFragmentWithTheme(Pagination, props);
      expect(fragment).toMatchSnapshot();
    });

    it('renders with overridden navigation icons', () => {
      const navProps = {
        overrides: iconOverrides,
      };
      const {getAllByTestId} = renderWithImplementation(PaginationWithItems, {
        props: defaultProps,
        navProps,
      });

      const paginationItems = getAllByTestId('custom-icon');
      expect(paginationItems).toHaveLength(4);
    });

    test('fire tracking event on First item', async () => {
      const mockFireEvent = jest.fn();
      const navProps = {
        eventContext: {
          event: 'event data',
        },
        onClick,
      };
      const {getByTestId} = renderWithImplementation(
        PaginationWithItems,
        {props: defaultProps, navProps},
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
      expect(onPageChange).not.toHaveBeenCalled();
    });

    test('fire tracking event on Prev item', async () => {
      const mockFireEvent = jest.fn();
      const navProps = {
        eventContext: {
          event: 'event data',
        },
        onClick,
      };
      const {getByTestId} = renderWithImplementation(
        PaginationWithItems,
        {props: defaultProps, navProps},
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
      expect(onPageChange).not.toHaveBeenCalled();
    });

    test('fire tracking event on Next item', async () => {
      const mockFireEvent = jest.fn();
      const navProps = {
        eventContext: {
          event: 'event data',
        },
        onClick,
      };
      const {getByTestId} = renderWithImplementation(
        PaginationWithItems,
        {props: defaultProps, navProps},
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
      expect(onPageChange).not.toHaveBeenCalled();
    });

    test('fire tracking event on Last item', async () => {
      const mockFireEvent = jest.fn();
      const navProps = {
        eventContext: {
          event: 'event data',
        },
        onClick,
      };
      const {getByTestId} = renderWithImplementation(
        PaginationWithItems,
        {props: defaultProps, navProps},
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
      expect(onPageChange).not.toHaveBeenCalled();
    });

    test('fire tracking event on normal item when onPageChange not set', async () => {
      const mockFireEvent = jest.fn();
      const itemsProps = {
        eventContext: {
          event: 'event data',
        },
        onClick,
      };
      const {getAllByTestId} = renderWithImplementation(
        PaginationWithItems,
        {props: defaultProps, itemsProps},
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
      expect(onPageChange).not.toHaveBeenCalled();
    });

    test('fire tracking event on normal item when onPageChange set', async () => {
      const mockFireEvent = jest.fn();
      const itemsProps = {
        eventContext: {
          event: 'event data',
        },
        onClick,
      };
      const {getAllByTestId} = renderWithImplementation(
        PaginationWithItems,
        {props: controlledProps, itemsProps},
        mockFireEvent,
      );

      const paginationItems = getAllByTestId('pagination-item');
      expect(paginationItems).toHaveLength(9);

      fireEvent.click(paginationItems[6]);
      expect(mockFireEvent).toHaveBeenCalledWith({
        originator: 'pagination-item',
        trigger: EventTrigger.Click,
        context: {
          page: 7,
          event: 'event data',
        },
      });
      expect(onPageChange).toHaveBeenCalled();
    });
  });

  describe('PaginationItem', () => {
    it('renders with default props', () => {
      const itemProps = {
        size: 'medium' as PaginationSize,
        children: paginationItemContent,
        ...pageItemProps,
      } as PaginationItemProps;
      const fragment = renderToFragmentWithTheme(PaginationWithItem, {
        props: defaultProps,
        itemProps,
      });
      expect(fragment).toMatchSnapshot();
    });

    it('renders with overrides.itemButton', () => {
      const itemProps = {
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
      const fragment = renderToFragmentWithTheme(PaginationWithItem, {
        props: defaultProps,
        itemProps,
      });
      expect(fragment).toMatchSnapshot();
    });

    it('renders with overrides.itemDescription', () => {
      const itemProps = {
        size: 'medium' as PaginationSize,
        children: paginationItemContent,
        ...pageItemProps,
        overrides: {
          itemButton: () => null,
          itemDescription: props => (
            <span>
              Page {props.pageNumber} of {props.lastPage}
            </span>
          ),
        },
      } as PaginationItemProps;
      const fragment = renderToFragmentWithTheme(PaginationWithItem, {
        props: defaultProps,
        itemProps,
      });
      expect(fragment).toMatchSnapshot();
    });

    test('fire tracking event on normal item with href set and onPageChange unset', async () => {
      const mockFireEvent = jest.fn();
      const itemProps = {
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
        {props: defaultProps, itemProps},
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
      expect(onPageChange).not.toHaveBeenCalled();
    });

    test('fire tracking event on normal item with href unset and onPageChange set', async () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const mockFireEvent = jest.fn();
      const itemProps = {
        selected,
        pageNumber,
        onClick: () => onPageChange(pageNumber),
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
        {props: controlledProps, itemProps},
        mockFireEvent,
      );
      const paginationItemButton = getByTestId('pagination-item');
      fireEvent.click(paginationItemButton);
      expect(mockFireEvent).toHaveBeenCalledWith({
        originator: 'pagination-item',
        trigger: EventTrigger.Click,
        context: {
          page: pageNumber,
          event: 'event data',
        },
      });
      expect(onPageChange).toHaveBeenCalledWith(pageNumber);
    });

    it('renders selected pagination item with aria attributes', () => {
      const itemProps = {
        ...pageItemProps,
        lastPage,
        children: [<IconFilledAddCircleOutline key="i" />],
        selected: true,
      };
      const fragment = renderToFragmentWithTheme(PaginationWithItem, {
        props: defaultProps,
        itemProps,
      });
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
      const itemProps = {
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
        {props: defaultProps, itemProps},
        myCustomTheme,
      );
      expect(fragment).toMatchSnapshot();
    });
  });
});

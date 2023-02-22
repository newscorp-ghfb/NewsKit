import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
} from '../../test/test-utils';
import {PaginationItemProps, PaginationSize} from '../types';
import {Pagination0 as Pagination} from '../pagination0';
import {PaginationItem} from '../components/item/pagination-item';
import {IconFilledAddCircleOutline} from '../../icons';
import {TextBlock} from '../../text-block';
import {EventTrigger} from '../../instrumentation';
import {compileTheme, createTheme} from '../../theme';

const paginationItemContent = 'Pagination Item';
const textBlock = '/';
const selected = false;
const pageNumber = 3;
const href = 'https://paginationitem.test';
const pageItemProps = {
  selected,
  pageNumber,
  href,
};

const PaginationWithItem = (props: PaginationItemProps) => (
  <Pagination>
    <PaginationItem size="medium" key="1" {...props} />
  </Pagination>
);

const paginationWithItem = [
  <PaginationItem key="1" {...pageItemProps}>
    {paginationItemContent}
  </PaginationItem>,
  <PaginationItem key="2" {...pageItemProps}>
    {paginationItemContent}
  </PaginationItem>,
  <PaginationItem key="3" {...pageItemProps}>
    {paginationItemContent}
  </PaginationItem>,
];

const PaginationSizeArray = ['small', 'medium', 'large'];
describe('Pagination', () => {
  it('renders with default props', () => {
    const props = {
      children: paginationWithItem,
    };
    const fragment = renderToFragmentWithTheme(Pagination, props);
    expect(fragment).toMatchSnapshot();
  });

  test.each(PaginationSizeArray)('renders in %s pageSize', currentSize => {
    const props = {
      children: paginationWithItem,
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
      children: paginationWithItem,
      totalItems: 232,
      pageSize: 10,
      currentPage: 2,
    };
    const fragment = renderToFragmentWithTheme(Pagination, props);
    expect(fragment).toMatchSnapshot();
  });

  it(`renders with logical prop overrides`, () => {
    const props = {
      children: paginationWithItem,
      overrides: {
        paddingInline: '30px',
        marginBlock: '20px',
      },
    };
    const fragment = renderToFragmentWithTheme(Pagination, props);
    expect(fragment).toMatchSnapshot();
  });

  // FIXME
  /* it(`renders with boundary icon as overrides`, () => {
    const props = {
      children: paginationWithItem,
      overrides: {
        boundary: () => (
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
    const fragment = renderToFragmentWithTheme(Pagination, props);
    expect(fragment).toMatchSnapshot();
  });
*/

  it(`renders with boundary overrides with TextBlock component`, () => {
    const props = {
      children: paginationWithItem,
      overrides: {
        boundary: () => <TextBlock>{textBlock}</TextBlock>,
      },
    };
    const fragment = renderToFragmentWithTheme(Pagination, props);
    expect(fragment).toMatchSnapshot();
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

  test('fire tracking event', async () => {
    const mockFireEvent = jest.fn();
    const props = {
      children: paginationItemContent,
      key: '1',
      ...pageItemProps,
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
    const paginationItemButton = getByTestId('buttonLink');
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
      children: [<IconFilledAddCircleOutline key="i" />],
      ...pageItemProps,
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
      children: paginationItemContent,
      ...pageItemProps,
      key: '1',
      overrides: {
        stylePreset: ' paginationItemCustom',
        typographyPreset: 'utilityButton030',
        minWidth: '10px',
        minHeight: '11px',
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

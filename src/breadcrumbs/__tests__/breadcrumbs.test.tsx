import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
} from '../../test/test-utils';
import {BreadcrumbItemProps, BreadcrumbSize} from '../types';
import {Breadcrumbs} from '../breadcrumbs';
import {BreadcrumbItem} from '../breadcrumb-item';
import {IconOutlinedTrendingFlat} from '../../icons';
import {TextBlock} from '../../text-block';
import {EventTrigger} from '../../instrumentation';

const breadcrumbItemContent = 'Breadcrumb Item';
const textBlock = '/';
const href = 'http://';

const BreadcrumbWithItem = (props: BreadcrumbItemProps) => (
  <Breadcrumbs>
    <BreadcrumbItem key="1" {...props} />
  </Breadcrumbs>
);
const BreadcrumbItemSizeArray = ['small', 'medium', 'large'];
const breadcrumbsWithItem = [
  <BreadcrumbItem key="1" href={href}>
    {breadcrumbItemContent}
  </BreadcrumbItem>,
  <BreadcrumbItem key="2" href={href}>
    {breadcrumbItemContent}
  </BreadcrumbItem>,
  <BreadcrumbItem key="3" href={href}>
    {breadcrumbItemContent}
  </BreadcrumbItem>,
];

const BreadcrumbSizeArray = ['small', 'medium', 'large'];
describe('Breadcrumbs', () => {
  it('renders with default props', () => {
    const props = {
      children: breadcrumbsWithItem,
    };
    const fragment = renderToFragmentWithTheme(Breadcrumbs, props);
    expect(fragment).toMatchSnapshot();
  });
  test.each(BreadcrumbSizeArray)('renders in %s size', currentSize => {
    const props = {
      children: breadcrumbsWithItem,
      href,
    };
    const fragment = renderToFragmentWithTheme(Breadcrumbs, {
      ...props,
      size: (currentSize as 'small' | 'medium' | 'large') as BreadcrumbSize,
    });
    expect(fragment).toMatchSnapshot();
  });
  it(`renders with showTrailingSeparator`, () => {
    const props = {
      children: breadcrumbsWithItem,
      showTrailingSeparator: true,
    };
    const fragment = renderToFragmentWithTheme(Breadcrumbs, props);
    expect(fragment).toMatchSnapshot();
  });
  it(`renders with logical prop overrides`, () => {
    const props = {
      children: breadcrumbsWithItem,
      overrides: {
        paddingInline: '30px',
        marginBlock: '20px',
      },
    };
    const fragment = renderToFragmentWithTheme(Breadcrumbs, props);
    expect(fragment).toMatchSnapshot();
  });
  it(`renders with separator icon as overrides`, () => {
    const props = {
      children: breadcrumbsWithItem,
      overrides: {
        separator: () => (
          <IconOutlinedTrendingFlat
            overrides={{
              size: 'iconSize020',
              paddingInline: 'space020',
              stylePreset: 'breadcrumbSeparator',
            }}
          />
        ),
      },
    };
    const fragment = renderToFragmentWithTheme(Breadcrumbs, props);
    expect(fragment).toMatchSnapshot();
  });
  it(`renders with separator overrides with TextBlock component`, () => {
    const props = {
      children: breadcrumbsWithItem,
      overrides: {
        separator: () => <TextBlock>{textBlock}</TextBlock>,
      },
    };
    const fragment = renderToFragmentWithTheme(Breadcrumbs, props);
    expect(fragment).toMatchSnapshot();
  });
});
describe('BreadcrumbItem', () => {
  it('renders with default props', () => {
    const props = {
      size: 'medium',
      children: breadcrumbItemContent,
      href,
    } as BreadcrumbItemProps;
    const fragment = renderToFragmentWithTheme(BreadcrumbWithItem, props);
    expect(fragment).toMatchSnapshot();
  });
  test.each(BreadcrumbItemSizeArray)('renders in %s size', currentSize => {
    const props = {
      children: breadcrumbItemContent,
      href,
    };
    const fragment = renderToFragmentWithTheme(BreadcrumbWithItem, {
      ...props,
      size: currentSize as 'small' | 'medium' | 'large',
    });
    expect(fragment).toMatchSnapshot();
  });
  test('fire tracking event', async () => {
    const mockFireEvent = jest.fn();
    const props = {
      children: breadcrumbItemContent,
      href: 'https://breadcrumbitem.test',
      key: '1',
      eventOriginator: 'breadcrumb-item',
      eventContext: {
        event: 'event data',
      },
    };
    const {getByTestId} = renderWithImplementation(
      BreadcrumbWithItem,
      props,
      mockFireEvent,
    );
    const breadcrumbItemButton = getByTestId('buttonLink');
    fireEvent.click(breadcrumbItemButton);
    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'breadcrumb-item',
      trigger: EventTrigger.Click,
      context: {
        href: 'https://breadcrumbitem.test',
        event: 'event data',
      },
    });
  });
});

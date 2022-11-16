import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';

import {BreadcrumbSize} from '../types';
import {Breadcrumbs} from '../breadcrumbs';
import {BreadcrumbItem} from '../breadcrumb-item';

const breadcrumbItemContent = 'Breadcrumb Item';
const href = 'http://';

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
      children: breadcrumbItemContent,
      href,
    };
    const fragment = renderToFragmentWithTheme(Breadcrumbs, {
      ...props,
      size: (currentSize as 'small' | 'medium' | 'large') as BreadcrumbSize,
    });
    expect(fragment).toMatchSnapshot();
  });
  it(`renders with logical prop overrides`, () => {
    const props = {
      children: breadcrumbItemContent,
      overrides: {
        paddingInline: '30px',
        marginBlock: '20px',
      },
    };
    const fragment = renderToFragmentWithTheme(Breadcrumbs, props);
    expect(fragment).toMatchSnapshot();
  });
  it(`renders with separator icon overrides`, () => {
    const props = {
      children: breadcrumbItemContent,
      overrides: {
        paddingInline: '30px',
        marginBlock: '20px',
      },
    };
    const fragment = renderToFragmentWithTheme(Breadcrumbs, props);
    expect(fragment).toMatchSnapshot();
  });
});

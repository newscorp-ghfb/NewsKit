import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';

import {BreadcrumbItemProps, BreadcrumbSize} from '../types';
import {Breadcrumbs} from '../breadcrumbs';
import {BreadcrumbItem} from '../breadcrumb-item';

const breadcrumbItemContent = 'Breadcrumb Item';
const href = 'http://';

const BreadcrumbsWithItem = (props: BreadcrumbItemProps) => (
  <Breadcrumbs>
    <BreadcrumbItem {...props} />
  </Breadcrumbs>
);
const BreadcrumbSizeArray = ['small', 'medium', 'large'];
describe('Breadcrumbs', () => {
  it('renders with default props', () => {
    const props = {
      children: breadcrumbItemContent,
      href,
    };
    const fragment = renderToFragmentWithTheme(BreadcrumbsWithItem, props);
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
});

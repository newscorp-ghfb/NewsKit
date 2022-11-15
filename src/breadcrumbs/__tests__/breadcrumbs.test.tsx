import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';

import {BreadcrumbItemProps} from '../types';
import {Breadcrumbs} from '../breadcrumbs';
import {BreadcrumbItem} from '../breadcrumb-item';

const breadcrumbItemContent = 'Breadcrumb Item';
const href = 'http://';

const BreadcrumbsWithItem = (props: BreadcrumbItemProps) => (
  <Breadcrumbs>
    <BreadcrumbItem key="1" {...props} />
  </Breadcrumbs>
);

describe('Breadcrumbs', () => {
  it('renders with default props', () => {
    const props = {
      children: breadcrumbItemContent,
      href,
    };
    const fragment = renderToFragmentWithTheme(BreadcrumbsWithItem, props);
    expect(fragment).toMatchSnapshot();
  });
});

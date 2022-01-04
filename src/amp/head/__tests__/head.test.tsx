import React from 'react';
import {render} from '../../../test/test-utils';
import {Head} from '../head';

describe('Head', () => {
  it('with a canonical and title', () => {
    const fragment = render(<Head title="test" canonical="canonical" />, {
      container: document.createElement('head'),
    });
    expect(fragment.baseElement).toMatchSnapshot();
  });
});

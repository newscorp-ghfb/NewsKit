import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {Link} from '..';
import {EventTrigger, InstrumentationProvider} from '../../instrumentation';

describe('Link', () => {
  test('renders as expected in default state', () => {
    const fragment = renderToFragmentWithTheme(Link, {
      href: '#',
      children: 'test link test',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with noUnderline property', () => {
    const fragment = renderToFragmentWithTheme(Link, {
      href: '#',
      noUnderline: true,
      children: 'test link text',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('fires click event onClick', async () => {
    const mockFireEvent = jest.fn();
    const link = await renderWithTheme((() => (
      <InstrumentationProvider fireEvent={mockFireEvent}>
        <Link href="the-href.com">test link text</Link>;
      </InstrumentationProvider>
    )) as React.FC).findByText('test link text');

    fireEvent.click(link);

    expect(mockFireEvent).toHaveBeenCalledWith({
      context: {},
      originator: 'link',
      trigger: EventTrigger.Click,
      data: {
        href: 'the-href.com',
      },
    });
  });
});

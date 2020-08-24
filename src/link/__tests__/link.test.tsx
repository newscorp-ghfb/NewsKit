import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {Link, LinkStandalone} from '..';
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

  test('renders the external icon even if the href is internal', () => {
    const fragment = renderToFragmentWithTheme(Link, {
      href: '/relative',
      children: 'test link text',
      external: true,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('does not render the external icon even if the href is external', () => {
    const fragment = renderToFragmentWithTheme(Link, {
      href: 'www.google.it',
      children: 'test link text',
      external: false,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders the external icon if the href is external', () => {
    const fragment = renderToFragmentWithTheme(Link, {
      href: 'www.google.it',
      children: 'test link text',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('does not render the external icon if the href is internal', () => {
    const fragment = renderToFragmentWithTheme(Link, {
      href: 'relative',
      children: 'test link text',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('fires click event onClick', async () => {
    const mockFireEvent = jest.fn();
    const eventContext = {
      event: 'other event data',
    };
    const link = await renderWithTheme((() => (
      <InstrumentationProvider fireEvent={mockFireEvent}>
        <Link href="the-href.com" eventContext={eventContext}>
          test link text
        </Link>
        ;
      </InstrumentationProvider>
    )) as React.FC).findByText('test link text');

    fireEvent.click(link);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'link',
      trigger: EventTrigger.Click,
      context: {
        href: 'the-href.com',
        event: 'other event data',
      },
    });
  });

  test('fires click event onClick with custom originator', async () => {
    const mockFireEvent = jest.fn();
    const eventContext = {
      event: 'other event data',
    };
    const link = await renderWithTheme((() => (
      <InstrumentationProvider fireEvent={mockFireEvent}>
        <Link
          href="the-href.com"
          eventContext={eventContext}
          eventOriginator="custom-originator"
        >
          test link text
        </Link>
        ;
      </InstrumentationProvider>
    )) as React.FC).findByText('test link text');

    fireEvent.click(link);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'custom-originator',
      trigger: EventTrigger.Click,
      context: {
        href: 'the-href.com',
        event: 'other event data',
      },
    });
  });
});

describe('LinkStandalone', () => {
  test('renders as expected in default state', () => {
    const fragment = renderToFragmentWithTheme(LinkStandalone, {
      href: '#',
      children: 'test link test',
    });
    expect(fragment).toMatchSnapshot();
  });
});

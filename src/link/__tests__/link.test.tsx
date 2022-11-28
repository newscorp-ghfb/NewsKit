import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {LinkInline, LinkStandalone} from '..';
import {EventTrigger, InstrumentationProvider} from '../../instrumentation';
import {createTheme} from '../../theme';

const myCustomTheme = createTheme({
  name: 'my-custom-link-theme',
  overrides: {
    colors: {
      inkLinkBase: '{{colors.red060}}',
      inkLinkHover: '{{colors.green060}}',
      inkLinkVisited: '{{colors.red080}}',
    },
    stylePresets: {
      linkCustom: {
        base: {
          color: '{{colors.inkLinkBase}}',
        },
        visited: {
          color: '{{colors.inkLinkVisited}}',
        },
        hover: {
          color: '{{colors.inkLinkHover}}',
        },
      },
    },
  },
});

describe('Link', () => {
  test('renders as expected in default state', () => {
    const fragment = renderToFragmentWithTheme(LinkInline, {
      href: '#',
      children: 'test link test',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders as expected in textOnly state', () => {
    const fragment = renderToFragmentWithTheme(LinkInline, {
      href: '#',
      children: 'test link test',
      textOnly: true,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with overrides', () => {
    const fragment = renderToFragmentWithTheme(
      LinkInline,
      {
        href: '#',
        children: 'test link test',
        overrides: {
          typographyPreset: 'utilityButton020',
          stylePreset: 'linkCustom',
        },
      },
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders with logical props overrides', () => {
    const fragment = renderToFragmentWithTheme(
      LinkInline,
      {
        href: '#',
        children: 'test link test',
        overrides: {
          paddingInline: '30px',
          marginInline: '30px',
        },
      },
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders the external icon even if the href is internal', () => {
    const fragment = renderToFragmentWithTheme(LinkInline, {
      href: '/relative',
      children: 'test link text',
      external: true,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('does not render the external icon even if the href is external', () => {
    const fragment = renderToFragmentWithTheme(LinkInline, {
      href: 'www.google.it',
      children: 'test link text',
      external: false,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders the external icon if the href is external', () => {
    const fragment = renderToFragmentWithTheme(LinkInline, {
      href: 'www.google.it',
      children: 'test link text',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('does not render the external icon if the href is internal', () => {
    const fragment = renderToFragmentWithTheme(LinkInline, {
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
        <LinkInline href="#the-href.com" eventContext={eventContext}>
          test link text
        </LinkInline>
        ;
      </InstrumentationProvider>
    )) as React.FC).findByText('test link text');

    fireEvent.click(link);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'link',
      trigger: EventTrigger.Click,
      context: {
        href: '#the-href.com',
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
        <LinkInline
          href="#the-href.com"
          eventContext={eventContext}
          eventOriginator="custom-originator"
        >
          test link text
        </LinkInline>
        ;
      </InstrumentationProvider>
    )) as React.FC).findByText('test link text');

    fireEvent.click(link);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'custom-originator',
      trigger: EventTrigger.Click,
      context: {
        href: '#the-href.com',
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
  test('renders with logical props overrides', () => {
    const fragment = renderToFragmentWithTheme(
      LinkStandalone,
      {
        href: '#',
        children: 'test link test',
        overrides: {
          paddingInline: '30px',
          marginInline: '30px',
        },
      },
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });
});

import React from 'react';
import {Banner} from '../banner';
import {BannerProps} from '../types';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {TextBlock} from '../../text-block';
import {IconFilledInfo} from '../../icons';
import {Link} from '../../link';
import {Button} from '../../button';

const layouts: BannerProps['layout'][] = ['horizontal', 'vertical'];
const bannerTitle = 'Banner title';
const bannerMessage = 'Banner text';
const closeLabel = 'Close banner';
const bannerIcon = (
  <IconFilledInfo
    overrides={{size: 'iconSize020', stylePreset: 'inkInverse'}}
  />
);
const actionsButton = () => <Button>CTA Button</Button>;
const secondActionsButton = () => <Button>CTA Button</Button>;

const closeButtonTestId = 'banner-close-button';

describe('Banner', () => {
  test('renders with default props', () => {
    const props: BannerProps = {
      children: bannerMessage,
    };
    const fragment = renderToFragmentWithTheme(Banner, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders with icon', () => {
    const props: BannerProps = {
      children: bannerMessage,
      icon: bannerIcon,
    };
    const fragment = renderToFragmentWithTheme(Banner, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders with title', () => {
    const props: BannerProps = {
      children: bannerMessage,
      title: bannerTitle,
    };
    const fragment = renderToFragmentWithTheme(Banner, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders with content as react element', () => {
    const props: BannerProps = {
      children: <TextBlock>{bannerMessage}</TextBlock>,
    };
    const fragment = renderToFragmentWithTheme(Banner, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders with content as string and link', () => {
    const props: BannerProps = {
      children: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt`,
        <Link href="/">NewsKit Link</Link>,
        `ut labore et dolore magna aliqua.`,
      ],
    };
    const fragment = renderToFragmentWithTheme(Banner, props) as any;

    expect(fragment).toMatchSnapshot();
  });

  layouts.forEach(layout => {
    test(`renders with single action button on ${layout} layout`, () => {
      const props: BannerProps = {
        actions: [actionsButton],
        layout,
        children: bannerMessage,
      };
      const fragment = renderToFragmentWithTheme(Banner, props) as any;

      expect(fragment).toMatchSnapshot();
    });

    test(`renders with multiple action buttons and overridden spaceInline on ${layout} layout`, () => {
      const props: BannerProps = {
        actions: [actionsButton, secondActionsButton],
        layout,
        children: bannerMessage,
        overrides: {
          actions: {
            spaceInline: 'spacing020',
          },
        },
      };
      const fragment = renderToFragmentWithTheme(Banner, props) as any;

      expect(fragment).toMatchSnapshot();
    });
  });

  layouts.forEach(layout => {
    test(`with close button renders correctly on ${layout} layout`, () => {
      const onCloseMock = jest.fn();
      const props: BannerProps = {
        onClose: onCloseMock,
        layout,
        children: bannerMessage,
      };
      const fragment = renderToFragmentWithTheme(Banner, props) as any;

      expect(fragment).toMatchSnapshot();
    });
  });

  layouts.forEach(layout => {
    test(`with action and close buttons renders correctly on ${layout} layout`, () => {
      const onCloseMock = jest.fn();
      const props: BannerProps = {
        onClose: onCloseMock,
        actions: [actionsButton],
        layout,
        children: bannerMessage,
      };
      const fragment = renderToFragmentWithTheme(Banner, props) as any;

      expect(fragment).toMatchSnapshot();
    });
  });

  test(`renders correctly with closeLabel on horizontal layout, without replacing the close icon`, () => {
    const onCloseMock = jest.fn();
    const props: BannerProps = {
      onClose: onCloseMock,
      closeButtonLabel: closeLabel,
      layout: 'horizontal',
      children: bannerMessage,
    };

    const {getByTestId} = renderWithTheme(Banner, props);

    const closeButton = getByTestId(closeButtonTestId);

    expect(closeButton).not.toHaveTextContent(closeLabel);
  });

  test(`renders correctly with closeLabel on vertical layout, replacing the Close button label`, () => {
    const onCloseMock = jest.fn();
    const props: BannerProps = {
      onClose: onCloseMock,
      closeButtonLabel: closeLabel,
      layout: 'vertical',
      children: bannerMessage,
    };

    const {getByTestId} = renderWithTheme(Banner, props);

    const closeButton = getByTestId(closeButtonTestId);

    expect(closeButton).toHaveTextContent(closeLabel);
  });
});

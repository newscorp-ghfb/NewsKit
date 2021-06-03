import React from 'react';
import {Banner} from '../banner';
import {BannerProps} from '../types';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TextBlock} from '../../text-block';
import {IconFilledInfo} from '../../icons';
import {Link} from '../../link';
import {Button} from '../../button';

const bannerMessage = 'Banner text';
const bannerIcon = (
  <IconFilledInfo
    overrides={{size: 'iconSize020', stylePreset: 'inkInverse'}}
  />
);
const actionsButton = () => <Button>CTA Button</Button>;
const secondActionsButton = () => <Button>CTA Button</Button>;

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

  describe('actions', () => {
    const layouts: BannerProps['layout'][] = ['horizontal', 'vertical'];

    layouts.forEach(layout => {
      test(`renders with single action button on ${layout} layout`, () => {
        const props: BannerProps = {
          actions: [actionsButton],
          layout,
          children: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          ],
        };
        const fragment = renderToFragmentWithTheme(Banner, props) as any;

        expect(fragment).toMatchSnapshot();
      });

      test(`renders with multiple action buttons and overridden spaceInline on ${layout} layout`, () => {
        const props: BannerProps = {
          actions: [actionsButton, secondActionsButton],
          layout,
          children: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          ],
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
  });
});

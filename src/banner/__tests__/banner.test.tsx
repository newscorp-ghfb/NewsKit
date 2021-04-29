import React from 'react';
import {Banner} from '../banner';
import {BannerProps} from '../types';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TextBlock} from '../../text-block';
import {IconFilledInfo} from '../../icons';
import {Link} from '../../link';

const bannerMessage = 'Banner text';
const bannerIcon = (
  <IconFilledInfo
    overrides={{size: 'iconSize020', stylePreset: 'inkInverse'}}
  />
);

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
});

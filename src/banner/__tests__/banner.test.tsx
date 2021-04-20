import React from 'react';
import {Banner} from '../banner';
import {BannerProps} from '../types';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TextBlock} from '../../text-block';
import {IconFilledInfo} from '../../icons';

const BannerMessage = <TextBlock>test banner message</TextBlock>;
const bannerIcon = (
  <IconFilledInfo
    overrides={{size: 'iconSize020', stylePreset: 'inkInverse'}}
  />
);

describe('Banner', () => {
  test('renders with default props', () => {
    const props: BannerProps = {
      children: BannerMessage,
    };
    const fragment = renderToFragmentWithTheme(Banner, props) as any;

    expect(fragment).toMatchSnapshot();
  });
  test('renders with icon', () => {
    const props: BannerProps = {
      children: BannerMessage,
      icon: bannerIcon,
    };
    const fragment = renderToFragmentWithTheme(Banner, props) as any;

    expect(fragment).toMatchSnapshot();
  });
});

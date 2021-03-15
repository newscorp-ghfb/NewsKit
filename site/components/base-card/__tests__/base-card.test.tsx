import {TextBlock} from 'newskit';
import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import React from 'react';
import {BaseCardProps} from '..';
import {BaseCard} from '../base-card';

describe('BaseCard', () => {
  test('Renders default (vertical) non-interactive card', () => {
    const props: BaseCardProps = {
      title: 'Non-interactive Vertical Card',
      children: <TextBlock>Text</TextBlock>,
    };
    const fragment = renderToFragmentWithTheme(BaseCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders horizontal non-interactive card', () => {
    const props: BaseCardProps = {
      title: 'Non-interactive Horizontal Card',
      layout: 'horizontal',
      children: <TextBlock>Text</TextBlock>,
    };
    const fragment = renderToFragmentWithTheme(BaseCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders vertical interactive card', () => {
    const props: BaseCardProps = {
      title: 'Interactive Horizontal Card',
      href: 'newskit.com',
      children: <TextBlock>Text</TextBlock>,
    };
    const fragment = renderToFragmentWithTheme(BaseCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders horizontal interactive card', () => {
    const props: BaseCardProps = {
      title: 'Interactive Horizontal Card',
      href: 'newskit.com',
      layout: 'horizontal',
      children: <TextBlock>Text</TextBlock>,
    };
    const fragment = renderToFragmentWithTheme(BaseCard, props);
    expect(fragment).toMatchSnapshot();
  });

});

import {screen} from '@testing-library/react';
import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {FeatureCard} from '../feature-card';
import {FeatureCardProps} from '../types';

describe('FeatureCard', () => {
  test('Renders interactive horizontal card without link or link text', async () => {
    const props: FeatureCardProps = {
      title: 'Interactive Horizontal Card',
      description: 'I am interactive',
      stylePrefix: 'patternsCard',
      layout: 'horizontal',
      href: 'href',
    };
    const fragment = renderToFragmentWithTheme(FeatureCard, props);

    const arrowLinkLarge = await screen.queryAllByTestId('arrowLinkLarge');
    expect(arrowLinkLarge.length).toBeFalsy();

    expect(fragment).toMatchSnapshot();
  });

  test('Renders interactive horizontal card with text when no buttonHref', async () => {
    const props: FeatureCardProps = {
      title: 'Interactive Horizontal Card',
      description: 'I am interactive',
      buttonLabel: 'Read more',
      stylePrefix: 'patternsCard',
      layout: 'horizontal',
      href: 'href',
    };
    const fragment = renderToFragmentWithTheme(FeatureCard, props);

    await screen.findByTestId('arrowLinkSmall');
    const arrowLinkLarge = await screen.findByTestId('arrowLinkLarge');
    const link = arrowLinkLarge.getElementsByTagName('a')[0];
    expect(link).toBeUndefined();
    expect(arrowLinkLarge.textContent).toEqual('Read more');

    expect(fragment).toMatchSnapshot();
  });

  test('Renders horizontal card with clickable button only', async () => {
    const props: FeatureCardProps = {
      title: 'Interactive Horizontal Card',
      description: 'I am interactive',
      stylePrefix: 'patternsCard',
      layout: 'horizontal',
      buttonLabel: 'Read more',
      buttonHref: 'buttonHref',
    };
    const fragment = renderToFragmentWithTheme(FeatureCard, props);

    await screen.findByTestId('arrowLinkSmall');
    const arrowLinkLarge = await screen.findByTestId('arrowLinkLarge');
    const link = arrowLinkLarge.getElementsByTagName('a')[0];
    expect(link.textContent).toEqual('Read more');
    expect(link.href).toEqual('http://localhost/buttonHref');

    expect(fragment).toMatchSnapshot();
  });

  test('Renders horizontal card with clickable button and style override', () => {
    const props: FeatureCardProps = {
      title: 'Interactive Horizontal Card',
      description: 'I am interactive',
      stylePrefix: 'patternsCard',
      layout: 'horizontal',
      buttonLabel: 'Read more',
      buttonHref: 'buttonHref',
      buttonOverrides: {stylePreset: 'linkStandalone'},
    };
    const fragment = renderToFragmentWithTheme(FeatureCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders overrides when card is horizontal', () => {
    const props: FeatureCardProps = {
      title: 'Interactive Horizontal Card',
      description: 'I am interactive',
      stylePrefix: 'patternsCard',
      layout: 'horizontal',
      href: 'href',
      overrides: {
        title: {
          typographyPreset: 'editorialHeadline040',
        },
        description: {
          typographyPreset: 'editorialSubheadline020',
        },
      },
    };
    const fragment = renderToFragmentWithTheme(FeatureCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders non-interactive horizontal card', () => {
    const props: FeatureCardProps = {
      title: 'Non-Interactive Horizontal Card',
      description: 'I am non-interactive',
      stylePrefix: 'patternsCard',
      layout: 'horizontal',
    };
    const fragment = renderToFragmentWithTheme(FeatureCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders interactive vertical card with link', () => {
    const props: FeatureCardProps = {
      title: 'Interactive Horizontal Card',
      description: 'I am interactive',
      buttonLabel: 'Read more',
      stylePrefix: 'contributeCard',
      layout: 'vertical',
      href: 'href',
    };
    const fragment = renderToFragmentWithTheme(FeatureCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders interactive vertical card without link', () => {
    const props: FeatureCardProps = {
      title: 'Interactive Horizontal Card',
      description: 'I am interactive',
      stylePrefix: 'contributeCard',
      layout: 'vertical',
      href: 'href',
    };
    const fragment = renderToFragmentWithTheme(FeatureCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders vertical card with clickable button only', () => {
    const props: FeatureCardProps = {
      title: 'Interactive Horizontal Card',
      description: 'I am interactive',
      buttonLabel: 'Read more',
      buttonHref: 'href',
      stylePrefix: 'contributeCard',
      layout: 'vertical',
    };
    const fragment = renderToFragmentWithTheme(FeatureCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders non-interactive vertical card', () => {
    const props: FeatureCardProps = {
      title: 'Interactive Horizontal Card',
      description: 'I am interactive',
      stylePrefix: 'contributeCard',
      layout: 'vertical',
    };
    const fragment = renderToFragmentWithTheme(FeatureCard, props);
    expect(fragment).toMatchSnapshot();
  });
});

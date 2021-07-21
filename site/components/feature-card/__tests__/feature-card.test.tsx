import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {FeatureCard} from '../feature-card';
import {FeatureCardProps} from '../types';

describe('FeatureCard', () => {
  test('Renders interactive horizontal card with button', () => {
    const props: FeatureCardProps = {
      title: 'Interactive Horizontal Card',
      description: 'I am interactive',
      buttonLabel: 'Read more',
      stylePrefix: 'patternsCard',
      layout: 'horizontal',
      href: 'href',
    };
    const fragment = renderToFragmentWithTheme(FeatureCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders interactive horizontal card without button', () => {
    const props: FeatureCardProps = {
      title: 'Interactive Horizontal Card',
      description: 'I am interactive',
      stylePrefix: 'patternsCard',
      layout: 'horizontal',
      href: 'href',
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

  test('Renders interactive vertical card with button', () => {
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

  test('Renders interactive vertical card without button', () => {
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

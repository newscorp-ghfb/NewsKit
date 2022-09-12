import {FeatureCardProps} from '../../feature-card';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {MediaList} from '../media-list';

const interactiveCard = {
  description: 'interactive card',
  media: {
    src: 'static/placeholder-16x9.png',
    alt: 'Card Media',
  },
  href: '/',
};

const staticCard = {
  title: 'static',
  description: 'card with optional title ',
};

const UsageCardDo = {
  title: 'Do',
  description: 'UsageCard Do',
};

const UsageCardDont = {
  title: 'Dont',
  description: 'UsageCard Dont',
  kind: 'dont',
};

const FeatureCardHorizontal = {
  title: 'Feature Card 1',
  description: 'This is a feature card.',
  buttonLabel: 'needHelpCard',
  layout: 'horizontal',
  href: '/',
} as FeatureCardProps;

const FeatureCardVertical = {
  title: 'Feature Card 2',
  description: 'This is a feature card.',
  buttonLabel: 'needHelpCard',
  layout: 'vertical',
  href: '/',
} as FeatureCardProps;

describe('Media List', () => {
  test('renders with default layout', () => {
    const fragment = renderToFragmentWithTheme(MediaList, {
      cards: [interactiveCard, staticCard],
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with usage cards', () => {
    const fragment = renderToFragmentWithTheme(MediaList, {
      cards: [UsageCardDo, UsageCardDont],
      cardType: 'usage',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with feature cardscards', () => {
    const fragment = renderToFragmentWithTheme(MediaList, {
      cards: [FeatureCardHorizontal, FeatureCardVertical],
      cardType: 'feature',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom layout', () => {
    const fragment = renderToFragmentWithTheme(MediaList, {
      cards: [interactiveCard, staticCard],
      layout: '3-span-hero',
      spaceStack: 'space110',
      gridProps: {
        xsRowGutter: 'space030',
        xsMargin: 'space010',
      },
    });
    expect(fragment).toMatchSnapshot();
  });
});

import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {BorderCardProps} from '..';
import {BorderCard} from '../border-card';

describe('BorderCard', () => {
  test('renders default card', () => {
    const fragment = renderToFragmentWithTheme(BorderCard);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with different borderRadius token', () => {
    const props: BorderCardProps = {
      borderRadiusToken: 'borderRadiusCircle',
    };
    const fragment = renderToFragmentWithTheme(BorderCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with different borderWidth token', () => {
    const props: BorderCardProps = {
      borderWidthToken: 'borderWidth000',
    };
    const fragment = renderToFragmentWithTheme(BorderCard, props);
    expect(fragment).toMatchSnapshot();
  });
});

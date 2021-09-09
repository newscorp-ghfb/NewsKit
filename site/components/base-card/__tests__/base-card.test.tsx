import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {BaseCardProps} from '..';
import {BaseCard} from '../base-card';

describe('BaseCard', () => {
  test('Renders default (vertical) non-interactive card', () => {
    const props: BaseCardProps = {
      title: 'Non-interactive Vertical Card',
      description: 'Text',
    };
    const fragment = renderToFragmentWithTheme(BaseCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders horizontal non-interactive card', () => {
    const props: BaseCardProps = {
      title: 'Non-interactive Horizontal Card',
      layout: 'horizontal',
      description: 'Text',
    };
    const fragment = renderToFragmentWithTheme(BaseCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders vertical interactive card', () => {
    const props: BaseCardProps = {
      title: 'Interactive Horizontal Card',
      href: 'newskit.com',
      description: 'Text',
    };
    const fragment = renderToFragmentWithTheme(BaseCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders horizontal interactive card', () => {
    const props: BaseCardProps = {
      title: 'Interactive Horizontal Card',
      href: 'newskit.com',
      layout: 'horizontal',
      description: 'Text',
    };
    const fragment = renderToFragmentWithTheme(BaseCard, props);
    expect(fragment).toMatchSnapshot();
  });
});

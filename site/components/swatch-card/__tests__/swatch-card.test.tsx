import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {SwatchCardProps} from '..';
import {SwatchCard} from '../swatch-card';

describe('SwatchCard', () => {
  test('renders with inkBase', () => {
    const props: SwatchCardProps = {
      color: 'inkBase',
    };
    const fragment = renderToFragmentWithTheme(SwatchCard, props);
    expect(fragment).toMatchSnapshot();
  });
});

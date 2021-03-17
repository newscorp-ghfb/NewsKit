import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {Usage} from '..';
import {UsageProps} from '../types';

describe('Usage', () => {
  test('renders with mandatory props', () => {
    const props = {
      introduction:
        'Add details of when and how to use this component. This could include do’s and don’ts to support guidance details.',
      cards: [
        {
          description: 'Description',
          kind: 'do',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'src alt',
          },
        },
        {
          description: 'Description',
          kind: 'do',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'src alt',
          },
        },
        {
          description: 'Description',
          kind: 'dont',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'src alt',
          },
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(Usage, props as UsageProps);
    expect(fragment).toMatchSnapshot();
  });
});

import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {UsageCard} from '../usage-card';
import {UsageCardProps, UsageKind} from '../types';

describe('UsageCard', () => {
  test('Renders default (Do) UsageCard', () => {
    const props: UsageCardProps = {
      description: 'Description',
    };
    const fragment = renderToFragmentWithTheme(UsageCard, props);
    expect(fragment).toMatchSnapshot();
  });

  test('Renders Dont UsageCard when kind=dont', () => {
    const props: UsageCardProps = {
      description: 'Description',
      kind: UsageKind.DONT,
    };
    const fragment = renderToFragmentWithTheme(UsageCard, props);
    expect(fragment).toMatchSnapshot();
  });
});

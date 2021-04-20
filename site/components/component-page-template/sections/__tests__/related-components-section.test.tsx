import {RelatedComponentsSection} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';

jest.mock('../../../../utils/get-route-object.ts', () => ({
  getByTitle: jest.fn(() => ({
    title: 'RelatedComp',
    page: true,
    id: '/group/page/related',
    description: 'Here lies the description for the related component',
    media: '/static/placeholder-16x9.png',
  })),
}));

describe('RelatedComponentsSection', () => {
  test('renders a RelatedComp with its data coming from routes', () => {
    const props = {introduction: 'introduction', related: ['RelatedComp']};
    const fragment = renderToFragmentWithTheme(RelatedComponentsSection, props);
    expect(fragment).toMatchSnapshot();
  });
});

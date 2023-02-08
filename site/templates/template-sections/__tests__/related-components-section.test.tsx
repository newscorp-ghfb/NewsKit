import React from 'react';
import {RelatedComponentsSection, RelatedComponentsSectionProps} from '..';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';

jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

jest.mock('../../../components/media-list/media-list.tsx');

jest.mock('../../../utils/get-route-object.ts', () => ({
  getByTitle: jest.fn(() => ({
    title: 'RelatedComp',
    page: true,
    id: '/group/page/related',
    description: 'Here lies the description for the related component',
    media: 'static/placeholder-16x9.png',
  })),
}));

jest.mock('../../../components/illustrations/illustration-loader', () => ({
  getIllustrationComponent: jest.fn().mockReturnValue(() => <div>Mock</div>),
}));

describe('RelatedComponentsSection', () => {
  test('renders a RelatedComp with its data coming from routes', () => {
    const props: RelatedComponentsSectionProps = {
      introduction: 'introduction',
      related: ['RelatedComp'],
    };
    const fragment = renderToFragmentWithTheme(RelatedComponentsSection, props);
    expect(fragment).toMatchSnapshot();
  });
});

import React from 'react';
import {render} from '@testing-library/react';
import {HeadNextSeo} from '../head-next-seo';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({children}: {children: Array<React.ReactNode>}) => <>{children}</>,
}));

describe('HeadNextSeo', () => {
  test('renders default', () => {
    const props = {
      title: 'title',
      description: 'description',
      image: {
        url: 'social/landing.png',
        alt: 'NewsKit design system',
      },
    };

    render(<HeadNextSeo {...props} />, {
      container: document.head,
    });

    expect(document.title).toBe('title | NewsKit design system');
  });
});

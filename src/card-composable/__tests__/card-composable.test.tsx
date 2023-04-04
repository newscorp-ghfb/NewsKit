import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {
  CardComposable,
  CardMedia,
  CardContent,
  CardActions,
  CardLink,
} from '..';

describe('CardComposable', () => {
  test('renders defaults', () => {
    const fragment = renderToFragmentWithTheme(CardComposable, {
      children: (
        <>
          <CardContent>
            <CardLink expand>content</CardLink>
          </CardContent>
          <CardMedia media={{src: 'image/url.png', alt: 'image'}} />
          <CardActions>actions</CardActions>
        </>
      ),
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders without areas', () => {
    const fragment = renderToFragmentWithTheme(CardComposable, {
      areas: '',
      children: (
        <>
          <CardContent>
            <CardLink expand>content</CardLink>
          </CardContent>
          <CardMedia media={{src: 'image/url.png', alt: 'image'}} />
          <CardActions>actions</CardActions>
        </>
      ),
    });
    expect(fragment).toMatchSnapshot();
  });
});

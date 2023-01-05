import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithImplementation, renderWithThemeInBody} from '../test-utils';
import {Link} from '../../link';
import {LinkProps} from '../../link/types';

const ThemedLink: React.FC = () =>
  React.createElement('span', {id: 'a11y-status-message'}, 'test link text');

describe('Test utils', () => {
  test('renderWithImplementation works correctly if fireEvent not provided as param', async () => {
    const onClickHandler = jest.fn();
    const {findByText} = renderWithImplementation(Link, {
      href: 'example.com',
      children: 'test link text',
      onClick: onClickHandler,
    } as LinkProps);

    const link = await findByText('test link text');

    fireEvent.click(link);
    expect(onClickHandler).toHaveBeenCalled();
  });

  test('renderWithThemeInBody renders correctly', async () => {
    const {findByText, asFragment} = renderWithThemeInBody(ThemedLink, {});

    await findByText('test link text');
    expect(asFragment).toBeDefined();
    expect(asFragment().getElementById('a11y-status-message')).toBeNull();
  });
});

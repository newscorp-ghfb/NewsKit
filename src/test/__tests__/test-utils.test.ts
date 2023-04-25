import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderWithImplementation,
  renderWithThemeInBody,
  renderToFragmentInBody,
  renderInBody,
  applyAsyncStyling,
  generateString,
  isVisualTest,
  isCypressTest,
} from '../test-utils';
import {LinkInline} from '../../link';
import {LinkProps} from '../../link/types';

const ThemedLink: React.FC = () =>
  React.createElement('span', {id: 'a11y-status-message'}, 'test link text');

describe('Test utils', () => {
  test('renderWithImplementation works correctly if fireEvent not provided as param', async () => {
    const onClickHandler = jest.fn();
    const {findByText} = renderWithImplementation(LinkInline, {
      href: 'example.com',
      children: 'test link text',
      onClick: onClickHandler,
    } as LinkProps);

    const link = await findByText('test link text');

    fireEvent.click(link);
    expect(onClickHandler).toHaveBeenCalled();
  });

  test('renderInBody renders correctly', async () => {
    const {findByText, asFragment} = renderInBody(ThemedLink, {});

    await findByText('test link text');
    expect(asFragment).toBeDefined();
    expect(asFragment().getElementById('a11y-status-message')).toBeNull();
  });

  test('renderWithThemeInBody renders correctly', async () => {
    const {findByText, asFragment} = renderWithThemeInBody(ThemedLink, {});

    await findByText('test link text');
    expect(asFragment).toBeDefined();
    expect(asFragment().getElementById('a11y-status-message')).toBeNull();
  });

  test('renderToFragmentInBody renders correctly', async () => {
    const fragment = renderToFragmentInBody(ThemedLink, {});

    expect(fragment).toBeDefined();
    expect(fragment.getElementById('a11y-status-message')).toBeNull();
  });

  test('renderToFragmentInBody renders correctly', async () => {
    const response = await applyAsyncStyling();

    expect(response).toBeUndefined();
  });

  test('generateString matches length', async () => {
    const response = generateString(4);

    expect(response).toEqual('****');
  });

  test('isVisualTest returns a boolean', async () => {
    expect(typeof isVisualTest).toBe('boolean');
  });

  test('isCypressTest returns a boolean', async () => {
    expect(typeof isCypressTest).toBe('boolean');
  });
});

import {fireEvent} from '@testing-library/react';
import {renderWithImplementation} from '../test-utils';
import {Link} from '../../link';
import {LinkProps} from '../../link/types';

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
});

import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {PopoutButton} from '../controls/popout-button';

describe('PopoutButton', () => {
  test('renders correctly with default props', () => {
    const fragment = renderToFragmentWithTheme(PopoutButton);
    expect(fragment).toMatchSnapshot();
  });

  test('opens window', async () => {
    const props = {
      href: 'www.the-example-href-prop.com',
    };
    const button = await renderWithTheme(PopoutButton, props).findByRole(
      'button',
    );

    window.open = jest.fn();
    fireEvent.click(button);

    expect(window.open).toHaveBeenCalledWith(
      props.href,
      '',
      'width=380,height=665',
    );
  });

  test('calls onClick callback', async () => {
    const onClick = jest.fn();
    const props = {
      onClick,
    };
    const button = await renderWithTheme(PopoutButton, props).findByRole(
      'button',
    );

    window.open = jest.fn();
    fireEvent.click(button);

    expect(window.open).not.toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(props);
  });

  test('opens window and calls onClick callback', async () => {
    const onClick = jest.fn();
    const props = {
      href: 'www.the-example-href-prop.com',
      onClick,
    };
    const button = await renderWithTheme(PopoutButton, props).findByRole(
      'button',
    );

    window.open = jest.fn();
    fireEvent.click(button);

    expect(window.open).toHaveBeenCalledWith(
      props.href,
      '',
      'width=380,height=665',
    );
    expect(onClick).toHaveBeenCalledWith(props);
  });
});

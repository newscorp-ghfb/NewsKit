import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {Checkbox} from '..';
import {states, sizes} from './helpers';

describe('Checkbox', () => {
  states.forEach(([id, props]) => {
    test(`render with state: ${id}`, () => {
      const fragment = renderToFragmentWithTheme(() => (
        <Checkbox {...props} id={id as string} />
      ));
      expect(fragment).toMatchSnapshot();
    });
  });

  sizes.forEach(size => {
    test(`render with size: ${size}`, () => {
      const fragment = renderToFragmentWithTheme(() => (
        <Checkbox size={size} />
      ));
      expect(fragment).toMatchSnapshot();
    });
    test(`render with size: ${size} & checked`, () => {
      const fragment = renderToFragmentWithTheme(() => (
        <Checkbox size={size} checked />
      ));
      expect(fragment).toMatchSnapshot();
    });
  });

  test('onBlur and onFocus', () => {
    const {getByRole, asFragment} = renderWithTheme(() => (
      <Checkbox defaultChecked={false} />
    ));
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    if (checkbox) {
      fireEvent.focus(checkbox);
    }

    expect(asFragment()).toMatchSnapshot('with focus');
    if (checkbox) {
      fireEvent.blur(checkbox);
    }
    expect(asFragment()).toMatchSnapshot('with blur');
  });

  test('with overrides', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <Checkbox
        checked
        overrides={{
          icon: {
            stylePreset: 'bannerInformative',
            size: 'iconSize030',
          },
        }}
      />
    ));
    expect(fragment).toMatchSnapshot();
  });

  test('toggle checked', () => {
    const {getByRole} = renderWithTheme(() => (
      <Checkbox defaultChecked={false} />
    ));
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    if (checkbox) {
      fireEvent.click(checkbox);
    }
    expect(checkbox?.checked).toBe(true);
  });

  test('click on ripple', () => {
    const {container} = renderWithTheme(() => (
      <Checkbox defaultChecked={false} />
    ));
    const ripple = container.querySelector('.nk-checkbox-ripple');
    if (ripple) {
      fireEvent.click(ripple);
    }

    expect(container.querySelector('input')?.checked).toBe(true);
  });
});

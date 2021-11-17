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
    test(`render with size: ${size} & label`, () => {
      const fragment = renderToFragmentWithTheme(() => (
        <Checkbox size={size} label={size} />
      ));
      expect(fragment).toMatchSnapshot();
    });
  });

  test('label position start', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <Checkbox label="start" labelPosition="start" />
    ));
    expect(fragment).toMatchSnapshot();
  });

  test('label attributes', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <Checkbox
        label="label"
        labelAttributes={{id: 'label-id', 'aria-label': 'label'}}
      />
    ));
    expect(fragment).toMatchSnapshot();
  });

  test('onBlur and onFocus', () => {
    const {getByRole, asFragment} = renderWithTheme(() => (
      <Checkbox defaultChecked={false} />
    ));
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    fireEvent.focus(checkbox);
    expect(asFragment()).toMatchSnapshot('with focus');

    fireEvent.blur(checkbox);
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
    fireEvent.click(checkbox);
    expect(checkbox?.checked).toBe(true);
  });

  test('click on feedback', () => {
    const {container, getByTestId} = renderWithTheme(() => (
      <Checkbox defaultChecked={false} />
    ));
    const feedback = getByTestId('checkbox-feedback');
    fireEvent.click(feedback);

    expect(container.querySelector('input')?.checked).toBe(true);
  });

  test('hover on label trigger checkbox hover styles', () => {
    const {getByText, asFragment} = renderWithTheme(() => (
      <Checkbox label="label" />
    ));
    const label = getByText('label') as HTMLLabelElement;

    fireEvent.mouseOver(label);
    expect(asFragment()).toMatchSnapshot('with hover');

    fireEvent.mouseLeave(label);
    expect(asFragment()).toMatchSnapshot('without hover');
  });
  test('hover on label with disabled do not change hover state', () => {
    const {getByText, asFragment} = renderWithTheme(() => (
      <Checkbox label="label" state="disabled" />
    ));
    const label = getByText('label') as HTMLLabelElement;
    fireEvent.mouseOver(label);
    expect(asFragment()).toMatchSnapshot('with hover');

    fireEvent.mouseLeave(label);
    expect(asFragment()).toMatchSnapshot('without hover');
  });

  test('hover on feedback shows it', () => {
    const {getByTestId, asFragment} = renderWithTheme(() => (
      <Checkbox label="label" />
    ));
    const feedback = getByTestId('checkbox-feedback');
    fireEvent.mouseOver(feedback);
    expect(asFragment()).toMatchSnapshot('with hover');

    fireEvent.mouseLeave(feedback);
    expect(asFragment()).toMatchSnapshot('without hover');
  });
  test('hover on feedback when disabled does not show it', () => {
    const {getByTestId, asFragment} = renderWithTheme(() => (
      <Checkbox label="label" state="disabled" />
    ));
    const feedback = getByTestId('checkbox-feedback');
    fireEvent.mouseOver(feedback);
    expect(asFragment()).toMatchSnapshot('with hover');

    fireEvent.mouseLeave(feedback);
    expect(asFragment()).toMatchSnapshot('without hover');
  });
});

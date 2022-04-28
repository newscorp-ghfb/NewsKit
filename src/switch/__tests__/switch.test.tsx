import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {Switch} from '..';
import {sizes, states} from './helpers';
import {IconFilledCheck, IconFilledClose, IconFilledError} from '../../icons';

describe('Switch', () => {
  states.forEach(([id, props]) => {
    test(`render with state: ${id}`, () => {
      const fragment = renderToFragmentWithTheme(() => (
        <Switch label="label" {...props} id={id as string} />
      ));
      expect(fragment).toMatchSnapshot();
    });
  });

  sizes.forEach(size => {
    test(`render with size: ${size}`, () => {
      const fragment = renderToFragmentWithTheme(() => (
        <Switch label="label" size={size} />
      ));
      expect(fragment).toMatchSnapshot();
    });
    test(`render with size: ${size} & checked`, () => {
      const fragment = renderToFragmentWithTheme(() => (
        <Switch label="label" size={size} checked />
      ));
      expect(fragment).toMatchSnapshot();
    });
    test(`render with size: ${size} & disabled`, () => {
      const fragment = renderToFragmentWithTheme(() => (
        <Switch label="label" size={size} state="disabled" />
      ));
      expect(fragment).toMatchSnapshot();
    });
  });

  test('label position start', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <Switch label="start" labelPosition="start" />
    ));
    expect(fragment).toMatchSnapshot();
  });

  test('label attributes', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <Switch
        label="label"
        labelAttributes={{id: 'label-id', 'aria-label': 'label'}}
      />
    ));
    expect(fragment).toMatchSnapshot();
  });

  test('onBlur and onFocus', () => {
    const {getByRole, asFragment} = renderWithTheme(() => (
      <Switch label="label" defaultChecked={false} />
    ));
    const switchEl = getByRole('switch') as HTMLInputElement;
    fireEvent.focus(switchEl);
    expect(asFragment()).toMatchSnapshot('with focus');

    fireEvent.blur(switchEl);
    expect(asFragment()).toMatchSnapshot('with blur');
  });

  test('with overrides', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <Switch
        label="label"
        checked
        overrides={{
          spaceStack: 'space060',
          thumb: {
            stylePreset: 'customSwitchThumb',
            size: '95px',
          },
          input: {
            stylePreset: 'customSwitchInput',
            blockSize: '100px',
            inlineSize: '100px',
            spaceInset: '20px',
            spaceInline: '10px',
          },
          feedback: {
            size: '120px',
            stylePreset: 'customSwitchFeedback',
          },
          label: {
            typographyPreset: 'utilityHeading010',
            stylePreset: 'inkSubtle',
          },
          icon: IconFilledError,
          onIcon: IconFilledCheck,
          offIcon: IconFilledClose,
        }}
      />
    ));
    expect(fragment).toMatchSnapshot();
  });

  test('toggle checked', () => {
    const {getByRole} = renderWithTheme(() => (
      <Switch label="label" defaultChecked={false} />
    ));
    const switchEl = getByRole('switch') as HTMLInputElement;
    fireEvent.click(switchEl);
    expect(switchEl?.checked).toBe(true);
  });

  test('click on feedback', () => {
    const {container, getByTestId} = renderWithTheme(() => (
      <Switch label="label" defaultChecked={false} />
    ));
    const feedback = getByTestId('checkbox-feedback');
    fireEvent.click(feedback);

    expect(container.querySelector('input')?.checked).toBe(true);
  });

  test('hover on label trigger Switch hover styles', () => {
    const {getByText, asFragment} = renderWithTheme(() => (
      <Switch label="label" />
    ));
    const label = getByText('label') as HTMLLabelElement;

    fireEvent.mouseOver(label);
    expect(asFragment()).toMatchSnapshot('with hover');

    fireEvent.mouseLeave(label);
    expect(asFragment()).toMatchSnapshot('without hover');
  });

  test('hover on label with disabled do not change hover state', () => {
    const {getByText, asFragment} = renderWithTheme(() => (
      <Switch label="label" state="disabled" />
    ));
    const label = getByText('label') as HTMLLabelElement;
    fireEvent.mouseOver(label);
    expect(asFragment()).toMatchSnapshot('with hover');

    fireEvent.mouseLeave(label);
    expect(asFragment()).toMatchSnapshot('without hover');
  });

  test('hover on feedback shows it', () => {
    const {getByTestId, asFragment} = renderWithTheme(() => (
      <Switch label="label" />
    ));
    const feedback = getByTestId('checkbox-feedback');
    fireEvent.mouseOver(feedback);
    expect(asFragment()).toMatchSnapshot('with hover');

    fireEvent.mouseLeave(feedback);
    expect(asFragment()).toMatchSnapshot('without hover');
  });

  test('hover on feedback when disabled does not show it', () => {
    const {getByTestId, asFragment} = renderWithTheme(() => (
      <Switch label="label" state="disabled" />
    ));
    const feedback = getByTestId('checkbox-feedback');
    fireEvent.mouseOver(feedback);
    expect(asFragment()).toMatchSnapshot('with hover');

    fireEvent.mouseLeave(feedback);
    expect(asFragment()).toMatchSnapshot('without hover');
  });
});

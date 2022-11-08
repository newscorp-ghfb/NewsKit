import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
  renderWithTheme,
} from '../../test/test-utils';
import {Checkbox} from '..';
import {states, sizes} from './helpers';
import {EventTrigger} from '../../instrumentation';

jest.mock('../../utils/focus-visible', () => ({
  isFocusVisible: jest
    .fn()
    .mockImplementationOnce(() => true)
    .mockImplementation(() => false),
}));

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

  test('onBlur and onFocus when isFocusVisible return false', () => {
    const {getByRole, asFragment} = renderWithTheme(() => (
      <Checkbox defaultChecked={false} />
    ));
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    fireEvent.focus(checkbox);
    expect(asFragment()).toMatchSnapshot('with focus');

    fireEvent.blur(checkbox);
    expect(asFragment()).toMatchSnapshot('with blur');
  });

  test('active state', () => {
    const {getByRole, asFragment} = renderWithTheme(() => (
      <Checkbox defaultChecked={false} />
    ));
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    fireEvent.mouseDown(checkbox);
    expect(asFragment()).toMatchSnapshot('active on');

    fireEvent.mouseUp(checkbox);
    expect(asFragment()).toMatchSnapshot('active off');
  });

  test('with overrides', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <Checkbox
        checked
        overrides={{
          spaceStack: 'space060',
          input: {
            stylePreset: 'customCheckboxInput',
            size: '100px',
          },
          feedback: {
            size: '120px',
            stylePreset: 'customCheckboxFeedback',
          },
          label: {
            typographyPreset: 'utilityHeading010',
            stylePreset: 'inkSubtle',
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

  test('override data-testid', () => {
    const dataTestId = 'override-testid';

    const {getByTestId} = renderWithTheme(() => (
      <Checkbox data-testid={dataTestId} />
    ));
    const checkbox = getByTestId(dataTestId);

    expect(checkbox).toBeInTheDocument();
  });
  test('with logical props overrides', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <Checkbox
        checked
        overrides={{
          marginBlock: '30px',
          paddingBlock: '30px',
        }}
      />
    ));
    expect(fragment).toMatchSnapshot();
  });

  test('fire tracking event', () => {
    const mockFireEvent = jest.fn();
    const props = {
      defaultChecked: false,
      eventOriginator: 'checkbox-item',
      eventContext: {
        event: 'other event data',
      },
    };

    const {getByRole} = renderWithImplementation(
      Checkbox,
      props,
      mockFireEvent,
    );
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    fireEvent.click(checkbox);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'checkbox-item',
      trigger: EventTrigger.Change,
      context: {
        checked: true,
        event: 'other event data',
      },
    });
  });
});

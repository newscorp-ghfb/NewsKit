import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
  renderWithTheme,
} from '../../test/test-utils';
import {Switch, SwitchProps} from '..';
import {sizes, states} from './helpers';
import {
  IconFilledCheck,
  IconFilledClose,
  IconFilledDarkMode,
  IconFilledError,
  IconFilledLightMode,
} from '../../icons';
import {BaseSwitchIconProps} from '../../base-switch/types';
import {EventTrigger} from '../../instrumentation';

describe('Switch', () => {
  states.forEach(([id, props]) => {
    test(`render with state: ${id}`, () => {
      const fragment = renderToFragmentWithTheme(() => (
        <Switch
          label="label"
          {...props}
          id={id.replace(' ', '-').toLowerCase()}
        />
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
            paddingInline: '20px',
            marginBlock: '20px',
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
          thumbIcon: IconFilledError,
          onIcon: IconFilledCheck,
          offIcon: IconFilledClose,
          paddingInline: '20px',
          marginBlock: '15px',
        }}
      />
    ));
    expect(fragment).toMatchSnapshot();
  });

  test('passes checked prop to custom thumb icon', () => {
    const props: SwitchProps = {
      label: 'label',
      overrides: {
        thumbIcon: ({checked}: BaseSwitchIconProps) =>
          checked ? <IconFilledDarkMode /> : <IconFilledLightMode />,
      },
    };

    const checkedFragment = renderToFragmentWithTheme(() => (
      <Switch {...props} checked />
    ));
    expect(checkedFragment).toMatchSnapshot();

    const uncheckedFragment = renderToFragmentWithTheme(() => (
      <Switch {...props} checked={false} />
    ));
    expect(uncheckedFragment).toMatchSnapshot();
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

  test('hide feedback', () => {
    const {queryByTestId, asFragment} = renderWithTheme(() => (
      <Switch label="label" hideFeedback />
    ));
    const feedback = queryByTestId('checkbox-feedback');
    expect(feedback).toBeNull();

    expect(asFragment()).toMatchSnapshot();
  });

  test('fire tracking event', () => {
    const mockFireEvent = jest.fn();
    const props = {
      label: 'label',
      defaultChecked: false,
      eventOriginator: 'switch-item',
      eventContext: {
        event: 'other event data',
      },
    };

    const {getByRole} = renderWithImplementation(Switch, props, mockFireEvent);
    const checkbox = getByRole('switch') as HTMLInputElement;

    fireEvent.click(checkbox);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'switch-item',
      trigger: EventTrigger.Change,
      context: {
        checked: true,
        event: 'other event data',
      },
    });
  });
});

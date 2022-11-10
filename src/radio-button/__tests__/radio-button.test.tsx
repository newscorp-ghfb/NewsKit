import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
  renderWithTheme,
} from '../../test/test-utils';
import {RadioButton, RadioGroup, RadioGroupProps} from '..';
import {createTheme} from '../../theme';
import {GridLayout} from '../../grid-layout';
import {EventTrigger} from '../../instrumentation';

const RadioButtonGroupTest = (props: RadioGroupProps) => (
  <RadioGroup name="size" {...props}>
    {['small', 'medium', 'large'].map(size => (
      <RadioButton key={size} size="medium" label={size} value={size} />
    ))}
  </RadioGroup>
);

const setup = (props: RadioGroupProps) => {
  const utils = renderWithTheme(() => <RadioButtonGroupTest {...props} />);
  const inputs = utils.getAllByTestId('radio-input');
  return {
    inputs,
    ...utils,
  };
};

describe('RadioButton', () => {
  test('with no checked', () => {
    const {inputs} = setup({});
    inputs.forEach(input => {
      expect(input).not.toHaveAttribute('checked');
    });
  });

  test('with default checked', () => {
    const {inputs} = setup({defaultValue: 'medium'});
    const [small, medium] = inputs;
    expect(small).not.toHaveAttribute('checked');
    expect(medium).toHaveAttribute('checked');
  });

  test('with  checked', () => {
    const {inputs} = setup({value: 'medium'});
    const [small, medium] = inputs;
    expect(small).not.toHaveAttribute('checked');
    expect(medium).toHaveAttribute('checked');
  });

  test('onChange event', () => {
    const onChange = jest.fn();

    const {inputs} = setup({value: 'medium', onChange});

    const [firstInput] = inputs;
    firstInput.click();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({value: 'small'}),
      }),
    );
  });

  test('passes icon overrides as props to DefaultIcon', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-theme',
      overrides: {
        stylePresets: {
          customIcon: {
            base: {
              backgroundColor: 'blue',
            },
          },
        },
      },
    });

    const overrides = {
      spaceStack: 'space060',
      icon: {
        stylePreset: 'customIcon',
      },
    };

    const TestGroup = () => (
      <RadioGroup name="style" defaultValue="1">
        <GridLayout rowGap="space040" columns="max-content">
          <RadioButton value="1" label="Option 1" overrides={overrides} />
          <RadioButton value="2" label="Option 2" overrides={overrides} />
          <RadioButton value="3" label="Option 3" overrides={overrides} />
        </GridLayout>
      </RadioGroup>
    );

    const fragment = renderToFragmentWithTheme(TestGroup, {}, myCustomTheme);
    expect(fragment).toMatchSnapshot();
  });

  test('fire tracking event', () => {
    const mockFireEvent = jest.fn();
    const props = {
      defaultChecked: false,
      eventOriginator: 'radio-button-item',
      eventContext: {
        event: 'other event data',
      },
    };

    const {getByRole} = renderWithImplementation(
      RadioButton,
      props,
      mockFireEvent,
    );
    const radio = getByRole('radio') as HTMLInputElement;

    fireEvent.click(radio);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'radio-button-item',
      trigger: EventTrigger.Change,
      context: {
        checked: true,
        event: 'other event data',
      },
    });
  });
});

import React from 'react';
import {renderWithTheme} from '../../test/test-utils';
import {RadioButton, RadioGroup, RadioGroupProps} from '..';

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
});

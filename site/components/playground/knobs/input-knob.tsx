import React from 'react';
import {
  styled,
  getTypePresetFromTheme,
  getSizingFromTheme,
  getColorFromTheme,
} from 'newskit';
import {KnobContainer, getHash} from './common';

type Value = string | number;
export interface InputKnobProps {
  value: Value;
  label: string;
  labelVisible?: boolean;
  onChange?: (value: Value | undefined) => void;
}

export const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const StyledLabel = styled.label`
  display: block;
  ${getTypePresetFromTheme('body030')};
  margin: ${getSizingFromTheme('sizing040')} 0px;
`;

export const StyledInput = styled.input`
  ${getTypePresetFromTheme('body010')};
  display: block;
  padding: ${getSizingFromTheme('sizing020')};
  background-color: ${getColorFromTheme('interface020')};
  color: ${getColorFromTheme('inkContrast')};

  width: 100%;
  max-width: 350px;
  box-sizing: border-box;
  border-radius: ${({theme}) => theme.borderRadius.semiRounded.sizing040};
  border-style: solid;
  border-width: ${({theme}) => theme.borders.borderWidth020};
  border-color: ${getColorFromTheme('interface040')};

  :focus {
    outline: none;
    border-color: ${getColorFromTheme('interactive010')};
  }
`;

const TEST_ID_PREFIX = 'input-knob';

export const InputKnob: React.FC<InputKnobProps> = ({
  label,
  labelVisible = true,
  value,
  onChange = () => {},
}) => {
  const id = `${getHash()}-${label}`;
  const lowercaseLabel = label.toLowerCase().replace(' ', '-');
  const LabelForInput = labelVisible ? (
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
  ) : (
    <HiddenLabel htmlFor={id}>{label}</HiddenLabel>
  );
  const inputType = typeof value === 'number' ? 'number' : 'text';
  const v = inputType === 'text' && !value ? '' : value;
  return (
    <KnobContainer>
      {LabelForInput}
      <StyledInput
        type={inputType}
        id={id}
        name={label}
        value={v}
        data-testid={`${TEST_ID_PREFIX}-${lowercaseLabel}`}
        onChange={({target}) => {
          onChange(inputType === 'number' ? +target.value : target.value);
        }}
      />
    </KnobContainer>
  );
};

export default InputKnob;

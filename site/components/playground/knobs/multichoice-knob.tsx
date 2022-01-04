import React from 'react';
import {
  styled,
  getTypePresetFromTheme,
  getSizingFromTheme,
  css,
  getColorFromTheme,
} from 'newskit';
import {Block} from '../../block';
import {KnobContainer, StyledTitle, getHash} from './common';

export interface MultiChoiceKnobOptions {
  value: string;
  label: string;
  isDefault?: boolean;
}

export interface MultiChoiceKnobProps {
  label: string;
  options: MultiChoiceKnobOptions[];
  value: MultiChoiceKnobOptions['value'] | undefined;
  onChange?: (selectedValue: string) => void;
}

interface StyledLabelProps {
  first?: boolean;
  last?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: inline-block;
  ${getTypePresetFromTheme('body010')};
  padding: ${getSizingFromTheme('sizing040')};
  background-color: ${getColorFromTheme('interface020')};
  color: ${getColorFromTheme('inkSubtle')};
  cursor: pointer;
  user-select: none;

  ${({theme}) => {
    const borderRadiusSize = theme.borderRadius.rounded.sizing050;
    return css`
      :first-of-type {
        border-top-left-radius: ${borderRadiusSize};
        border-bottom-left-radius: ${borderRadiusSize};
      }
      :last-of-type {
        border-top-right-radius: ${borderRadiusSize};
        border-bottom-right-radius: ${borderRadiusSize};
      }
    `;
  }}

  input:checked + & {
    background-color: ${getColorFromTheme('interactive010')};
    color: ${getColorFromTheme('interface020')};
  }
  input:focus + & {
    outline: none;
    background-color: ${getColorFromTheme('interactive010Pressed')};
  }

  :hover {
    background-color: ${getColorFromTheme('interfaceHover')};
  }
`;

const StyledInput = styled.input`
  display: inline;
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

const StyledFieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

const StyledLegend = StyledTitle.withComponent('legend');

export const MultiChoiceKnob: React.FC<MultiChoiceKnobProps> = ({
  label: name,
  options,
  onChange,
  value: selectedValue,
}) => {
  const hash = getHash();
  return (
    <KnobContainer>
      <Block $display="inline" $position="relative">
        <StyledFieldset>
          <StyledLegend>{name}</StyledLegend>
          {options.map(({value, label}) => {
            const id = `multichoice-knob-${hash}-${label}-${value}`;
            return (
              <React.Fragment key={id}>
                <StyledInput
                  type="radio"
                  id={id}
                  data-testid={value}
                  name={hash + name}
                  value={value}
                  defaultChecked={selectedValue === value}
                  onClick={() => onChange && onChange(value)}
                />
                <StyledLabel htmlFor={id}>{label}</StyledLabel>
              </React.Fragment>
            );
          })}
        </StyledFieldset>
      </Block>
    </KnobContainer>
  );
};

export default MultiChoiceKnob;

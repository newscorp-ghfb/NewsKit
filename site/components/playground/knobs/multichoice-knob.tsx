import React from 'react';
import {
  styled,
  getTypographyPresetFromTheme,
  getSizingFromTheme,
  css,
  getColorFromTheme,
  MQ,
} from 'newskit';
import {LegacyBlock} from '../../legacy-block';
import {KnobContainer, StyledTitle, getHash} from './common';

export interface Overrides {
  typographyPreset?: MQ<string>;
  stylePreset?: MQ<string>;
  spaceInset?: MQ<string>;

  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;

  iconSize?: string;
  space?: MQ<string>;
}
export interface MultiChoiceKnobOptions {
  value: string | Overrides;
  label: string;
  isDefault?: boolean;
}

export interface MultiChoiceKnobProps {
  label: string;
  options: MultiChoiceKnobOptions[];
  value: MultiChoiceKnobOptions['value'] | undefined;
  onChange?: (selectedValue: MultiChoiceKnobOptions['value']) => void;
}

interface StyledLabelProps {
  first?: boolean;
  last?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: inline-block;
  ${getTypographyPresetFromTheme('utilityBody010')};
  padding: ${getSizingFromTheme('sizing020')} ${getSizingFromTheme('sizing040')};
  background-color: ${getColorFromTheme('interface020')};
  color: ${getColorFromTheme('inkSubtle')};
  cursor: pointer;
  user-select: none;

  ${({theme}) => {
    const borderRadiusSize = theme.borders.borderRadiusDefault;
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
    background-color: ${getColorFromTheme('inkBrand010')};
    color: ${getColorFromTheme('interface020')};
  }
  input:focus + & {
    outline: none;
    background-color: ${getColorFromTheme('blue080')};
  }

  :hover {
    background-color: ${getColorFromTheme('interactivePrimary010')};
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
  margin-bottom: ${getSizingFromTheme('sizing050')};
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
      <LegacyBlock display="inline" position="relative">
        <StyledFieldset>
          <StyledLegend>{name}</StyledLegend>
          {options.map(({value, label}) => {
            let checked;

            if (
              typeof selectedValue === 'object' &&
              typeof value === 'object'
            ) {
              const propName = Object.keys(value)[0] as keyof Overrides;
              checked = selectedValue[propName] === value[propName];
            } else {
              checked = selectedValue === value;
            }

            const id = `multichoice-knob-${hash}-${label}-${value}`;
            return (
              <React.Fragment key={id}>
                <StyledInput
                  type="radio"
                  id={id}
                  data-testid={value}
                  name={hash + name}
                  defaultChecked={checked}
                  onClick={() => onChange && onChange(value)}
                />
                <StyledLabel htmlFor={id}>{label}</StyledLabel>
              </React.Fragment>
            );
          })}
        </StyledFieldset>
      </LegacyBlock>
    </KnobContainer>
  );
};

export default MultiChoiceKnob;

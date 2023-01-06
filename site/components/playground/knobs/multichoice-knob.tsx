import React from 'react';
import {
  styled,
  getTypographyPresetFromTheme,
  getSizingFromTheme,
  css,
  getColorFromTheme,
  MQ,
  EventTrigger,
  useInstrumentation,
} from 'newskit';
import {LegacyBlock} from '../../legacy-block';
import {KnobContainer, StyledTitle} from './common';

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
  value: string | Overrides | undefined;
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
    background-color: ${getColorFromTheme('interactiveSecondary010')};
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setChecked = (selectedValue: any, value: any): boolean => {
  if (typeof value === 'object' && typeof selectedValue === 'object') {
    return Object.keys(value).every(element => {
      if (typeof value[element] === 'object') {
        return setChecked(selectedValue[element], value[element]);
      }
      return value[element] === selectedValue[element];
    });
  }
  return selectedValue === value;
};

export const MultiChoiceKnob: React.FC<MultiChoiceKnobProps> = ({
  label: name,
  options,
  onChange,
  value: selectedValue,
}) => {
  const {fireEvent} = useInstrumentation();
  return (
    <KnobContainer>
      <LegacyBlock display="inline" position="relative">
        <StyledFieldset>
          <StyledLegend>{name}</StyledLegend>
          {options.map(({value, label}, index) => {
            const checked = setChecked(selectedValue, value);

            const id = `multichoice-knob-${index}-${label}-${value}`;
            return (
              <React.Fragment key={id}>
                <StyledInput
                  type="radio"
                  id={id}
                  data-testid={value}
                  name={index + name}
                  defaultChecked={checked}
                  onClick={() => {
                    if (onChange) onChange(value);
                    fireEvent({
                      trigger: EventTrigger.Change,
                      originator: 'multichoice-knob',
                      context: {
                        prop: name,
                        value: label,
                      },
                    });
                  }}
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

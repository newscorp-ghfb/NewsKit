import React from 'react';
import {
  styled,
  getSizingFromTheme,
  getTypographyPresetFromTheme,
  getColorFromTheme,
  getBuiId,
} from 'newskit';
import {LegacyBlock} from '../legacy-block';

const StyledContainer = styled.span`
  position: relative;

  ::after {
    content: '';
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${getSizingFromTheme('sizing010')};
    border-color: transparent;
    border-top-color: ${getColorFromTheme('inkContrast')};
    top: 10px;
    right: 16px;
  }
`;

const StyledSelectLabel = styled.label`
  ${getTypographyPresetFromTheme('label030')};
  color: ${getColorFromTheme('inkBase')};
`;

const StyledSelect = styled.select`
  ${getTypographyPresetFromTheme('body010')}
  line-height:1.5;
  margin-left: ${getSizingFromTheme('sizing020')};
  padding: ${getSizingFromTheme('sizing020')} ${getSizingFromTheme('sizing080')}
    ${getSizingFromTheme('sizing020')} ${getSizingFromTheme('sizing030')};
  border-radius: ${({theme}) => theme.borders.borderRadiusDefault};
  appearance: none;
  border: none;
  background-color: ${getColorFromTheme('interface020')};
  color: ${getColorFromTheme('inkSubtle')};

  ::after {
    content: '>';
    position: absolute;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SelectorProps<T = any> {
  children: string;
  options: [string, T][];
  onChange: (newValue: T) => void;
}

export const Selector: React.FC<SelectorProps> = ({
  children,
  options,
  onChange,
}) => {
  const id = `playground-${children}-${getBuiId()}-selector`;
  return (
    <LegacyBlock
      font="body030"
      paddingTop="sizing050"
      paddingBottom="sizing040"
      paddingLeft="sizing030"
    >
      <StyledContainer>
        <StyledSelectLabel htmlFor={id}>{children}</StyledSelectLabel>
        <StyledSelect
          id={id}
          name={id}
          onChange={({target: {value}}) => {
            onChange(options[parseInt(value, 10)][1]);
          }}
        >
          {options.map(([label], index) => (
            <option key={label} value={index} data-testid={label}>
              {label}
            </option>
          ))}
        </StyledSelect>
      </StyledContainer>
    </LegacyBlock>
  );
};

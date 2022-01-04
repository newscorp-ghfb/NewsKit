/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import {
  styled,
  getSizingFromTheme,
  getTypePresetFromTheme,
  getColorFromTheme,
  getBuiId,
} from 'newskit';
import {Block} from '../block';

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

const StyledSelect = styled.select`
  ${getTypePresetFromTheme('body010')}
  line-height:1.5;
  margin-left: ${getSizingFromTheme('spacingSize020')};
  padding: ${getSizingFromTheme('spacingSize020')}
    ${getSizingFromTheme('spacingSize080')}
    ${getSizingFromTheme('spacingSize020')}
    ${getSizingFromTheme('spacingSize030')};
  border-radius: ${({theme}) => theme.borderRadius.rounded.sizing050};
  appearance: none;
  border: none;
  background-color: ${getColorFromTheme('interface020')};

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
    <Block
      $font="body030"
      $paddingTop="sizing050"
      $paddingBottom="sizing040"
      $paddingLeft="sizing030"
    >
      <StyledContainer>
        <label htmlFor={id}>{children}</label>
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
    </Block>
  );
};

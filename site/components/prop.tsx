/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import {
  styled,
  getTypePresetFromTheme,
  getSizingFromTheme,
  getBorderFromTheme,
  getColorFromTheme,
} from 'newskit';

export interface PropProps {
  name: string;
  type: string;
  enum?: any;
  default?: any;
  required?: boolean;
}

export interface DefaultValueProps {
  type: any;
  value: any;
  enumObj?: any;
}

const StyledContainer = styled.div`
  ${getTypePresetFromTheme('body020')}
  line-height: 1.3;
  margin-bottom: ${getSizingFromTheme('spacingSize060')};
  color: ${getColorFromTheme('inkBase')};
`;

const PropsRow = styled.div`
  ${getTypePresetFromTheme('body020')};
  font-family: monospace;
  padding-bottom: ${getSizingFromTheme('spacingSize020')};
  border-bottom-style: solid;
  border-bottom-width: ${getBorderFromTheme('borderWidth010')};
  border-bottom-color: ${getColorFromTheme('interface040')};
  margin-bottom: ${getSizingFromTheme('spacingSize020')};
`;

const PropName = styled.span`
  padding: ${getSizingFromTheme('spacingSize010')};
  border-radius: ${({theme}) => theme.borderRadius.semiRounded.sizing020};
  background: ${getColorFromTheme('highlight')};
`;

const PropType = styled.span`
  padding: ${getSizingFromTheme('spacingSize010')};
  border-radius: ${({theme}) => theme.borderRadius.semiRounded.sizing020};
  background: ${getColorFromTheme('interface030')};
  margin-left: ${getSizingFromTheme('spacingSize030')};
`;

const PropRequiredFlag = styled.span`
  padding: ${getSizingFromTheme('spacingSize010')};
  border-radius: ${({theme}) => theme.borderRadius.semiRounded.sizing020};
  background: ${getColorFromTheme('semanticNegative')};
  color: ${getColorFromTheme('inverse010')};
  margin: 0 ${getSizingFromTheme('spacingSize030')};

  ::before {
    content: 'required';
  }
`;

const DefaultValue: React.FC<DefaultValueProps> = ({value, type, enumObj}) => {
  const val = value.toString();
  const prefixedValue = enumObj ? `${type}.${value}` : val;
  return <span> = {prefixedValue}</span>;
};

export const Prop: React.FC<PropProps> = ({
  name,
  type,
  enum: enumObj,
  default: defaultVal,
  required,
  children,
}) => (
  <StyledContainer>
    <PropsRow>
      <PropName>{name}</PropName>:<PropType>{type}</PropType>
      {typeof defaultVal !== 'undefined' && (
        <DefaultValue value={defaultVal} type={type} enumObj={enumObj} />
      )}
      {required && <PropRequiredFlag />}
    </PropsRow>
    {children}
  </StyledContainer>
);
export default Prop;

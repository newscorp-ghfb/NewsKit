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
  nested?: boolean;
}

export interface DefaultValueProps {
  type: any;
  value: any;
  enumObj?: any;
}

const StyledContainer = styled.div<Pick<PropProps, 'nested'>>`
  ${getTypePresetFromTheme('body020')}
  line-height: 1.3;
  margin-bottom: ${getSizingFromTheme('sizing060')};
  color: ${getColorFromTheme('inkBase')};
  margin-top: ${({nested}) => nested && getSizingFromTheme('sizing060')};
  margin-left: ${({nested}) => nested && getSizingFromTheme('sizing060')};
`;

const PropsRow = styled.div`
  ${getTypePresetFromTheme('body020')};
  font-family: monospace;
  padding-bottom: ${getSizingFromTheme('sizing020')};
  border-bottom-style: solid;
  border-bottom-width: ${getBorderFromTheme('borderWidth010')};
  border-bottom-color: ${getColorFromTheme('interface040')};
  margin-bottom: ${getSizingFromTheme('sizing020')};
`;

const PropName = styled.span`
  display: inline-block;
  padding: ${getSizingFromTheme('sizing010')};
  border-radius: ${({theme}) => theme.borders.borderRadiusDefault};
  background: ${getColorFromTheme('semanticInformative010')};
  color: ${getColorFromTheme('inkInverse')};
`;

const PropColon = styled.span`
  ::before {
    content: ':';
  }
  margin-right: ${getSizingFromTheme('sizing030')};
`;

const PropType = styled.span`
  display: inline-block;
  padding: ${getSizingFromTheme('sizing010')};
  border-radius: ${({theme}) => theme.borders.borderRadiusDefault};
  background: ${getColorFromTheme('semanticPositive030')};
  color: ${getColorFromTheme('inkInverse')};
`;

const PropRequiredFlag = styled.span`
  display: inline-block;
  padding: ${getSizingFromTheme('sizing010')};
  border-radius: ${({theme}) => theme.borders.borderRadiusDefault};
  background: ${getColorFromTheme('semanticNegative030')};
  color: ${getColorFromTheme('inkInverse')};
  margin: 0 ${getSizingFromTheme('sizing030')};

  ::before {
    content: 'required';
  }
`;

const DefaultValue: React.FC<DefaultValueProps> = ({value, type, enumObj}) => {
  const val = value.toString();
  const prefixedValue = enumObj ? `${type}.${value}` : val;
  return <span> = {prefixedValue}</span>;
};

const wrapChild = (child: React.ReactNode & {props?: PropProps}) => {
  // eslint-disable-next-line no-use-before-define
  if (child.props && child.props.mdxType === Prop.displayName) {
    return <Prop nested {...child.props} />;
  }
  return child;
};

export const Prop: React.FC<PropProps> = ({
  name,
  type,
  enum: enumObj,
  default: defaultVal,
  required,
  children,
  nested,
}) => (
  <StyledContainer nested={nested}>
    <PropsRow>
      <PropName>{name}</PropName>
      <PropColon />
      <PropType>{type}</PropType>
      {typeof defaultVal !== 'undefined' && (
        <DefaultValue value={defaultVal} type={type} enumObj={enumObj} />
      )}
      {required && <PropRequiredFlag />}
    </PropsRow>
    {children && React.Children.map(children, wrapChild)}
  </StyledContainer>
);

export default Prop;

Prop.displayName = 'Prop';

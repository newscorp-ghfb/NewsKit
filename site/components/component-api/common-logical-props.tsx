import React from 'react';
import {Prop, StyledContainer} from '../prop';
import {OverridesRowsProps} from './types';

export const logicalMarginOverrideProps: OverridesRowsProps[] = [
  {
    attribute: 'marginInline',
    type: 'MQ<string>',
    description: `Takes one space token to specify the logical inline start and end margin of the container. Can be used on breakpoints`,
  },
  {
    attribute: 'marginInlineStart',
    type: 'MQ<string>',
    description: `Takes one space token to specify the logical inline start margin of the container. Can be used on breakpoints`,
  },
  {
    attribute: 'marginInlineEnd',
    type: 'MQ<string>',
    description: `Takes one space token to specify the logical inline end margin of the container. Can be used on breakpoints`,
  },
  {
    attribute: 'marginBlock',
    type: 'MQ<string>',
    description: `Takes one space token to specify the logical block start and end margin of the container. Can be used on breakpoints`,
  },
  {
    attribute: 'marginBlockStart',
    type: 'MQ<string>',
    description: `Takes one space token to specify the logical block start margin of the container. Can be used on breakpoints`,
  },
  {
    attribute: 'marginBlockEnd',
    type: 'MQ<string>',
    description: `Takes one space token to specify the logical block end margin of the container. Can be used on breakpoints`,
  },
];

export const logicalPaddingOverrideProps: OverridesRowsProps[] = [
  {
    attribute: 'paddingInline',
    type: 'MQ<string>',
    description: `Takes one space token to specify the logical inline start and end padding of the container. Can be used on breakpoints`,
  },
  {
    attribute: 'paddingInlineStart',
    type: 'MQ<string>',
    description: `Takes one space token to specify the logical inline start padding of the container. Can be used on breakpoints`,
  },
  {
    attribute: 'paddingInlineEnd',
    type: 'MQ<string>',
    description: `Takes one space token to specify the logical inline end padding of the container. Can be used on breakpoints`,
  },
  {
    attribute: 'paddingBlock',
    type: 'MQ<string>',
    description: `Takes one space token to specify the logical block start and end padding of the container. Can be used on breakpoints`,
  },
  {
    attribute: 'paddingBlockStart',
    type: 'MQ<string>',
    description: `Takes one space token to specify the logical block start padding of the container. Can be used on breakpoints`,
  },
  {
    attribute: 'paddingBlockEnd',
    type: 'MQ<string>',
    description: `Takes one space token to specify the logical block end padding of the container. Can be used on breakpoints`,
  },
];

export const commonLogicalProps = (
  type: 'propsRow' | 'overridesRow' = 'overridesRow',
  defaultsMap?: Record<string, string | string[]>,
  defaultsOnly?: boolean,
) => {
  const logicalPropsOverrides = [
    ...logicalMarginOverrideProps,
    ...logicalPaddingOverrideProps,
  ];

  if (type === 'propsRow') {
    return logicalPropsOverrides
      .map(({attribute: name, ...rest}) => ({
        name,
        ...rest,
        default: defaultsMap && defaultsMap[name],
      }))
      .filter(entry => !defaultsOnly || entry.default);
  }
  return defaultsMap
    ? logicalPropsOverrides
        .map(({attribute, ...rest}) => ({
          attribute,
          ...rest,
          default: defaultsMap[attribute],
        }))
        .filter(entry => !defaultsOnly || entry.default)
    : logicalPropsOverrides;
};

interface CommonLogicalPropsMDXProps {
  nested: boolean;
}

export const CommonLogicalMarginPropsMDX: React.FC<CommonLogicalPropsMDXProps> = ({
  nested = false,
}) => (
  <StyledContainer nested={nested}>
    {logicalMarginOverrideProps.map(({attribute, type, description}) => (
      <React.Fragment key={attribute}>
        <Prop name={attribute} type={type as string}>
          {description}
        </Prop>
      </React.Fragment>
    ))}
  </StyledContainer>
);

export const CommonLogicalPaddingPropsMDX: React.FC<CommonLogicalPropsMDXProps> = ({
  nested = false,
}) => (
  <StyledContainer nested={nested}>
    {logicalPaddingOverrideProps.map(({attribute, type, description}) => (
      <React.Fragment key={attribute}>
        <Prop name={attribute} type={type as string}>
          {description}
        </Prop>
      </React.Fragment>
    ))}
  </StyledContainer>
);

export const CommonLogicalPropsMDX: React.FC<CommonLogicalPropsMDXProps> = ({
  nested = false,
}) => (
  <>
    <CommonLogicalPaddingPropsMDX nested={nested} />
    <CommonLogicalMarginPropsMDX nested={nested} />
  </>
);

export const prefixLogicalProps = (
  logicalPropsOverrides: OverridesRowsProps[],
  prefix: string,
) =>
  logicalPropsOverrides.map(({attribute, ...rest}) => ({
    ...rest,
    attribute: `${prefix}.${attribute}`,
  }));

export const getLogicalPropsTable = (
  logicalPropsOverrides: OverridesRowsProps[] = [
    ...logicalPaddingOverrideProps,
    ...logicalMarginOverrideProps,
  ],
  prefix: string = '',
  defaults: {
    [key in string]: string | string[];
  } = {},
) =>
  logicalPropsOverrides.map(({attribute, ...rest}) => ({
    ...rest,
    attribute: `${prefix ? `${prefix}.` : ''}${attribute}`,
    default: defaults[attribute],
  }));

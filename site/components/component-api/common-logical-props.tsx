import React from 'react';
import {Prop, StyledContainer} from '../prop';

export const commonLogicalProps = (type?: 'propsRow' | 'overridesRow') => {
  const logicalPropsOverrides = [
    {
      attribute: 'paddingInline',
      type: 'MQ<string>',
      description: `It can take one space token to specify the logical inline start and end padding of the container. This space token can also be used on breakpoints.	`,
    },
    {
      attribute: 'paddingInlineStart',
      type: 'MQ<string>',
      description: `It can take one space token to specify the logical inline start padding of the container. This space token can also be used on breakpoints.       `,
    },
    {
      attribute: 'paddingInlineEnd',
      type: 'MQ<string>',
      description: `It can take one space token to specify the logical inline end padding of the container. This space token can also be used on breakpoints.       `,
    },
    {
      attribute: 'paddingBlock',
      type: 'MQ<string>',
      description: `It can take one space token to specify the logical block start and end padding of the container. This space token can also be used on breakpoints.       `,
    },
    {
      attribute: 'paddingBlockStart',
      type: 'MQ<string>',
      description: `It can take one space token to specify the logical block start padding of the container. This space token can also be used on breakpoints.       `,
    },
    {
      attribute: 'paddingBlockEnd',
      type: 'MQ<string>',
      description: `It can take one space token to specify the logical block end padding of the container. This space token can also be used on breakpoints.       `,
    },
    {
      attribute: 'marginInline',
      type: 'MQ<string>',
      description: `It can take one space token to specify the logical inline start and end margin of the container. This space token can also be used on breakpoints.       `,
    },
    {
      attribute: 'marginInlineStart',
      type: 'MQ<string>',
      description: `It can take one space token to specify the logical inline start margin of thecontainer. This space token can also be used on breakpoints.       `,
    },
    {
      attribute: 'marginInlineEnd',
      type: 'MQ<string>',
      description: `It can take one space token to specify the logical inline end margin of the container. This space token can also be used on breakpoints.       `,
    },
    {
      attribute: 'marginBlock',
      type: 'MQ<string>',
      description: `It can take one space token to specify the logical block start and end margin of the container. This space token can also be used on breakpoints.       `,
    },
    {
      attribute: 'marginBlockStart',
      type: 'MQ<string>',
      description: `It can take one space token to specify the logical block start margin of the container. This space token can also be used on breakpoints.       `,
    },
    {
      attribute: 'marginBlockEnd',
      type: 'MQ<string>',
      description: `It can take one space token to specify the logical block end margin of the container. This space token can also be used on breakpoints.       `,
    },
  ];

  const logicalProps = logicalPropsOverrides.map(
    ({attribute: name, ...rest}) => ({
      name,
      ...rest,
    }),
  );

  return type === 'propsRow' ? logicalProps : logicalPropsOverrides;
};

interface CommonLogicalPropsMDXProps {
  nested: boolean;
}

export const CommonLogicalPropsMDX: React.FC<CommonLogicalPropsMDXProps> = ({
  nested = false,
}) => (
  <StyledContainer nested={nested}>
    <Prop name="paddingInline" type="MQ<string>">
      It can take one space token to specify the logical inline start and end
      padding of the container. This space token can also be used on
      breakpoints.
    </Prop>
    <Prop name="paddingInlineStart" type="MQ<string>">
      It can take one space token to specify the logical inline start padding of
      the container. This space token can also be used on breakpoints.
    </Prop>
    <Prop name="paddingInlineEnd" type="MQ<string>">
      It can take one space token to specify the logical inline end padding of
      the container. This space token can also be used on breakpoints.
    </Prop>
    <Prop name="paddingBlock" type="MQ<string>">
      It can take one space token to specify the logical block start and end
      padding of the container. This space token can also be used on
      breakpoints.
    </Prop>
    <Prop name="paddingBlockStart" type="MQ<string>">
      It can take one space token to specify the logical block start padding of
      the container. This space token can also be used on breakpoints.
    </Prop>
    <Prop name="paddingBlockEnd" type="MQ<string>">
      It can take one space token to specify the logical block end padding of
      the container. This space token can also be used on breakpoints.
    </Prop>
    <Prop name="marginInline" type="MQ<string>">
      It can take one space token to specify the logical inline start and end
      margin of the container. This space token can also be used on breakpoints.
    </Prop>
    <Prop name="marginInlineStart" type="MQ<string>">
      It can take one space token to specify the logical inline start margin of
      the container. This space token can also be used on breakpoints.
    </Prop>
    <Prop name="marginInlineEnd" type="MQ<string>">
      It can take one space token to specify the logical inline end margin of
      the container. This space token can also be used on breakpoints.
    </Prop>
    <Prop name="marginBlock" type="MQ<string>">
      It can take one space token to specify the logical block start and end
      margin of the container. This space token can also be used on breakpoints.
    </Prop>
    <Prop name="marginBlockStart" type="MQ<string>">
      It can take one space token to specify the logical block start margin of
      the container. This space token can also be used on breakpoints.
    </Prop>
    <Prop name="marginBlockEnd" type="MQ<string>">
      It can take one space token to specify the logical block end margin of the
      container. This space token can also be used on breakpoints.
    </Prop>
  </StyledContainer>
);

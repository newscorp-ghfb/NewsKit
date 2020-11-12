import React from 'react';
import {styled} from '../style';

// When the component has been rendered within a react context, displayName is attached to `type` property,
// while in nodeJs (e.g. during testing) it's attached directly on the component. That's why we have ComponentWithDisplayName and RenderedComponentWithDisplayName
export const ComponentWithDisplayName: React.FC = () => <div />;
ComponentWithDisplayName.displayName = 'ComponentWithDisplayName';

export const ComponentWithAlternativeDisplayName: React.FC = () => <div />;
ComponentWithAlternativeDisplayName.displayName =
  'ComponentWithAlternativeDisplayName';

export const RenderedComponentWithDisplayName: React.FC & {
  type: object;
} = () => <div />;
RenderedComponentWithDisplayName.type = {
  displayName: 'ComponentWithDisplayName',
};

export const MdxComponentWithDisplayName: React.FC & {
  props: {
    mdxType: string;
  };
} = () => <div />;
MdxComponentWithDisplayName.props = {
  mdxType: 'ComponentWithDisplayName',
};

export const ComponentWithoutDisplayName: React.FC = () => <div />;

export const ValidNode = <div />;
export const InvalidNode = false;
export const StyledComponentMock = styled.div`
  background-color: blue;
`;
export const FunctionalComponentMock: React.ComponentType = () => (
  <StyledComponentMock />
);
export const ReactElementMock: React.ReactElement = <StyledComponentMock />;

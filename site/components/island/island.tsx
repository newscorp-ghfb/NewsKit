import React from 'react';
import {styled} from '../../../src/utils';

type Props = {
  clientOnly: true;
  placeholderHeight?: number;
  children: JSX.Element;
};

const Placeholder = styled.div<{height: number}>`
  height: ${props => props.height}px;
`;

const decideChildren = (
  children: JSX.Element,
  clientOnly?: boolean,
  placeholderHeight?: number,
) => {
  if (!clientOnly) return children; // Server side rendering
  if (placeholderHeight)
    return <Placeholder height={placeholderHeight} data-name="placeholder" />;
  return null;
};

export const Island = ({clientOnly, placeholderHeight, children}: Props) => (
  // @ts-ignore
  <nk-island
    name={children.type.name}
    props={JSON.stringify(children.props)}
    clientOnly={clientOnly}
  >
    {decideChildren(children, clientOnly, placeholderHeight)}
    {/* @ts-ignore */}
  </nk-island>
);

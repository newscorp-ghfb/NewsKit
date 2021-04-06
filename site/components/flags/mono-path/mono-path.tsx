import React from 'react';
import {getSSRId} from 'newskit';
import {IndentationBlock} from './styled';
import {Mono} from '../mono';

const renderBlocks = (v: string, i: number, arr: string[]) => (
  <IndentationBlock
    key={getSSRId()}
    depth={i}
    // The row spacing between each path segment
    spaceStack={arr.length > 1 ? 'space010' : undefined}
  >
    <Mono minimal>{i === 0 ? v : `.${v}`}</Mono>
  </IndentationBlock>
);

export const MonoPath: React.FC<{children: string}> = ({children}) => (
  <>{children.split('.').map(renderBlocks)}</>
);

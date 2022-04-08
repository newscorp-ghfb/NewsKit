import * as React from 'react';
import {GridLayout} from '../../grid-layout';
import {ImagePlaceholder} from './placeholders';

const xs = `
    a
    b
    c
    d
    e
`;

const md = `
    a a
    b c
    d e
`;

const lg = `
    a b
    a c
    a d 
    a e
`;

const columns = {
  xs: '1fr',
  md: '1fr 1fr',
  lg: '1fr 200px',
};

const rows = {
  xs: '200px repeat(4, 100px)',
  md: '200px repeat(2, 100px)',
  lg: 'repeat(4, 100px)',
};

// Layout example
export const ExampleLayout = () => (
  <GridLayout
    columns={columns}
    rows={rows}
    areas={{xs, md, lg}}
    columnGap="space040"
    rowGap="space040"
  >
    {({A, B, C, D, E}) => (
      <>
        <A>
          <ImagePlaceholder />
        </A>
        <B>
          <ImagePlaceholder />
        </B>
        <C>
          <ImagePlaceholder />
        </C>
        <D>
          <ImagePlaceholder />
        </D>
        <E>
          <ImagePlaceholder />
        </E>
      </>
    )}
  </GridLayout>
);

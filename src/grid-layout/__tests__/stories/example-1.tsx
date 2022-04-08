import * as React from 'react';
import {styled} from '../../../utils';
import {GridLayout} from '../../grid-layout';

const Item = styled.div`
  padding: 10px;
  border: 5px solid rgb(17, 105, 121);
  background-color: rgba(17, 105, 121, 0.1);
  border-radius: 5px;
`;

// Basics
export const Example1 = () => (
  <GridLayout
    columns={{
      xs: '1fr',
      sm: '1fr 1fr',
      md: '1fr 1fr 1fr',
    }}
    rows="100px 100px"
    columnGap="space020"
    rowGap="space020"
  >
    <Item>One</Item>
    <Item>Two</Item>
    <Item>Three</Item>
    <Item>Four</Item>
    <Item>Five</Item>
  </GridLayout>
);
